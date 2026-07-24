"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import StateCard from "@/component/common/StateCard";
import {
  Award,
  BadgeCheck,
  Bookmark,
  Calendar,
  Check,
  Clock,
  Eye,
  FileText,
  Info,
  Layers,
  Lock,
  MoonStar,
  Paperclip,
  Plus,
  ReceiptText,
  Save,
  Search,
  ShieldCheck,
  Sigma,
  Star,
  Trash2,
  TrendingUp,
  Upload,
  Users,
  UsersRound,
  X,
} from "lucide-react";
import PayCard from "@/component/common/PayCard";
import { useState } from "react";
import Table from "@/component/common/Table";

export default function Page({ isOn: externalIsOn, handleToggle }) {
  const [internalIsOn, setInternalIsOn] = useState(true);

  // 2. 근태 데이터 연동 스위치용 독자적인 내부 상태 (추가)
  const [linkIsOn, setLinkIsOn] = useState(true);

  // 야근 수당 스위치 상태 및 토글 함수
  const isChecked = externalIsOn !== undefined ? externalIsOn : internalIsOn;
  const onToggle = handleToggle || (() => setInternalIsOn(!internalIsOn));

  // 근태 데이터 연동 스위치 토글 함수 (추가)
  const onLinkToggle = () => setLinkIsOn(!linkIsOn);

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
            location={["급여관리", "기본수당외수당관리"]}
            title="기본수당외수당관리"
            subTitle="기본급 외 수당 종류를 정의하고 직원별 지급 내역을 관리합니다."
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Plus.png",
                text: "수당 추가",
              },
            ]}
          />

          <div className={c.state}>
            <StateCard
              title="등록 수당 종류"
              value="7종"
              bg="#1b3a6b"
              titleColor="#93c5fd"
              valueColor="white"
              borderColor="none"
              subColor="#60a5fa"
              subcontent="활성 6 · 비활성 1"
            />
            <StateCard
              title="과세 수당"
              value="4종"
              bg="white"
              titleColor="#9ca3af"
              valueColor="#374151"
              borderColor="#e5e7eb"
              subBoxColor="#fef9c3"
              user="소득세 적용"
              subBoxTextColor="#ca8a04"
            />
            <StateCard
              title="비과세 수당"
              value="3종"
              bg="#f0fdf4"
              titleColor="#16a34a"
              valueColor="#15803d"
              borderColor="#bbf7d0"
              subBoxColor="#dcfce7"
              user="소득세 면제"
              subBoxTextColor="#16a34a"
            />
            <StateCard
              title="이번달 수당 총액"
              value="3,340,000원"
              bg="#eff6ff"
              titleColor="#3b82f6"
              valueColor="#1e40af"
              borderColor="#bfdbfe"
              subColor="#3b82f6"
              subcontent="8명 대상"
            />
            <StateCard
              title="전월 대비"
              value="+120,000원"
              bg="#fffbeb"
              titleColor="#d97706"
              valueColor="#92400e"
              borderColor="#fde68a"
              subColor="#d97706"
              subcontent="야근수당 증가"
            />
          </div>

          <div className={c.setUP}>
            <div className={c.payList}>
              <div className={c.payListTitle}>
                <div className={c.titleBox}>
                  <Layers size={15} color="#1b3a6b" /> 수당 종류 목록
                </div>
                <div className={c.totalLenght}>7종</div>
              </div>
              <div className={c.listCard}>
                <PayCard
                  Icon={MoonStar}
                  iconColor="#2563eb"
                  title="야근수당"
                  activeType="활성"
                  imgbox="#dbeafe"
                  description="시간당 10,000원 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={Award}
                  title="직책수당"
                  activeType="활성"
                  description="직책별 고정 지급 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={BadgeCheck}
                  title="자격증수당"
                  activeType="활성"
                  description="자격증 보유 시 월 50,000원 · 비과세"
                  taxType="비과세"
                />
                <PayCard
                  Icon={Users}
                  title="가족수당"
                  activeType="활성"
                  description="부양가족 1인당 30,000원 · 비과세"
                  taxType="비과세"
                />
                <PayCard
                  Icon={TrendingUp}
                  title="장기근속수당"
                  activeType="활성"
                  description="5년 이상 월 100,000원 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={Star}
                  title="특별성과수당"
                  activeType="활성"
                  description="비정기 지급 · 과세"
                  taxType="과세"
                />
                <PayCard
                  Icon={Calendar}
                  title="휴일근무수당"
                  iconColor="#d1d5db"
                  activeType="비활성"
                  imgbox="#f1f5f9"
                  description="약 1.5배 지급 · 과세"
                  taxType="과세"
                />
              </div>
            </div>

            <div className={c.setting}>
              <div className={c.settingBox}>
                <div className={c.settingTitle}>
                  <div className={c.titleBox}>
                    <div className={c.imgBox}>
                      <MoonStar size={15} color="#2563eb" />
                    </div>
                    <div className={c.titleText}>
                      야근 수당 상세 설정
                      <span>Overtime Allowance</span>
                    </div>
                  </div>
                  <div className={c.active}>
                    <div className={c.activeText}>
                      <span></span>활성
                    </div>
                    <label className={c.switch}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onToggle}
                        className={c.checkbox}
                      />
                      <span className={c.slider}></span>
                    </label>
                  </div>
                </div>
                <div className={c.settingInput}>
                  <div className={c.settingInputBox}>
                    <div className={c.inputTitle}>
                      <span></span>
                      <p>기본 설정</p>
                    </div>
                    <div className={c.inputContent}>
                      <div className={c.inputBox}>
                        <label htmlFor="">수당명</label>
                        <input type="text" className={c.payName} />
                      </div>
                      <div className={c.inputBox}>
                        <label htmlFor="">수당 코드</label>
                        <div className={c.code}>OT001</div>
                      </div>
                    </div>
                    <div className={c.inputContent}>
                      <div className={c.inputBox}>
                        <label htmlFor="">
                          계산 방식<span className={c.necessary}>*</span>
                        </label>
                        <div className={c.calBtn}>
                          <button className={c.time}>
                            <Clock size={12} color="#ffffff" />
                            시간당
                          </button>
                          <button className={c.day}>
                            <Calendar size={12} color="#6b7280" />
                            일당
                          </button>
                          <button className={c.fixed}>
                            <Bookmark size={12} color="#6b7280" />
                            고정금액
                          </button>
                        </div>
                      </div>
                      <div className={c.inputBox}>
                        <label htmlFor="">
                          시간당 단가<span className={c.necessary}>*</span>
                        </label>
                        <div className={c.unitCost}>
                          <input type="text" />원 / 시간
                        </div>
                      </div>
                    </div>
                    <div className={c.inputContent}>
                      <div className={c.inputBox}>
                        <label htmlFor="">
                          과세 여부<span className={c.necessary}>*</span>
                        </label>
                        <div className={c.taxBtn}>
                          <button className={c.tax}>
                            <Clock size={12} color="#ffffff" />
                            과세
                          </button>
                          <button className={c.taxFree}>
                            <Calendar size={12} color="#6b7280" />
                            비과세
                          </button>
                        </div>
                      </div>
                      <div className={c.inputBox}>
                        <label htmlFor="">수당 코드</label>
                        <div className={c.autoReflect}>
                          근태 데이터 연동
                          <label className={c.switch}>
                            <input
                              type="checkbox"
                              checked={linkIsOn}
                              onChange={onLinkToggle}
                              className={c.checkbox}
                            />
                            <span className={c.slider}></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={c.line}></div>

                  <div className={c.settingInputBox}>
                    <div className={c.inputTitle}>
                      <span></span>
                      <p>적용 직급 범위</p>
                    </div>
                    <div className={c.applyRank}>
                      <button className={c.executive}>
                        <span></span>임원
                      </button>
                      <button className={c.rankType}>
                        <span></span>부장
                      </button>
                      <button className={c.rankType}>
                        <span></span>차장
                      </button>
                      <button className={c.rankType}>
                        <span></span>과장
                      </button>
                      <button className={c.rankType}>
                        <span></span>대리
                      </button>
                      <button className={c.rankType}>
                        <span></span>사원
                      </button>
                    </div>
                  </div>

                  <div className={c.line}></div>

                  <div className={c.settingInputBox}>
                    <div className={c.inputTitle}>
                      <span></span>
                      <p>한도 및 조건 설정</p>
                    </div>
                    <div className={c.limit}>
                      <div className={c.inputBox}>
                        <label htmlFor="">월 최대 시간</label>
                        <div className={c.unitCost}>
                          <input type="text" />
                          시간
                        </div>
                      </div>
                      <div className={c.inputBox}>
                        <label htmlFor="">최소 인정 시간</label>
                        <div className={c.unitCost}>
                          <input type="text" />
                          시간
                        </div>
                      </div>
                      <div className={c.inputBox}>
                        <label htmlFor="">계산 단위</label>
                        <div className={c.cal}>
                          <select name="" id="">
                            <option value="30분 단위">30분 단위</option>
                            <option value="30분 단위">30분 단위</option>
                            <option value="30분 단위">30분 단위</option>
                            <option value="30분 단위">30분 단위</option>
                            <option value="30분 단위">30분 단위</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className={c.infoBox}>
                      <Info size={12} color="#d97706" />월 최대 52시간 이상 입력
                      시 경고 알림이 발송됩니다.
                    </div>
                  </div>

                  <div className={c.line}></div>

                  <div className={c.btnBox}>
                    <button className={c.delBtn}>
                      <Trash2 size={13} color="#e11d48" />
                      삭제
                    </button>
                    <button className={c.cancelBtn}>
                      <X size={13} color="#6b7280" />
                      취소
                    </button>
                    <button className={c.saveBtn}>
                      <Save size={13} color="#ffffff" />
                      저장
                    </button>
                  </div>
                </div>
              </div>

              <div className={c.table}>
                <div className={c.tableTitleBox}>
                  <div className={c.tableTitle}>
                    <img src="/images/Clock.png" alt="" />
                    이번달 야근수당 지급 현황 (2025.07)
                  </div>
                  <div className={c.tableSearch}>
                    <select name="" id="">
                      <option value="전체">전체</option>
                      <option value="2025.07">2025.07</option>
                      <option value="2025.08">2025.08</option>
                      <option value="2025.09">2025.09</option>
                      <option value="2025.10">2025.10</option>
                    </select>
                    <div className={c.tableLenght}>{5}명 지급</div>
                    <button className={c.addBtn} onClick={setIsModalOpen}>
                      <Plus size={11} color="#ffffff" />
                      지급추가
                    </button>
                  </div>
                </div>

                <table className={c.overtimePayTable}>
                  <thead>
                    <tr>
                      <th className={c.name}>성명</th>
                      <th className={c.team}>부서</th>
                      <th className={c.rank}>직급</th>
                      <th className={c.overtime}>야근시간</th>
                      <th className={c.price}>단가 (원/h)</th>
                      <th className={c.pay}>지급액 (원)</th>
                      <th className={c.taxType}>과세구분</th>
                      <th className={c.status}>처리상태</th>
                      <th className={c.manage}>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>김철수</td>
                      <td>인사팀</td>
                      <td>팀장</td>
                      <td>25h</td>
                      <td>10,000</td>
                      <td>250,000</td>
                      <td>
                        <span className={c.taxBox}>과세</span>
                      </td>
                      <td>
                        <span className={c.decideBox}>확정</span>
                      </td>
                      <td>
                        <div className={c.tableBtnBox}>
                          <button className={c.tableEditBtn}>수정</button>
                          <button className={c.tableDelBtn}>삭제</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4} className={c.total}>
                        <div className={c.totalBox}>
                          <Sigma size={13} color="#1b3a6b" />
                          합계
                        </div>
                      </td>
                      <td className={c.sumTime}>1,170h</td>
                      <td className={c.sumPay}>1,170,000</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 z-50">
              <div className={c.modalView}>
                <div className={c.modalTitle}>
                  <div className={c.modalTitleBox}>
                    <div className={c.imgBox}>
                      <Star size={16} color="#fcd34d" />
                    </div>
                    <div className={c.modalTitleContent}>
                      <p>특별성과수당 지급등록</p>
                      <span>Special Performance Allowance</span>
                    </div>
                  </div>
                  <div className={c.btnBox}>
                    <div className={c.modalState}>2025년 7월분</div>
                    <div className={c.closeBtn} onClick={closeModal}>
                      <X size={16} color="#ffffff" />
                    </div>
                  </div>
                </div>

                <div className={c.stepBox}>
                  <div className={c.step}>
                    <div className={c.stepNum}>1</div>
                    지급 기본정보
                  </div>
                  <span className={c.completion}></span>
                  <div className={c.step}>
                    <div className={c.stepNum}>2</div>
                    지급 대상 선택
                  </div>
                  <span className={c.before}></span>
                  <div className={c.beforeStep}>
                    <div className={c.beforeStepNum}>6</div>
                    첨부파일
                  </div>
                </div>

                <div className={c.modalContent}>
                  <div className={c.content}>
                    <label htmlFor="">
                      <div></div>지급 기본정보
                    </label>
                    <div className={c.basicInfoBox}>
                      <div className={c.basicInfo}>
                        <label htmlFor="">
                          지급월<span className={c.necessary}>*</span>
                        </label>
                        <div className={c.modalInfoBox}>
                          2025년 7월
                          <Calendar size={13} color="#9ca3af" />
                        </div>
                      </div>
                      <div className={c.basicInfo}>
                        <label htmlFor="">수당 유형</label>
                        <div className={`${c.modalInfoBox} ${c.lockBox}`}>
                          특별성과수당
                          <Lock size={13} color="#9ca3af" />
                        </div>
                      </div>
                      <div className={c.basicInfo}>
                        <label htmlFor="">
                          지급 금액<span className={c.necessary}>*</span>
                        </label>
                        <div className={c.modalPayInfoBox}>
                          <div className={c.modalPrice}>500,000</div>
                          <div className={c.wonBox}>원</div>
                        </div>
                        <div className={c.modalPayInfoText}>
                          <Info size={11} color="#9ca3af" />
                          일괄 동일 금액 지급 · 개별 설정은 직원 목록에서 변경
                        </div>
                      </div>
                      <div className={c.basicInfo}>
                        <label htmlFor="">
                          과세 여부<span className={c.necessary}>*</span>
                        </label>
                        <div className={c.modalTaxBtnBox}>
                          <button className={c.modalTaxBtn}>
                            <ReceiptText size={13} color="#ffffff" />
                            과세
                          </button>
                          <button className={c.modalTaxFreeBtn}>
                            <ShieldCheck size={13} color="#6b7280" />
                            비과세
                          </button>
                        </div>
                        <div className={c.noticeBox}>
                          <span></span>과세 선택 시 소득세가 자동 공제됩니다
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={c.modalContent}>
                  <div className={c.modalTableBox}>
                    <div className={c.modalTableTitle}>
                      <label htmlFor="">
                        <div></div>지급 대상 직원 선택
                      </label>
                      <div className={c.choiceBox}>
                        <div className={c.choicePerson}>
                          <Users size={11} color="#ffffff" />
                          3명 선택됨
                        </div>
                        <div className={c.allChocie}>
                          <input type="checkbox" />
                          전체선택
                        </div>
                      </div>
                    </div>
                    <div className={c.modalTableSearch}>
                      <select name="" id="">
                        <option value="전체부서">전체 부서</option>
                        <option value="전체부서">전체 부서</option>
                        <option value="전체부서">전체 부서</option>
                        <option value="전체부서">전체 부서</option>
                        <option value="전체부서">전체 부서</option>
                      </select>
                      <div className={c.searhBox}>
                        <Search size={12} color="#9ca3af" />
                        <input type="text" placeholder="사원명 검색" />
                      </div>
                    </div>
                    <div className={c.modalTable}>
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" />
                            </th>
                            <th>성명</th>
                            <th>사원번호</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>개별 지급금액 (원)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={c.choice}>
                            <td>
                              <input type="checkbox" className={c.choiceBtn} />
                            </td>
                            <td className={c.modalTableName}>
                              <span>김</span>김철수
                            </td>
                            <td>EMP-001</td>
                            <td>인사팀</td>
                            <td>
                              <span className={c.modalRank}>팀장</span>
                            </td>
                            <td>
                              <div className={c.eachPay}>500,000</div>
                            </td>
                          </tr>
                          <tr className={c.notChoice}>
                            <td>
                              <input type="checkbox" className={c.choiceBtn} />
                            </td>
                            <td className={c.modalTableName}>
                              <span>박</span>박민준
                            </td>
                            <td>EMP-003</td>
                            <td>개발팀</td>
                            <td>
                              <span className={c.modalRank}>대리</span>
                            </td>
                            <td className={c.notChiceBox}>미선택</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className={c.tableTotal}>
                        <div className={c.tableTotalChoice}>
                          전체 5명 중 3명 선택
                        </div>
                        <div className={c.totalPayBox}>
                          총 지급예정액
                          <div className={c.totalPay}>1,700,000원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={c.modalContent}>
                  <div className={c.content}>
                    <div className={c.contentTitle}>
                      <label htmlFor="">
                        <div></div>지급 기본정보
                      </label>
                      선택사항
                    </div>
                    <div className={c.fileBox}>
                      <div className={c.fileTextBox}>
                        <Upload size={20} color="#9ca3af" />
                        <div className={c.fileText}>
                          결제문서 · 지급증빙 파일을 첨부하세요
                          <span>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</span>
                        </div>
                      </div>
                      <button className={c.fileBtn}>
                        <Paperclip size={12} color="#374151" />
                        파일 선택
                      </button>
                    </div>
                    <div className={c.attechFileBox}>
                      <div className={c.uploadBox}>
                        <div className={c.fileImg}>
                          <FileText size={14} color="#2563eb" />
                        </div>
                        <div className={c.attechFileTextBox}>
                          성과수당_결재문서_2025Q2.pdf
                          <div className={c.fileUpload}>
                            1.2MB <span></span>
                            <div className={c.uploadCheck}>
                              <Check size={10} color="#16a34a" />
                              업로드 완료
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className={c.uploadDelBtn}>
                        <X size={11} color="#ef4444" />
                        삭제
                      </button>
                    </div>
                  </div>
                </div>

                <div className={c.saveInfo}>
                  <Info size={14} color="#d97706" />
                  <div className={c.saveInfoText}>
                    저장 전 확인사항
                    <span>
                      저장 후 급여계산 시 해당 수다잉 자동 반영됩니다. 확정 전
                      급여담당자 검토를 권장합니다.
                    </span>
                  </div>
                </div>

                <div className={c.modalFooter}>
                  <div className={c.modalInfo}>
                    <div className={c.necessaryList}>
                      <span className={c.necessary}>*</span>
                      필수 입력 항목
                    </div>
                    <span></span>
                    <div className={c.summaryBox}>
                      <UsersRound size={12} color="#2563eb" />
                      3명 · 총 1,700,000원
                    </div>
                  </div>
                  <div className={c.btnBox}>
                    <button className={c.modalResetBtn}>
                      <Eye size={13} color="#374151" />
                      미리보기
                    </button>
                    <button className={c.cancelBtn} onClick={closeModal}>
                      <X size={13} color="#6b7280" />
                      취소
                    </button>
                    <button className={c.saveBtn}>
                      <Save size={13} color="#ffffff" />
                      저장하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
