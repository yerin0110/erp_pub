"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import { Calendar, Search, Table } from "lucide-react";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";

export default function Page() {
  const [monthlyList, setMonthlyList] = useState([]);

  const [selectedDepartmentName, setSelectedDepartmentName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  };

  const prevDate = () => {
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() - 1);
    setSelectedDate(date);
  };

  const nextDate = () => {
    const date = new Date(selectedDate);
    date.setMonth(date.getMonth() + 1);
    setSelectedDate(date);
  };

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0,
  ).getDate();

  const isWeekend = (day) => {
    const date = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day,
    );

    const week = date.getDay(); // 0: 일요일, 6: 토요일

    return week === 0 || week === 6;
  };

  const getMonthlyList = async () => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem("accessToken");

      const now = selectedDate;
      const year = now.getFullYear();
      const month =
        now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1; // 10미만인경우 앞에 0 붙임
      const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(); // 10미만인경우 앞에 0 붙임

      const findDate = `${year}-${month}-${day}`;

      const params = {
        findDate: findDate,
      };

      // 전체부서 아닌 경우) 다른 부서 선택한 경우 추가하여 조회한다.
      if (selectedDepartmentName) {
        params.departmentName = selectedDepartmentName;
      }

      const res = await baseApi.get("/api/v1/attendances/monthly", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      });

      setMonthlyList(res.data.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMonthlyList();
  }, [selectedDate]);

  useEffect(() => {
    getMonthlyList();
  }, [selectedDepartmentName]);

  useEffect(() => {
    console.log(monthlyList);
  }, [monthlyList]);

  return (
    <div className={c.wrap}>
      <Nav />

      <div className={c.continer}>
        <Aside
          dummy={[
            {
              titleInfo: {
                iconPath: "/images/Clock-blue.png",
                titleName: "근태관리",
              },
              submenuList: ["일일근태등록", "월근태현황"],
            },
            {
              titleInfo: {
                iconPath: "/images/Plane.png",
                titleName: "출장관리",
              },
              submenuList: ["출장신청", "출장정산", "출장사용현황"],
            },
            {
              titleInfo: {
                iconPath: "/images/Calendar.png",
                titleName: "휴가관리",
              },
              submenuList: [
                "휴가일수설정",
                "휴가일수계산",
                "휴가일수신청",
                "휴가사용현황",
              ],
            },
          ]}
        />

        <div className={c.main}>
          <PageTitle
            location={["근태관리", "근태관리", "월근태현황"]}
            title="월근태현황"
            subTitle="부서별·직원별 월간 근태 현황을 조회하고 관리합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Plus.png",
                text: "인쇄",
              },
            ]}
          />

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
                <button className={c.beforeBtn} onClick={prevDate}>
                  &lt;
                </button>
                <div className={c.dateInput}>
                  <Calendar size={13} color="#1b3a6b" />
                  {formatDate(selectedDate)}
                  {/* 2026년 7월 */}
                </div>
                <button className={c.nextBtn} onClick={nextDate}>
                  &gt;
                </button>
              </div>
              <div className={c.teamBox}>
                <span>부서</span>
                <select
                  value={selectedDepartmentName}
                  onChange={(e) => setSelectedDepartmentName(e.target.value)}
                >
                  <option value="">전체부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원본부">경영지원본부</option>
                  <option value="IT본부">IT본부</option>
                  <option value="ERP개발팀">ERP개발팀</option>
                </select>
              </div>
              <button className={c.searchBtn}>
                <Search size={13} color="#ffffff" />
                조회
              </button>
            </div>
            <div className={c.type}>
              <div>
                <span className={c.type1}></span>출근
              </div>
              <div>
                <span className={c.type2}></span>지각
              </div>
              <div>
                <span className={c.type3}></span>연차
              </div>
              <div>
                <span className={c.type4}></span>반차
              </div>
              <div>
                <span className={c.type5}></span>출장
              </div>
              <div>
                <span className={c.type6}></span>결근
              </div>
              <div>
                <span className={c.type7}></span>휴일
              </div>
            </div>
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <Table size={14} color="#1b3a6b" />
                2025년 7월 근태현황
              </div>
              <div className={c.total}>
                <div className={c.totalWork}>
                  <span></span>총 근무일{10}일
                </div>
                <span></span>
                <div className={c.targetMember}>
                  <span></span>대상 인원 {5}명
                </div>
              </div>
            </div>

            <table className={c.workTable}>
              <thead>
                <tr>
                  <th className={c.thName}>성명</th>
                  <th className={c.thTeam}>부서</th>
                  {[...Array(daysInMonth)].map((_, index) => (
                    <th
                      key={index}
                      className={isWeekend(index + 1) ? c.weekend : ""}
                    >
                      {index + 1}
                    </th>
                  ))}
                  <th className={c.thWork}>출근</th>
                  <th className={c.thLate}>지각</th>
                  <th className={c.thDayoff}>연차</th>
                  <th className={c.thAbsence}>결근</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td className={c.name}>김철수</td>
                  <td className={c.team}>인사팀</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td>
                  <td className={c.work}>20</td>
                  <td className={c.late}>1</td>
                  <td className={c.dayoff}>1</td>
                  <td className={c.absence}>0</td>
                  <td></td>
                </tr>
                <tr>
                  <td className={c.name}>이영희</td>
                  <td className={c.team}>경영지원팀</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                  <td>출</td>
                  <td className={c.work}>19</td>
                  <td className={c.late}>1</td>
                  <td className={c.dayoff}>2</td>
                  <td className={c.absence}>0</td>
                  <td></td>
                </tr> */}
                {monthlyList.map((item, idx) => (
                  <tr key={idx}>
                    <td className={c.name}>{item?.name}</td>
                    <td className={c.team}>{item?.departmentName}</td>
                    {item.days.map((day, index) => (
                      <td
                        key={index}
                        className={isWeekend(index + 1) ? c.weekend : ""}
                      >
                        {day.slice(0, 1)}
                      </td>
                    ))}
                    <td className={c.work}></td>
                    <td className={c.late}></td>
                    <td className={c.dayoff}></td>
                    <td className={c.absence}></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
