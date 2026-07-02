"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";

export default function page() {
  return (
    <div className={c.wrap}>
      <Nav />

      <div className={c.continer}>
        <Aside
          dummy={[
            {
              titleInfo: {
                iconPath: "/images/User.png",
                titleName: "인사정보",
              },
              submenuList: [
                "인사정보등록",
                "사원명수/인사기록카드",
                "인사발령등록",
              ],
            },
            {
              titleInfo: {
                iconPath: "/images/Heart Handshake.png",
                titleName: "경조비관리",
              },
              submenuList: ["경조비신청", "경조비신청현황"],
            },
            {
              titleInfo: {
                iconPath: "/images/File Text.png",
                titleName: "증명서관리",
              },
              submenuList: ["증명서발급"],
            },
          ]}
        />

        <div className={c.main}>
          <PageTitle
            location={["인사관리", "증명서관리", "증명서발급"]}
            title="증명서발급"
            subTitle="필요한 증명서를 선택하고 발급 정보를 입력하여 출력하세요"
            buttons={[
              {
                img: "/images/Clock.png",
                text: "발급이력",
              },
              {
                img: "/images/Printer.png",
                text: "출력하기",
              },
            ]}
          />

          <div className={c.applyBox}>
            <div className={c.applyTitle}>
              <div className={c.title}>
                <img src="/images/File Check.png" alt="" />
                증명서 종류 선택
              </div>
              <div className={c.necessaryInput}>
                <span className={c.necessary}>*</span>
                <p>필수 선택</p>
              </div>
            </div>

            <div className={c.certificateBox}>
              <div className={`${c.certificateChoice} ${c.click}`}>
                <div className={c.imgBox}>
                  <img src="/images/Briefcase Business-blue.png" alt="" />
                </div>
                <div>
                  <p>재직증명서</p>
                  <span>현재 재직 중임을 증명합니다</span>
                </div>
                <button className={`${c.choiceBtn} ${c.btnClick}`}>
                  <img src="/images/Check-white.png" alt="" />
                  선택됨
                </button>
              </div>
              <div className={c.certificateChoice}>
                <div className={c.imgBox}>
                  <img src="/images/Award.png" alt="" />
                </div>
                <div>
                  <p>경력증명서</p>
                  <span>경력 사항을 증명합니다</span>
                </div>
                <button className={c.choiceBtn}>선택하기</button>
              </div>
              <div className={c.certificateChoice}>
                <div className={c.imgBox}>
                  <img src="/images/Banknote.png" alt="" />
                </div>
                <div>
                  <p>급여확인서</p>
                  <span>급여 내역을 증명합니다</span>
                </div>
                <button className={c.choiceBtn}>선택하기</button>
              </div>
              <div className={c.certificateChoice}>
                <div className={c.imgBox}>
                  <img src="/images/Receipt Text.png" alt="" />
                </div>
                <div>
                  <p>근로소득원천징수</p>
                  <span>원천징수 내역 확인서</span>
                </div>
                <button className={c.choiceBtn}>선택하기</button>
              </div>
            </div>
          </div>

          <div className={c.issueBox}>
            <div className={c.issueTitle}>
              <div className={c.title}>
                <img src="/images/File Pen.png" alt="" />
                발급 정보 입력
              </div>
              <div className={c.issueIng}>
                <img src="/images/File Text-2.png" alt="" />
                재직증명서 발급 중
              </div>
            </div>

            <div className={c.applyContent}>
              <div className={c.applyInfoBox}>
                <div className={c.infoTitle}>
                  <span></span>
                  신청자 정보
                </div>
                <div className={c.infoUser}>
                  <div className={c.applyInfo}>
                    <span>사원번호</span>
                    <div className={`${c.applyLock} ${c.applyNumLock}`}>
                      EMP-002
                      <img src="/images/Lock.png" alt="" />
                    </div>
                  </div>
                  <div className={c.applyInfo}>
                    <span>성명</span>
                    <div className={`${c.applyLock} ${c.applyNameLock}`}>
                      이영희
                      <img src="/images/Lock.png" alt="" />
                    </div>
                  </div>
                  <div className={c.applyInfo}>
                    <span>부서</span>
                    <div className={`${c.applyLock} ${c.applyTeamLock}`}>
                      경영지원팀
                      <img src="/images/Lock.png" alt="" />
                    </div>
                  </div>
                  <div className={c.applyInfo}>
                    <span>직급</span>
                    <div className={`${c.applyLock} ${c.applyRankLock}`}>
                      과장
                      <img src="/images/Lock.png" alt="" />
                    </div>
                  </div>
                  <div className={c.applyInfo}>
                    <span>입사일</span>
                    <div className={`${c.applyLock} ${c.applyDateLock}`}>
                      2018.07.15
                      <img src="/images/Lock.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.applyInfoBox}>
                <div className={c.infoTitle}>
                  <span></span>
                  <div>발급 상세 정보</div>
                </div>
                <div className={c.infoUser}>
                  <div className={c.applyInfo}>
                    <span>
                      용도<p className={c.necessary}>*</p>
                    </span>
                    <select name="" id="" className={c.submit}>
                      <option value="관공서 제출용">관공서 제출용</option>
                      <option value="관공서 제출용">관공서 제출용</option>
                      <option value="관공서 제출용">관공서 제출용</option>
                      <option value="관공서 제출용">관공서 제출용</option>
                      <option value="관공서 제출용">관공서 제출용</option>
                    </select>
                  </div>
                  <div className={c.applyInfo}>
                    <span>
                      제출처<p className={c.necessary}>*</p>
                    </span>
                    <input
                      type="text"
                      placeholder="예: 국민은행 ○○지점"
                      className={c.bank}
                    />
                  </div>
                  <div className={c.applyInfo}>
                    <span>
                      발급부수<p className={c.necessary}>*</p>
                    </span>
                    <div className={c.amount}>
                      <button className={c.minusBtn}>-</button>
                      <input
                        type="text"
                        placeholder="1"
                        className={c.amountInput}
                      />
                      <button className={c.plusBtn}>+</button>
                    </div>
                  </div>
                  <div className={c.applyInfo}>
                    <span>
                      언어선택<p className={c.necessary}>*</p>
                    </span>
                    <div className={c.langBtn}>
                      <button className={`${c.korBtn} ${c.choice}`}>
                        <img src="/images/Languages.png" alt="" />
                        국문
                      </button>
                      <button className={c.engBtn}>
                        <img src="/images/Languages-1.png" alt="" />
                        영문
                      </button>
                    </div>
                  </div>
                </div>

                <div className={c.issueInfoBox}>
                  <div className={c.applyInfo}>
                    <span>기준일</span>
                    <input type="date" className={c.date} />
                  </div>
                  <div className={c.applyInfo}>
                    <span>발급목적 &#40;선택&#41;</span>
                    <input
                      type="text"
                      placeholder="- 없이 숫자만 입력"
                      className={c.purpose}
                    />
                  </div>
                </div>
              </div>

              <div className={c.preview}>
                <div className={c.previewBox}>
                  <div className={c.previewTextBox}>
                    <img src="/images/Eye-2.png" alt="" />
                    <div className={c.previewText}>
                      <p>출력 전 미리보기를 확인하세요</p>
                      <span>
                        발급된 증명서는 위변조 방지 마크가 포함됩니다. 내용을
                        반드시 확인한 우 출력해 주세요.
                      </span>
                    </div>
                  </div>
                  <button className={c.previewBtn}>
                    <img src="/images/Eye-2.png" alt="" />
                    미리 보기
                  </button>
                </div>

                <div className={c.btnBox}>
                  <div className={c.delBtn}>
                    <img src="/images/X.png" alt="" />
                    취소
                  </div>
                  <div className={c.preivewBtn2}>
                    <img src="/images/Eye.png" alt="" />
                    미리보기
                  </div>
                  <div className={c.printBtn}>
                    <img src="/images/Printer.png" alt="" />
                    출력하기
                  </div>
                </div>
              </div>
            </div>

            <div className={c.table}>
              <div className={c.tableTitleBox}>
                <div className={c.tableTitle}>
                  <img src="/images/Clock.png" alt="" />
                  나의 발급 이력
                </div>
                <div className={c.tableSearch}>
                  <select name="" id="">
                    <option value="전체">전체</option>
                    <option value="최근 3개월">최근 3개월</option>
                    <option value="최근 6개월">최근 6개월</option>
                  </select>
                  <div className={c.tableLenght}>총 {10}건</div>
                </div>
              </div>
              {/* <Table 
                                columns={[
                                    'NO',
                                    '발급 일시',
                                    '증명서 종류',
                                    '용도',
                                    '제출처',
                                    '언어',
                                    '부수',
                                    '발급번호',
                                    '관리'
                                ]}
                            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
