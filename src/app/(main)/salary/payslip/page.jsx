"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import {
  Building2,
  Calendar,
  ChartBar,
  ChevronLeft,
  ChevronRight,
  Info,
  Lock,
  RefreshCw,
  RotateCcw,
  Search,
  TableIcon,
} from "lucide-react";
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
            location={["급여관리", "급여조회"]}
            title="급여조회"
            subTitle="연도별 급여 수령 내역 및 월별 명세서를 조회합니다."
            downloadBtnImg="/images/Download.png"
            downloadBtnText="PDF 다운로드"
            addBtnImg="/images/Printer.png"
            addBtnText="전체 명세서 출력"
          />

          <div className={c.graph}>
            <div className={c.graphTitleBox}>
              <div className={c.progress}>
                <div className={c.graphTitle}>
                  <ChartBar size={15} color="#1b3a6b" />
                  2025년 월별 실지급액 추이
                </div>
                <div className={c.graphLenght}>2025년</div>
              </div>
              <div className={c.type}>
                <div className={c.pay}>
                  <span></span>실지급액
                </div>
                <div className={c.monthPay}>
                  <span></span>이번달 (7월)
                </div>
                <div className={c.ap}>
                  <span></span>미지급
                </div>
              </div>
            </div>
            <div className={c.graphBox}>
              <div className={c.grap}></div>
            </div>
          </div>

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
              <div className={c.targetBox}>
                <label>조회대상</label>
                <div className={c.targetName}>
                  <div className={c.nameBox}>
                    <span>박</span>박민준 (본인)
                  </div>
                  <div className={c.lock}>
                    <Lock size={12} color="#9ca3af" />
                  </div>
                </div>
              </div>
              <div className={c.teamBox}>
                <Building2 size={12} color="#2563eb" />
                개발팀 · 대리
              </div>
            </div>

            <div className={c.yearBtnBox}>
              <button className={c.yearBtn}>2023</button>
              <button className={c.yearBtn}>2024</button>
              <button className={`${c.yearBtn} ${c.click}`}>2025</button>
            </div>
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <TableIcon size={14} color="#1b3a6b" />
                2025년 월별 급여 수령 이력
              </div>
              <div className={c.total}>
                <div className={c.tableLenght}>{7}개월 조회</div>
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
