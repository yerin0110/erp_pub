"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import StateCard from "@/component/common/StateCard";
import { Printer, RotateCcw, Search, TableIcon } from "lucide-react";
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
            location={["급여관리", "4대보험관리", "4대보험취득/상실"]}
            title="4대보험 취득/상실"
            subTitle="입사·퇴사에 따른 4대보험 취득·상시 내역을 조회하고 신고서를 제출합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Edit.png",
                text: "신고서 일괄출력",
                textColor: "#374151",
              },
              {
                img: "/images/Plus.png",
                text: "취득/상실 등록",
              },
            ]}
            // downloadBtnImg="/images/Download.png"
            // downloadBtnText="PDF 다운로드"
            // addBtnImg="/images/Plus.png"
            // addBtnText="취득/상실 등록"
          />

          <div className={c.card}>
            <StateCard
              title="이달 취득"
              value="3명"
              bg="linear-gradient(135deg, #2563eb 0%, #1b3a6b 100%);"
              titleColor="#93c5fd"
              valueColor="white"
              subBoxColor="#dbeafe"
              user="신고완료 2 · 미신고 1"
              subBoxTextColor="#1e40af"
            />
            <StateCard
              title="이달 상실"
              value="1명"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#111827"
              borderColor="#e5e7eb"
              subBoxColor="#fee2e2"
              user="신고완료 1 · 미신고 0"
              subBoxTextColor="#dc2626"
            />
            <StateCard
              title="미신고 건수"
              value="1건"
              bg="#fff5f5"
              titleColor="#e11d48"
              valueColor="#be123c"
              borderColor="#fecaca"
              subBoxColor="#fff1f2"
              user="신고기한 임박 확인"
              subBoxTextColor="#dc2626"
              subBoxTextBorder="#fecaca"
            />
            <StateCard
              title="신고기한"
              value="D-5"
              bg="#fffbeb"
              titleColor="#d97706"
              valueColor="#92400e"
              borderColor="#fde68a"
              subBoxColor="#fef9c3"
              user="2025.07.14 마감"
              subBoxTextColor="#ca8a04"
            />
            <StateCard
              title="연간 누적 취득"
              value="12명"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
              subBoxColor="#dcfce7"
              user="2025년 1~7월 기준"
              subBoxTextColor="#16a34a"
            />
            <StateCard
              title="연간 누적 상실"
              value="4명"
              bg="#f5f3ff"
              titleColor="#7c3aed"
              valueColor="#6d28d9"
              borderColor="#ddd6fe"
              subBoxColor="#ede9fe"
              user="신고완료 1 · 미신고 0"
              subBoxTextColor="#7c3aed"
            />
          </div>

          <div className={c.search}>
            <div className={c.dateInput}>
              <div className={c.dateBox}>
                <label>기간</label>
                <input type="date" />
              </div>
              ~
              <div className={c.dateBox}>
                <input type="date" />
              </div>
            </div>
            <div className={c.monthBtnBox}>
              <button className={c.monthBtn}>1개월</button>
              <button className={c.monthBtn}>3개월</button>
              <button className={`${c.monthBtn} ${c.click}`}>올해</button>
            </div>
            <div className={c.typeBox}>
              <label>유형</label>
              <div className={c.typeBtnBox}>
                <button className={`${c.typeBtn} ${c.click}`}>전체</button>
                <button className={c.typeBtn}>
                  <span className={c.dotGreen}></span>취득
                </button>
                <button className={c.typeBtn}>
                  <span className={c.dotRed}></span>상실
                </button>
              </div>
            </div>
            <div className={c.reportBox}>
              <label htmlFor="">신고여부</label>
              <select name="" id="">
                <option value="전체">전체</option>
                <option value="신고완료">신고완료</option>
                <option value="미신고">미신고</option>
              </select>
            </div>
            <div className={c.nameInputBox}>
              <Search size={13} color="#9ca3af" />
              <input type="text" placeholder="사원명 검색" />
            </div>
            <div className={c.btnBox}>
              <div className={c.searchBtn}>
                <Search size={13} color="#ffffff" />
                조회
              </div>
              <div className={c.resetBtn}>
                <RotateCcw size={13} color="#6b7280" />
                초기화
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
                <div className={c.tableLenght}>총 {16}건</div>
                <div className={c.selectAll}>
                  <input type="checkbox" /> 전체선택
                </div>
                <div className={c.printBtn}>
                  <Printer size={11} color="#2563eb" />
                  선택 신고서출력
                </div>
              </div>
            </div>

            {/* <Table
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
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
