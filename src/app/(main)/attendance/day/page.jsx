"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import {
  AlarmClock,
  BookOpen,
  Calendar,
  CalendarCheck,
  CheckCheck,
  FilePen,
  ListChecks,
  LogOut,
  Plane,
  RotateCcw,
  Save,
  Search,
  ShieldCheck,
  SquareCheck,
  UsersRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";

export default function Page() {
  const [isOn, setIsOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  const getAttendanceDaily = async () => {
    try {
      setIsLoading(true);

      // 1. 근태리스트를 조회합니다.
      const token = localStorage.getItem("accessToken");
      const res = await baseApi.get("/api/v1/attendances/daily", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 2. 근태리스트를 세팅합니다.
      setAttendanceList(res?.data?.data);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAttendanceDaily();
  }, []);

  const 출근처리하기 = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("accessToken");

    const res = await baseApi.post(
      "/api/v1/attendances/checkin",
      {
        workDate: "2026-06-25",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // 출근처리 후 재조회하기
    getAttendanceDaily();
    setIsLoading(false);
  };

  const 퇴근처리하기 = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("accessToken");

    const res = await baseApi.post(
      "/api/v1/attendances/checkout",
      {
        workDate: "2026-06-25",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // 퇴근처리 후 재조회하기
    getAttendanceDaily();

    setIsLoading(false);
  };

  const [selectedTab, setSelectedTab] = useState("출근");

  const saveAttendance = () => {
    if (selectedTab === "퇴근") {
      퇴근처리하기();
    } else if (selectedTab === "출근") {
      console.log(">>>");
      출근처리하기();
    }
  };

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
            location={["근태관리", "근태관리", "일일근태등록"]}
            title="일일근태등록"
            subTitle="날짜별 직원 근태 현황을 등록하고 수정합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Plus.png",
                text: "일괄저장",
              },
            ]}
          />

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
                <button className={c.beforeBtn}>&lt;</button>
                <div className={c.dateInput}>
                  <Calendar size={13} color="#1b3a6b" />
                  <input type="text" />
                </div>
                <button className={c.nextBtn}>&gt;</button>
              </div>
              <div className={c.today}>
                <CalendarCheck size={13} color="#2563eb" />
                오늘
              </div>
              <div className={c.teamBox}>
                <span>부서</span>
                <select name="" id="">
                  <option value="전체부서">전체부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원팀">경영지원팀</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
              </div>
              <div className={c.nameBox}>
                <Search size={13} color="#9ca3af" />
                <input type="text" placeholder="사원명 검색" />
              </div>
            </div>

            <div className={c.searhResult}>
              <div className={c.total}>
                <span></span>
                전체 23명
              </div>
              <div className={c.work}>
                <span></span>
                출근 18
              </div>
              <div className={c.late}>
                <span></span>
                지각 2
              </div>
              <div className={c.absence}>
                <span></span>
                결근 1
              </div>
              <div className={c.dayoff}>
                <span></span>
                연차 2
              </div>
            </div>
          </div>

          <div className={c.attendanceBox}>
            <div className={c.register}>
              <div className={c.registerTitle}>
                <div className={c.titleBox}>
                  <FilePen size={16} color="#1b3a6b" />
                  근태등록
                </div>
                <span>7월 1일</span>
              </div>
              <div className={c.registerBox}>
                <div className={c.memberBox}>
                  <label>
                    사원선택<span className={c.necessary}>*</span>
                  </label>
                  <div className={c.member}>
                    <span>사</span>
                    사원명 · 부서
                  </div>
                </div>
                <div className={c.type}>
                  <label>
                    근태 유형<span className={c.necessary}>*</span>
                  </label>
                  <div className={c.typeBox}>
                    <button
                      className={c.type1}
                      onClick={() => setSelectedTab("출근")}
                    >
                      <CheckCheck size={12} color="#ffffff" />
                      출근
                    </button>
                    <button
                      className={c.type2}
                      onClick={() => setSelectedTab("지각")}
                    >
                      <AlarmClock size={12} color="#ea580c" />
                      지각
                    </button>
                    <button
                      className={c.type3}
                      onClick={() => setSelectedTab("조퇴")}
                    >
                      <LogOut size={12} color="#6b7280" />
                      조퇴
                    </button>
                    <button
                      className={c.type4}
                      onClick={() => setSelectedTab("결근")}
                    >
                      <X size={12} color="#e11d48" />
                      결근
                    </button>
                    <button
                      className={c.type5}
                      onClick={() => setSelectedTab("연차")}
                    >
                      <CalendarCheck size={12} color="#16a34a" />
                      연차
                    </button>
                    <button
                      className={c.type6}
                      onClick={() => setSelectedTab("반차")}
                    >
                      <Calendar size={12} color="#0284c7" />
                      반차
                    </button>
                    <button
                      className={c.type7}
                      onClick={() => setSelectedTab("퇴근")}
                    >
                      <Plane size={12} color="#7c3aed" />
                      {/* 출장 */}퇴근
                    </button>
                    <button
                      className={c.type8}
                      onClick={() => setSelectedTab("교육")}
                    >
                      <BookOpen size={12} color="#6b7280" />
                      교육
                    </button>
                    <button
                      className={c.type9}
                      onClick={() => setSelectedTab("공가")}
                    >
                      <ShieldCheck size={12} color="#6b7280" />
                      공가
                    </button>
                  </div>
                </div>
                <div className={c.time}>
                  <div className={c.timeBox}>
                    <label>출근 시간</label>
                    <input type="time" />
                  </div>
                  <div className={c.timeBox}>
                    <label>퇴근 시간</label>
                    <input type="time" />
                  </div>
                </div>
                <div className={c.over}>
                  <div className={c.overTitle}>
                    <label>초과근무&#40;OT&#41;</label>
                    <div className={c.switchContainer}>
                      <button
                        type="button"
                        className={`${c.switchBody} ${isOn ? c.switchOn : ""}`}
                        onClick={toggleHandler}
                      >
                        <div
                          className={`${c.switchBall} ${isOn ? c.ballOn : ""}`}
                        />
                      </button>
                      <span className={c.switchLabel}>적용</span>
                    </div>
                  </div>
                  <div className={c.overBox}>
                    <input type="time" />~<input type="time" />
                    <div className={c.hour}>2.5h</div>
                  </div>
                </div>
                <div className={c.note}>
                  <label>비고</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="특이사항을 입력하세요"
                  ></textarea>
                </div>
                <div className={c.btnBox}>
                  <button className={c.resetBtn}>
                    <RotateCcw size={12} color="#6b7280" />
                    취소
                  </button>
                  <button
                    className={c.saveBtn}
                    onClick={() => saveAttendance()}
                  >
                    <Save size={12} color="#ffffff" />
                    저장
                  </button>
                </div>
              </div>
            </div>

            <div className={c.listBox}>
              <div className={c.table}>
                <div className={c.tableTitleBox}>
                  <div className={c.tableTitle}>
                    <ListChecks size={15} color="#1b3a6b" />
                    2025.07.01 근태 목록
                  </div>
                  <div className={c.tableSearch}>
                    <div className={c.tableLenght}>총 {10}명</div>
                    <div className={c.totalRegister}>
                      <UsersRound size={12} color="#16a34a" />
                      일괄등록
                    </div>
                  </div>
                </div>

                <table className={c.workTable}>
                  <thead>
                    <tr>
                      <th>
                        <SquareCheck size={16} color="#1b3a6b" />
                      </th>
                      <th>사원번호</th>
                      <th>성명</th>
                      <th>부서</th>
                      <th>직급</th>
                      <th>근태유형</th>
                      <th>출근시간</th>
                      <th>퇴근시간</th>
                      <th>OT</th>
                      <th>비고</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>EMP-001</td>
                      <td>김철수</td>
                      <td>인사팀</td>
                      <td>팀장</td>
                      <td>
                        <div>
                          <span></span>출근
                        </div>
                      </td>
                      <td>09:02</td>
                      <td>18:05</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <button className={c.editBtn}>수정</button>
                        <button className={c.delBtn}>삭제</button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr></tr>
                    <tr></tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
