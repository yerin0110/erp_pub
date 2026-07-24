"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import StateCard from "@/component/common/StateCard";
import {
  Banknote,
  Calendar,
  CalendarCheck,
  Hash,
  Info,
  Mail,
  Printer,
  Quote,
  ReceiptText,
  RotateCcw,
  Search,
  ShieldCheck,
  Sigma,
  Table as TableIcon,
  TrendingDown,
  TrendingUp,
  UserPlus,
  X,
} from "lucide-react";
import Table from "@/component/common/Table";
import { useState } from "react";
import TableFooter from "@/component/common/TableFooter";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                onClick: () => setIsModalOpen(true),
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

            <table className={c.payTable}>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th className={c.num}>사원번호</th>
                  <th className={c.name}>성명</th>
                  <th className={c.team}>부서</th>
                  <th className={c.basic}>기본금</th>
                  <th className={c.meal}>식대</th>
                  <th className={c.fare}>교통비</th>
                  <th className={c.overTime}>야근수당</th>
                  <th className={c.pay}>지급소계</th>
                  <th className={c.pension}>국민연금</th>
                  <th className={c.health}>건강보험</th>
                  <th className={c.hire}>고용보험</th>
                  <th className={c.incomeTax}>소득세</th>
                  <th className={c.deducation}>공제소득</th>
                  <th className={c.takePay}>실지급액</th>
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
                  <td>4,200,000</td>
                  <td>200,000</td>
                  <td>150,000</td>
                  <td>250,000</td>
                  <td>4,800,000</td>
                  <td>189,000</td>
                  <td>167,400</td>
                  <td>43,200</td>
                  <td>132,000</td>
                  <td>531,600</td>
                  <td>4,268,400</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className={c.sum}>
                  <td colSpan={4} className={c.totalPerosn}>
                    <div className={c.totalPersonBox}>
                      <Sigma size={13} color="#1b3a6b" />
                      합계 (8명)
                    </div>
                  </td>
                  <td className={c.sumBasic}>25,760,000</td>
                  <td className={c.sumMeal}>1,600,000</td>
                  <td className={c.sumFare}>1,000,000</td>
                  <td className={c.sumOverTime}>1,280,000</td>
                  <td className={c.totalPay}>28,640,000</td>
                  <td className={c.sumPension}>1,152,000</td>
                  <td className={c.sumHealth}>1,018,800</td>
                  <td className={c.sumHire}>277,260</td>
                  <td className={c.sumIncomeTax}>720,000</td>
                  <td className={c.sumDeducation}>4,128,060</td>
                  <td className={c.sumTakePay}>24,511,940</td>
                </tr>
              </tfoot>
            </table>
            <TableFooter totalCount={length} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className={c.modalView}>
            <div className={c.modalTitle}>
              <div className={c.modalTitleBox}>
                <ReceiptText size={18} color="#60a5fa" />
                <div className={c.modalTitleContent}>
                  <p>급여명세서</p>
                  <span>Salary Statement</span>
                </div>
              </div>
              <div className={c.btnBox}>
                <div className={c.modalState}>2025년 7월분</div>
                <div className={c.closeBtn} onClick={closeModal}>
                  <X size={16} color="#ffffff" />
                </div>
              </div>
            </div>
            <div className={c.contentHeader}>
              <div className={c.headerBox}>
                <div className={c.hr}>HR</div>
                <div className={c.company}>
                  주식회사 HRSystem
                  <p>
                    사업자등록번호 123-45-67890 <span></span> 대표: 홍길동
                  </p>
                </div>
              </div>
              <div className={c.headerBox}>
                <div className={c.code}>
                  <Hash size={11} color="#9ca3af" />
                  PAY-2025-07-0008
                </div>
                <span></span>
                <div className={c.date}>
                  <Calendar size={11} color="#9ca3af" />
                  2025.08.01
                </div>
              </div>
            </div>

            <div className={c.modalContent}>
              <label htmlFor="">
                <span></span>수급자 정보
              </label>
              <div className={c.infoBox}>
                <div className={c.infoTitle}>성명</div>
                <div className={`${c.infoContent} ${c.infoName}`}>
                  <span>박</span>박민준
                </div>
                <div className={c.infoTitle}>사원번호</div>
                <div className={c.infoContent}>EMP-003</div>
                <div className={c.infoTitle}>부서</div>
                <div className={c.infoContent}>개발팀</div>
                <div className={c.infoTitle}>직급</div>
                <div className={c.infoContent}>대리</div>
                <div className={c.infoTitle}>지급연월</div>
                <div className={c.infoContent}>2025.07 (7.25 지급)</div>
                <div className={c.infoTitle}>근속연수</div>
                <div className={c.infoContent}>3년 11개월</div>
              </div>
            </div>

            <div className={c.entryBox}>
              <div className={c.entry}>
                <div className={c.entryPayTitle}>
                  <div className={c.title}>
                    <TrendingUp size={12} color="#1d4ed8" />
                    지급항목
                  </div>
                  <span>금액 (원)</span>
                </div>
                <div className={c.entryPayContent}>
                  <div className={c.entryPayContentTitle}>
                    <span></span>
                    기본급
                  </div>
                  3,500,000
                </div>
                <div className={c.entryPayContent}>
                  <div className={c.entryPayContentTitle}>
                    <span></span>
                    식대
                  </div>
                  200,000
                </div>
                <div className={c.entryPayContent}>
                  <div className={c.entryPayContentTitle}>
                    <span></span>
                    교통비
                  </div>
                  150,000
                </div>
                <div className={c.entryPayContent}>
                  <div className={c.entryPayContentTitle}>
                    <span></span>
                    야근수당
                  </div>
                  350,000
                </div>
                <div className={c.entryPayContent}>
                  <div className={c.entryPayContentTitle}>
                    <span></span>
                    직책수당
                  </div>
                  -
                </div>
                <div className={c.entryPaySum}>
                  <div className={c.entryPaySumTitle}>지급합계</div>
                  4,200,000
                </div>
              </div>
              <div className={c.entry}>
                <div className={c.entryDeducationTitle}>
                  <div className={c.title}>
                    <TrendingDown size={12} color="#dc2626" />
                    공제항목
                  </div>
                  <span>금액 (원)</span>
                </div>
                <div className={c.entryDeducationContent}>
                  <div className={c.entryDeducationContentTitle}>
                    <span></span>
                    국민연금 (4.5%)
                  </div>
                  157,500
                </div>
                <div className={c.entryDeducationContent}>
                  <div className={c.entryDeducationContentTitle}>
                    <span></span>
                    건강보험 (3.98%)
                  </div>
                  139,300
                </div>
                <div className={c.entryDeducationContent}>
                  <div className={c.entryDeducationContentTitle}>
                    <span></span>
                    고용보험 (0.9%)
                  </div>
                  37,800
                </div>
                <div className={c.entryDeducationContent}>
                  <div className={c.entryDeducationContentTitle}>
                    <span></span>
                    소득세
                  </div>
                  88,000
                </div>
                <div className={c.entryDeducationContent}>
                  <div className={c.entryDeducationContentTitle}>
                    <span></span>
                    지방소득세 (10%)
                  </div>
                  8,800
                </div>
                <div className={c.entryDeducationSum}>
                  <div className={c.entryDeducationSumTitle}>지급합계</div>
                  4,200,000
                </div>
              </div>
            </div>

            <div className={c.realPayBox}>
              <div>
                <div className={c.realPayTitle}>
                  <div className={c.realPayTitleBox}>
                    <div className={c.imgBox}>
                      <Banknote size={13} color="#60a5fa" />
                    </div>
                    실 지급액
                  </div>
                  3,768,600
                </div>
                <div className={c.realPayTitle}>
                  <span>4,200,000 - 431,400</span>
                  <span>원 (KRW)</span>
                </div>
              </div>
              <div className={c.realPayKorea}>
                <Quote size={11} color="#60a5fa" />
                삼백칠십육만팔천육백원정 (₩3,768,600)
              </div>
            </div>

            <div className={c.attendanceSummary}>
              <div className={c.attendanceSummaryTitle}>
                <CalendarCheck size={12} color="#2563eb" />
                7월 근태 요약
              </div>
              <div className={c.attendanceList}>
                <div className={c.list}>
                  <span className={c.checkIn}></span>
                  출근 20일
                </div>
                <span className={c.line}></span>
                <div className={c.list}>
                  <span className={c.break}></span>
                  연차 1일
                </div>
                <span className={c.line}></span>
                <div className={c.list}>
                  <span className={c.overtime}></span>
                  야근 7시간
                </div>
                <span className={c.line}></span>
                <div className={c.list}>
                  <span className={c.late}></span>
                  지각 0회
                </div>
              </div>
            </div>

            <div className={c.modalContent}>
              <label htmlFor="">
                <span></span>확인 및 직인
              </label>
              <div className={c.checkBox}>
                <div className={c.checkBoxText}>
                  <p>위 금액을 급여로 지급함을 확인합니다.</p>
                  <p>지급일: 2025년 7월 25일</p>
                  <p>주식회사 HRSystem 대표이사 홍 길 동 (인)</p>
                </div>
                <img src="/images/Seal Circle.png" alt="" />
              </div>
              <div className={c.checkBoxInfo}>
                <Info size={12} color="#d97706" />본 명세서는 전자문서로
                발행되었으며 위변조 시 법적 처벌을 받을 수 있습니다.
              </div>
            </div>

            <div className={c.modalFooter}>
              <div className={c.modalInfo}>
                <div className={c.certification}>
                  <ShieldCheck size={12} color="#2563eb" />
                  전자문서 인증완료
                </div>
                CERT-2025-0089
              </div>
              <div className={c.btnBox}>
                <button className={c.modalResetBtn}>
                  <Mail size={13} color="#6b7280" />
                  이메일 발송
                </button>
                <button className={c.saveBtn}>
                  <Printer size={13} color="#ffffff" />
                  인쇄
                </button>
                <button className={c.cancelBtn} onClick={closeModal}>
                  <X size={13} color="#6b7280" />
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
