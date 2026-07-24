"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import {
  Calculator,
  ChevronRight,
  CircleCheck,
  Clock,
  Equal,
  Info,
  Minus,
  Pencil,
  RotateCcw,
  Search,
  Sigma,
  Table as TableIcon,
  UserPlus,
  Users,
  X,
  Zap,
} from "lucide-react";
import StateCard from "@/component/common/StateCard";
import Table from "@/component/common/Table";
import TableFooter from "@/component/common/TableFooter";
import { useState } from "react";

export default function Page() {
  const [isSalaryModalOpen, setIsSalaryModalOpen] = useState(false);
  const salaryModalClose = () => {
    setIsSalaryModalOpen(false);
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
            location={["급여관리", "급여기본정보관리"]}
            title="급여기본정보관리"
            subTitle="직원별 기본급여 및 수당 기준 정보를 등록하고 관리합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Edit.png",
                text: "일괄수정",
                textColor: "#374151",
              },
              {
                img: "/images/Plus.png",
                text: "급여정보등록",
                onClick: () => setIsSalaryModalOpen(true),
              },
            ]}
          />

          <div className={c.state}>
            <StateCard
              title="평균 기본급"
              value="3,662,500원"
              bg="#1b3a6b"
              titleColor="#93c5fd"
              valueColor="white"
              borderColor="none"
              subColor="#60a5fa"
              subcontent="전월 대비 +50,000원"
            />
            <StateCard
              title="최고 기본급"
              value="4,700,000원"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#374151"
              borderColor="#e5e7eb"
              subBoxColor="#ede9fe"
              user="이영희"
              subBoxTextColor="#7c3aed"
              rank="· 차장"
            />
            <StateCard
              title="월 총 인건비"
              value="29,300,000원"
              bg="#eff6ff"
              titleColor="#3b82f6"
              valueColor="#1e40af"
              borderColor="#bfdbfe"
              subColor="#3b82f6"
              subcontent="기본급 합계 기준"
            />
            <StateCard
              title="월 총 수당"
              value="3,340,000원"
              bg="#fffbeb"
              titleColor="#d97706"
              valueColor="#92400e"
              borderColor="#fde68a"
              subColor="#d97706"
              subcontent="수당 합계 기준"
            />
            <StateCard
              title="등록 인원"
              value="8명"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
              subColor="#16a34a"
              subcontent="미등록 0명"
            />
          </div>

          <div className={c.search}>
            <div className={c.searchBox}>
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
                <span>직급</span>
                <select name="" id="">
                  <option value="전체직급">전체직급</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원팀">경영지원팀</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
              </div>
              <div className={c.dateBox}>
                <span>적용기준일</span>
                <input type="date" />
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
            <button className={c.tableBtn}>
              <TableIcon size={13} color="#ffffff" />
              테이블
            </button>
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <TableIcon size={14} color="#1b3a6b" />
                직원별 급여 기본정보
              </div>
              <div className={c.total}>
                <div className={c.tableLenght}>총 {8}명</div>
                <div className={c.basicPay}>
                  <span></span>기본급
                </div>
                <div className={c.payList}>
                  <span></span>수당항목
                </div>
                <div className={c.account}>
                  <span></span>계좌정보
                </div>
              </div>
            </div>

            <div className={c.basicTable}>
              <table>
                <thead>
                  <tr>
                    <th className={c.checkbox}>
                      <input type="checkbox" />
                    </th>
                    <th className={c.num}>사원번호</th>
                    <th className={c.name}>성명</th>
                    <th className={c.team}>부서</th>
                    <th className={c.rank}>직급</th>
                    <th className={c.basic}>기본급</th>
                    <th className={c.meal}>식대</th>
                    <th className={c.fare}>교통비</th>
                    <th className={c.rankPay}>직책수당</th>
                    <th className={c.totalPay}>수당합계</th>
                    <th className={c.bank}>은행</th>
                    <th className={c.accountNum}>계좌번호</th>
                    <th className={c.applyDate}>적용시작일</th>
                    <th className={c.manager}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>EMP-001</td>
                    <td className={c.name}>김철수</td>
                    <td>인사팀</td>
                    <td className={c.rank}>팀장</td>
                    <td className={c.basic}>4,200,00</td>
                    <td>200,00</td>
                    <td>150,000</td>
                    <td>200,000</td>
                    <td className={c.totalPay}>550,000</td>
                    <td>국민은행</td>
                    <td>12****-34****</td>
                    <td>2024.01.01</td>
                    <td>
                      <div className={c.btnBox}>
                        <button className={c.editBtn}>
                          <Pencil size={10} color="#2563eb" />
                          수정
                        </button>
                        <button className={c.historyBtn}>
                          <Clock size={10} color="#6b7280" />
                          이력
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className={c.sum}>
                    <td colSpan={5} className={c.totalPerson}>
                      <div className={c.totalPersonBox}>
                        <Sigma size={13} color="#1b3a6b" />
                        합계 (8명)
                      </div>
                    </td>
                    <td className={c.sumBasic}>29,300,000</td>
                    <td className={c.meal}>1,600,000</td>
                    <td className={c.fare}>1,000,000</td>
                    <td className={c.rankPay}>740,000</td>
                    <td className={c.totalPay}>3,340,000</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tfoot>
              </table>
              <TableFooter totalCount={length} />
            </div>
          </div>
        </div>
      </div>

      {isSalaryModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className={c.modalView}>
            <div className={c.titleBox}>
              <div className={c.modalTitle}>
                <UserPlus size={18} color="#ffffff" />
                <div>
                  <p>급여정보 등록</p>
                  <span>신규입사자의 급여 정보를 입력하세요</span>
                </div>
              </div>
              <div className={c.btnBox}>
                <div className={c.stateBox}>
                  <div className={c.state1}>
                    <span>1</span>사원선택
                  </div>
                  <ChevronRight size={12} color="rgba(255, 255, 255, 0.25)" />
                  <div className={c.state2}>
                    <span>2</span>급여입력
                  </div>
                </div>
                <div className={c.closeBtn} onClick={salaryModalClose}>
                  <X size={16} color="#ffffff" />
                </div>
              </div>
            </div>

            <div className={c.modalContent}>
              <div className={c.newSearch}>
                <div className={c.newSearchTitle}>
                  <label htmlFor="">
                    <span></span>신규입사자 검색
                  </label>
                  <div className={c.searchResult}>
                    <Users size={12} color="#2563eb" />
                    검색결과 3명
                  </div>
                </div>
                <div className={c.modalSearchBox}>
                  <select name="" id="">
                    <option value="전체부서">전체부서</option>
                    <option value="인사팀">인사팀</option>
                    <option value="경영지원팀">경영지원팀</option>
                    <option value="개발팀">개발팀</option>
                    <option value="영업팀">영업팀</option>
                  </select>
                  <div className={c.modalSearch}>
                    <Search size={15} color="#2563eb" />
                    <input type="text" placeholder="사원명 또는 사번 검색" />
                  </div>
                  <button className={c.modalSearchBtn}>
                    <Search size={13} color="#ffffff" />
                    검색
                  </button>
                </div>
                <div className={c.tableBox}>
                  <table className={c.modalTable}>
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" />
                        </th>
                        <th>사번</th>
                        <th>사원명 · 부서</th>
                        <th>직급</th>
                        <th>입사일</th>
                        <th>등록 여부</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className={c.modalNum}>EMP-2025-041</td>
                        <td className={c.modalname}>
                          <span>이</span>
                          <div className={c.nameBox}>
                            이수연<p>인사팀</p>
                          </div>
                        </td>
                        <td>사원</td>
                        <td>2025.07.01</td>
                        <td>
                          <div className={c.resgisterState1}>미등록</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className={c.modalNum}>EMP-2025-042</td>
                        <td className={c.modalname}>
                          <span>김</span>
                          <div className={c.nameBox}>
                            김태호<p>개발팀</p>
                          </div>
                        </td>
                        <td>사원</td>
                        <td>2025.07.01</td>
                        <td>
                          <div className={c.resgisterState1}>미등록</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className={c.modalNum}>EMP-2025-043</td>
                        <td className={c.modalname}>
                          <span>박</span>
                          <div className={c.nameBox}>
                            박지훈<p>영업팀</p>
                          </div>
                        </td>
                        <td>사원</td>
                        <td>2025.07.01</td>
                        <td>
                          <div className={c.resgisterState2}>등록완료</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={c.line}></div>

              <div className={c.payInfo}>
                <div className={c.newSearchTitle}>
                  <label htmlFor="">
                    <span></span>급여 정보 입력
                  </label>
                  <div className={c.userinfo}>
                    <div className={c.firstName}>이</div>
                    이수연 · 인사팀 · 사원
                    <CircleCheck size={16} color="#2563eb" />
                  </div>
                </div>
              </div>
              <div className={c.payInput}>
                <div className={c.inputBox}>
                  <label htmlFor="">
                    기본급<span className={c.necessary}>*</span>
                  </label>
                  <div className={`${c.payInputBox} ${c.basicPayInput}`}>
                    <input type="text" />원
                  </div>
                </div>
                <div className={c.inputBox}>
                  <label htmlFor="">
                    직급수당<span className={c.necessary}>*</span>
                  </label>
                  <div className={c.payInputBox}>
                    <input type="text" />원
                  </div>
                </div>
                <div className={c.inputBox}>
                  <label htmlFor="">식대</label>
                  <div className={c.payInputBox}>
                    <input type="text" />원
                  </div>
                </div>
                <div className={c.inputBox}>
                  <label htmlFor="">교통비</label>
                  <div className={c.payInputBox}>
                    <input type="text" />원
                  </div>
                </div>
                <div className={c.inputBox}>
                  <label htmlFor="">
                    지급방식<span className={c.necessary}>*</span>
                  </label>
                  <select name="" id="">
                    <option value="계좌이체">계좌이체</option>
                    <option value="계좌이체">계좌이체</option>
                    <option value="계좌이체">계좌이체</option>
                    <option value="계좌이체">계좌이체</option>
                  </select>
                </div>
                <div className={c.inputBox}>
                  <label htmlFor="">
                    급여 지급일<span className={c.necessary}>*</span>
                  </label>
                  <select name="" id="">
                    <option value="매월 25일">매월 25일</option>
                    <option value="매월 25일">매월 25일</option>
                    <option value="매월 25일">매월 25일</option>
                    <option value="매월 25일">매월 25일</option>
                  </select>
                </div>
              </div>
              <div className={c.deducaiotn}>
                <div className={c.deducaiotnTitle}>
                  <div className={c.deducaiotnTitleBox}>
                    <Calculator size={13} color="#6b7280" />
                    공제 항목 (자동 계산)
                  </div>
                  <div className={c.autoCaculate}>
                    <Zap size={11} color="#4f46e5" />
                    급여 기준 자동 산정
                  </div>
                </div>
                <div className={c.calculator}>
                  <div className={c.calculatorBox}>
                    <label htmlFor="">국민연금 (4.5%)</label>
                    <div className={c.autoCalculatorBox}>
                      126,000<span>자동</span>
                    </div>
                  </div>
                  <div className={c.calculatorBox}>
                    <label htmlFor="">건강보험 (3.545%)</label>
                    <div className={c.autoCalculatorBox}>
                      99,260<span>자동</span>
                    </div>
                  </div>
                  <div className={c.calculatorBox}>
                    <label htmlFor="">고용보험 (0.9%)</label>
                    <div className={c.autoCalculatorBox}>
                      25,200<span>자동</span>
                    </div>
                  </div>
                  <div className={c.calculatorBox}>
                    <label htmlFor="">소득세 (간이세액)</label>
                    <div className={c.autoCalculatorBox}>
                      52,300<span>자동</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={c.calculatorPay}>
                <div className={c.calculatorPayBox}>
                  <div className={c.beforeCalculatorPay}>
                    <label htmlFor="">총 지급액</label>
                    3,200,000원
                  </div>
                  <Minus size={16} color="#bfdbfe" />
                  <div className={c.deducaiotnPay}>
                    <label htmlFor="">총 공제액</label>
                    302,760원
                  </div>
                  <Equal size={16} color="#bfdbfe" />
                  <div className={c.afterCalculatorPay}>
                    <label htmlFor="">실 수령액</label>
                    2,897,240원
                  </div>
                </div>
                <div className={c.calculatorInfo}>
                  <Info size={12} color="#93c5fd" />
                  공재액은 자동 계산됩니다
                </div>
              </div>
            </div>
            <div className={c.modalFooter}>
              <div className={c.modalInfo}>
                <Info size={14} color="#9ca3af" />
                등록 완료 후 급여 대장에 자동 반영됩니다
              </div>
              <div className={c.btnBox}>
                <button className={c.cancelBtn} onClick={salaryModalClose}>
                  <X size={13} color="#6b7280" />
                  취소
                </button>
                <button className={c.modalResetBtn}>
                  <RotateCcw size={13} color="#6b7280" />
                  초기화
                </button>
                <button className={c.saveBtn}>
                  <UserPlus size={14} color="#ffffff" />
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
