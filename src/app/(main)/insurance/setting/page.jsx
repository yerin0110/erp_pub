"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import {
  Building2,
  ChevronLeft,
  Calendar,
  ChevronRight,
  Clock,
  Calculator,
  Plus,
  Sigma,
  Info,
} from "lucide-react";
import Table from "@/component/common/Table";
import InsuranceCard from "@/component/common/insuranceCard";

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
            location={["급여관리", "4대보험관리", "4대보험요율표설정"]}
            title="4대보험요율표설정"
            subTitle="연도별 4대보험 요율을 설정하고 직원별 예상 보험료를 시뮬레이션합니다."
            downloadBtnImg="/images/Download.png"
            downloadBtnText="PDF 다운로드"
            addBtnImg="/images/Save.png"
            addBtnText="요율 저장"
          />

          <div className={c.search}>
            <div className={c.searchBox}>
              <div className={c.dateBox}>
                <label>조회연도</label>
                <div>
                  <div className={c.beforeBtn}>
                    <ChevronLeft size={13} color="#374151" />
                  </div>
                  <div className={c.dateInput}>
                    <Calendar size={13} color="#1b3a6b" />
                    <input type="text" />
                  </div>
                  <button className={c.nextBtn}>
                    <ChevronRight size={13} color="#374151" />
                  </button>
                </div>
              </div>
              <div className={c.application}>
                <span></span>2025년 요율 적용중
              </div>
              <div className={c.editBox}>
                <Clock size={12} color="#9ca3af" />
                최종수정: 2025.01.01 · 홍길동
              </div>
            </div>

            <div className={c.yearBtnBox}>
              <button className={c.yearBtn}>2023</button>
              <button className={c.yearBtn}>2024</button>
              <button className={`${c.yearBtn} ${c.click}`}>2025</button>
            </div>
          </div>

          <div className={c.cardBox}>
            <InsuranceCard
              bg="linear-gradient(0deg, #2563eb 0%, #1b3a6b 100%)"
              title="국민연금"
              totalPercent="9.0%"
              tpColor="#1b3a6b"
              infoBg="#eff6ff"
              iconColor="#1d4ed8"
              infoTextColor="#1d4ed8"
              infoText="표준소득월액 기준 · 상한 590만원 / 하한 37만원"
              workerMark="#3b82f6"
              worker="근로자"
              b="#2563eb"
              symbolBg="#eff6ff"
              symbol="#1d4ed8"
              business="사업자"
              tbBg="#eff6ff"
              totalText="합산 부담률"
            />
            <InsuranceCard
              bg="linear-gradient(0deg, #14b8a6 0%, #0f766e 100%)"
              title="건강보험"
              totalPercent="7.09%"
              tpColor="#0f766e"
              infoBg="#f0fdfa"
              iconColor="#14b8a6"
              infoTextColor="#0f766e"
              infoText="보수월액 기준 · 상한 110,332,800원 / 하한 279,360원"
              workerMark="#14b8a6"
              worker="근로자"
              b="#14b8a6"
              symbolBg="#f0fdfa"
              symbol="#0f766e"
              business="사업자"
              tbBg="#f0fefa"
              totalText="합산 부담률 (장기요양 포함)"
            >
              <div className={c.longBox}>
                <div className={c.longBoxTitle}>
                  <span></span>
                  장기요양보험 (건강보험료의 %)
                  <div className={c.percentBox}>12.95%</div>
                </div>
                <div className={c.percentInput}>
                  <div className={c.inputBox}>
                    <input type="text" />
                    <div className={`${c.symbol} ${c.border}`}>%</div>
                  </div>
                  <div className={c.inputBox}>
                    <input type="text" />
                    <div className={c.symbol}>%</div>
                  </div>
                </div>
              </div>
            </InsuranceCard>
            <InsuranceCard
              bg="linear-gradient(0deg, #d97706 0%, #92400e 100%)"
              title="고용보험"
              totalPercent="2.05%"
              tpColor="#92400e"
              infoBg="#fffbeb"
              iconColor="#D97706"
              infoTextColor="#92400e"
              infoText="실업급여 기준 · 사업자는 규모별 추가부담"
              workerMark="#f59e0b"
              worker="근로자 (실업급여)"
              b="#fde68a"
              symbolBg="#fffbeb"
              symbol="#d97706"
              business="사업자 (실업+안정)"
              tbBg="#fffbeb"
              totalText="합산 부담률"
            />
            {/* <div className={c.card}>
              <div className={c.cardHeader}>
                <div className={c.cardTitle}>
                  <span></span>건강보홈
                </div>
                <div className={c.percentBox}>7.09%</div>
              </div>
              <div className={c.cardContent}>
                <div className={c.info}>
                  <Info size={11} color="#14b8a6" />
                  보수월액 기준 · 상한 110,332,800원 / 하한 279,360원
                </div>
                <div className={c.percentInput}>
                  <div className={c.worker}>
                    <span></span>근로자
                    <div className={c.inputBox}>
                      <input type="text" />
                      <div className={c.symbol}>%</div>
                    </div>
                    <div className={c.conversion}>예: 3,500,000원 기준</div>
                  </div>
                  <div className={c.business}>
                    <span></span>사업자
                    <div className={c.inputBox}>
                      <input type="text" />
                      <div className={c.symbol}>%</div>
                    </div>
                    <div className={c.conversion}>예: 3,500,000원 기준</div>
                  </div>
                </div>
                <div className={c.longBox}>장기요양보험 (건강보험료의 %)</div>
                <div className={c.totalBox}>
                  <div className={c.totalText}>
                    <Sigma size={11} color="#1d4ed8" />
                    합산 부담률
                  </div>
                  <div className={c.totalPercent}>9.0%</div>
                </div>
              </div>
            </div> */}
          </div>

          <div className={c.summaryBox}>
            <div className={c.summaryTitle}>
              <Calculator size={15} color="#60a5fa" />
              2025년 4대보험 합산 요율 요약
            </div>
            <div className={c.sumBox}>
              <div className={c.sum}>
                <div className={c.sumTitle}>
                  <span>근로자 합계</span>
                  <div className={c.percent1}>8.945%</div>
                </div>
                <p>
                  국민연금 4.5% · 건강+장기 3.545%+a <br /> 고용 0.9%
                </p>
              </div>
              <Plus size={20} color="#60a5fa" />
              <div className={c.sum}>
                <div className={c.sumTitle}>
                  <span>근로자 합계</span>
                  <div className={c.percent2}>10.635%</div>
                </div>
                <p>
                  국민연금 4.5% · 건강+장기 3.545%+a <br /> 고용 1.15% · 산재
                  1.43%
                </p>
              </div>
            </div>
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <Calculator size={14} color="#1b3a6b" />
                직원별 예상 보험료 시뮬레이션 (2025년 기준)
              </div>
              <div className={c.total}>
                <div className={c.tableLenght}>총 {8}명</div>
                <div className={c.basicPay}>
                  <span></span>지급
                </div>
                <div className={c.payList}>
                  <span></span>공제
                </div>
                <div className={c.account}>
                  <span></span>실지급
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
