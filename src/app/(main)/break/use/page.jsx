"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import Table from "@/component/common/Table";
import {
  Calendar,
  Info,
  RotateCcw,
  Search,
  Table as TableIcon,
} from "lucide-react";
import StateCard from "@/component/common/StateCard";

export default function page() {
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
            location={["근태관리", "휴가관리", "휴가사용현황"]}
            title="휴가사용현황"
            subTitle="전체 직원의 연도별 휴가 사용 현황을 조회합니다."
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

          <div className={c.state}>
            <StateCard
              title="대상 인원"
              value="8명"
              bg="#1b3a6b"
              titleColor="#93c5fd"
              valueColor="white"
              borderColor="none"
            />
            <StateCard
              title="평균 부여일수"
              value="16.1일"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#374151"
              borderColor="#e5e7eb"
            />
            <StateCard
              title="평균 사용일수"
              value="10.4일"
              bg="#eff6ff"
              titleColor="#3b82f6"
              valueColor="#1e40af"
              borderColor="#bfdbfe"
            />
            <StateCard
              title="평균 잔여일수"
              value="5.6일"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
            />
            <StateCard
              title="잔여 3일 이하"
              value="3명"
              bg="#fff1f2"
              titleColor="#e11d48"
              valueColor="#be123c"
              borderColor="#fecaca"
            />
            <StateCard
              title="휴가 미사용"
              value="0명"
              bg="#fffbeb"
              titleColor="#d97706"
              valueColor="#92400e"
              borderColor="#fde68a"
            />
          </div>

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
                <span>기준연도</span>
                <div>
                  <button className={c.beforeBtn}>&lt;</button>
                  <div className={c.dateInput}>
                    <Calendar size={13} color="#1b3a6b" />
                    <input type="text" />
                  </div>
                  <button className={c.nextBtn}>&gt;</button>
                </div>
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
              <div className={c.teamBox}>
                <span>정렬</span>
                <select name="" id="">
                  <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                  <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                  <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                  <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                  <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                </select>
              </div>
              <div className={c.nameSearch}>
                <Search size={13} color="#9ca3af" />
                <input type="text" placeholder="사원명" />
              </div>
              <div className={c.searchBtnBox}>
                <button className={c.searchBtn}>
                  <Search size={13} color="#ffffff" />
                  조회
                </button>
                <button className={c.resetBtn}>
                  <RotateCcw size={13} color="#6b7280" />
                  초기화
                </button>
              </div>
              <div className={c.notice}>
                <Info size={13} color="#e11d48" />
                잔여 3일 이하 경고
              </div>
            </div>
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <TableIcon size={14} color="#1b3a6b" />
                2025년 7월 근태현황
              </div>
              <div className={c.total}>
                <div className={c.tableLenght}>총 {8}명</div>
                <div className={c.useDays}>
                  <span></span>사용일수
                </div>
                <span></span>
                <div className={c.remainDays}>
                  <span></span>잔여일수
                </div>
                <div className={c.low3days}>
                  <span></span>3일 이하 경고
                </div>
              </div>
            </div>

            <Table
              columns={[
                "사원번호",
                "성명",
                "부서",
                "직급",
                "입사일",
                "근속연수",
                "기본일수",
                "가산일수",
                "이월일수",
                "총 부여일수",
                "사용일수",
                "잔여일수",
                "상태",
              ]}
            />

            {/* <thead>
                            <tr>
                                <th>사원번호</th> <th>성명</th> <th>부서</th> <th>직급</th> 
                                <th>총 부여</th> <th>연차 <span>사용</span></th>
                                <th>반차 <span>사용</span></th> <th>병가 <span>사용</span></th> 
                                <th>특별휴가 <span>사용</span></th> <th>기타 <span>사용</span></th>
                                <th>총 사용</th> <th>잔여일수</th> <th>사용률</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody> */}
          </div>
        </div>
      </div>
    </div>
  );
}
