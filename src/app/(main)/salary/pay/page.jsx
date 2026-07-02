"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import StateCard from "@/component/common/StateCard";
import { Calendar, RotateCcw, Search, Table as TableIcon } from "lucide-react";
import Table from "@/component/common/Table";

export default function page() {
  return (
    <div className={c.wrap}>
      <Nav />

      <div className={c.continer}>
        <Aside
          dummy={[
            {
              titleInfo: {
                iconPath: "/images/Banknote-3.png",
                titleName: "급여관리",
              },
              submenuList: [
                "급여기본정보관리",
                "급여지급",
                "기본수당외수당관리",
                "급여계산",
                "급여조회",
              ],
            },
            {
              titleInfo: {
                iconPath: "/images/Shield Check-blue.png",
                titleName: "4대보험관리",
              },
              submenuList: [
                "4대보험요율표설정",
                "국민연금관리",
                "건강보험관리",
                "고용보험관리",
                "4대보험취득/상실",
              ],
            },
          ]}
        />

        <div className={c.main}>
          <PageTitle
            location={["급여관리", "급여지급"]}
            title="급여지급"
            subTitle="월별 직원 급여 지급 내역을 관리하고 확정합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Edit.png",
                text: "급여명세서 출력",
                textColor: "#374151",
              },
              {
                img: "/images/Plus.png",
                text: "급여확정",
              },
            ]}
          />

          <div className={c.state}>
            <StateCard
              title="지급합계"
              value="28,640,000원"
              bg="linear-gradient(135deg, #2d5f9e 0%, #1b3a6b 100%)"
              titleColor="#93c5fd"
              valueColor="white"
              borderColor="none"
              subColor="#60a5fa"
              subcontent="전월 대비 +240,000원"
            />
            <StateCard
              title="공제합계"
              value="4,700,000원"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#374151"
              borderColor="#e5e7eb"
              subColor="#e11d48"
              subcontent="전월 대비 +34,000원"
            />
            <StateCard
              title="실지급합계"
              value="24,512,000원"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
              subColor="#16a34a"
              subcontent="대상인원 8명"
            />
            <StateCard
              title="지급상태"
              bg="#fffbeb"
              titleColor="#d97706"
              undecideColor="#fef9c3"
              undecideTextColor="#ca8a04"
              undecide="미확정 8건"
              decideColor="#dcfce7"
              decideTextColor="#16a34a"
              decide="확정 0건"
              borderColor="#fde68a"
              subColor="#9ca3af"
              subcontent="2025년 7월분"
            />
          </div>

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
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
            </div>
            <div className={c.notice}>
              <div className={c.basicPay}>
                <span></span>지급항목
              </div>
              <div className={c.payList}>
                <span></span>공제항목
              </div>
              <div className={c.account}>
                <span></span>실지급
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
                <div className={c.selectAll}>
                  <input type="checkbox" /> 전체선택
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
          </div>
        </div>
      </div>
    </div>
  );
}
