"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import Table from "@/component/common/Table";
import TableFooter from "@/component/common/TableFooter";
import {
  Award,
  ChevronRight,
  Clock,
  GraduationCap,
  IdCard,
  Printer,
  Upload,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Page() {
  // const typeClass = {
  //   승진: c.promotion,
  //   전보: c.transfer,
  //   신규입사: c.newHire,
  // };

  const [activeMenu, setActiveMenu] = useState("발령이력");
  const menus = ["발령이력", "근태요약", "급여이력", "자격증/학력"];

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
            location={["인사관리", "인사정보", "인사발령등록"]}
            title="인사발령등록"
            subTitle="사원의 부서·직급·직책·발령 정보를 등록하고 이력을 관리합니다"
            buttons={[
              {
                img: "/images/Download.png",
                text: "PDF 다운로드",
              },
              {
                img: "/images/Plus.png",
                text: "신규등록",
              },
            ]}
          />

          <div className={c.searchBox}>
            <div className={c.searchTitle}>
              <img src="/images/Search.png" alt="" />
              검색조건
            </div>
            <div className={c.search}>
              <div>
                <span className={c.condition}>사원검색</span>
                <input type="text" placeholder="사원번호 또는 성명" />
                <div className={c.imgBox}>
                  <img src="/images/Search-white.png" alt="" />
                </div>
              </div>

              <div>
                <span className={c.condition}>발령유형</span>
                <select name="" id="">
                  <option value="">인사팀</option>
                  <option value="">경영지원팀</option>
                  <option value="">개발팀</option>
                  <option value="">영업팀</option>
                </select>
              </div>

              <div className={c.searchDate}>
                <span className={c.condition}>발령일</span>
                <input type="date" />
                <span>~</span>
                <input type="date" />
              </div>

              <div className={c.searchBtnBox}>
                <button className={c.searchBtn}>
                  <img src="/images/Search-white.png" alt="" />
                  조회
                </button>
                <button className={c.resetBtn}>
                  <img src="/images/Rotate Ccw.png" alt="" />
                  초기화
                </button>
              </div>
            </div>
          </div>

          <div className={c.inputForm}>
            <div className={c.formHeader}>
              <div className={c.formTitle}>
                <img src="/images/File Pen.png" alt="" />
                발령 입력 폼
              </div>
              <div className={c.userInfo}>
                <img src="/images/User Round.png" alt="" />
                EMP-002·이영희·경영지원팀·과장
              </div>
            </div>

            <div className={c.formInput}>
              <div className={c.formInputBox}>
                <div className={c.formType}>
                  <p>
                    발령유형<b>*</b>
                  </p>
                  <div>
                    <button className={c.click}>승진</button>
                    <button>전보</button>
                    <button>겸직</button>
                    <button>기타</button>
                  </div>
                </div>
                <div className={c.formDate}>
                  <p>
                    발령일<b>*</b>
                  </p>
                  <input type="date" />
                </div>
                <div className={c.formNum}>
                  <p>발령번호</p>
                  <div className={c.formNumAuto}>자동생성</div>
                </div>
                <div className={c.formReason}>
                  <p>발령사유</p>
                  <input type="text" placeholder="발령 사유를 입력하세요" />
                </div>
              </div>

              <div className={c.formEdit}>
                <div className={c.formEditBefore}>
                  <div className={c.beforeTitle}>
                    <p>발령 전</p>
                    <div className={`${c.hr} ${c.hrBefore}`}></div>
                  </div>
                  <div className={c.beforeInput}>
                    <div>
                      <span>부서</span>
                      <div>
                        경영지원팀 <img src="/images/lock.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <span>직급</span>
                      <div>
                        과장 <img src="/images/lock.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <span>직책</span>
                      <div>
                        팀원 <img src="/images/lock.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/images/Arrow Right.png" alt="" />
                <div className={c.formEditAfter}>
                  <div className={c.afterTitle}>
                    <p>발령 후</p>
                    <div className={`${c.hr} ${c.hrAfter}`}></div>
                  </div>
                  <div className={c.afterInput}>
                    <div>
                      <span>부서</span>
                      <select name="" id="">
                        <option value="인사팀">인사팀</option>
                        <option value="경영지원팀">경영지원팀</option>
                        <option value="개발팀">개발팀</option>
                        <option value="영업팀">영업팀</option>
                      </select>
                    </div>
                    <div>
                      <span>직급</span>
                      <select name="" id="">
                        <option value="팀장">팀장</option>
                        <option value="과장">과장</option>
                        <option value="대리">대리</option>
                        <option value="사원">사원</option>
                      </select>
                    </div>
                    <div>
                      <span>직책</span>
                      <select name="" id="">
                        <option value="리더">리더</option>
                        <option value="팀원">팀원</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.note}>
                <div className={c.noteTitle}>비고</div>
                <textarea
                  name=""
                  id=""
                  placeholder="발령 관련 추가 사항을 입력하세요."
                ></textarea>
                <div className={c.noteBtnBox}>
                  <button className={c.cancleBtn}>
                    <img src="/images/X.png" alt="" />
                    취소
                  </button>
                  <button className={c.saveBtn}>
                    <img src="/images/Save.png" alt="" />
                    저장
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <img src="/images/Clock.png" alt="" />
                발령 이력
              </div>
              <div className={c.tableLenght}>총 {10}건</div>
            </div>
            <Table
              columns={[
                "NO",
                "발령번호",
                "사원번호",
                "성명",
                "발령유형",
                "발령전 부서/직급",
                "발령후 부서/직급",
                "발령일",
                "등록자",
                "관리",
              ]}
            />
            <TableFooter totalCount={10} />
          </div>
        </div>
      </div>

      {/* {isModalOpen && ()} */}
      <div className="fixed inset-0 bg-black/50 z-50">
        <div className={c.modalView}>
          <div className={c.titleBox}>
            <div className={c.modalTitle}>
              <IdCard size={18} color="#60a5fa" />
              <div>
                <p>인사기록카드</p>
                <span>2025년 기준</span>
              </div>
            </div>
            <div className={c.btnBox}>
              <button className={c.print}>
                <Printer size={13} color="#93c5fd" />
                인쇄
              </button>
              <div className={c.closeBtn}>
                <X size={14} color="#ffffff" />
              </div>
            </div>
          </div>

          <div className={c.cardInfo}>
            <div className={c.pictureBox}>
              <div className={c.userPicture}>
                <User size={32} color="#94a3b8" />
                사진
              </div>
              <button className={c.change}>
                <Upload size={10} color="#6b7280" />
                변경
              </button>
            </div>
            <div className={c.cardInfoBox}>
              <div className={c.infoBox}>
                <div className={c.info}>
                  <label htmlFor="">사원번호</label>
                  <div className={c.empNum}>EMP-002</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">사원번호</label>
                  <div className={c.userName}>EMP-002</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">생년월일</label>
                  <div className={c.infoText}>1988.05.14</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">성별</label>
                  <div className={c.infoText}>여</div>
                </div>
              </div>
              <div className={c.line}></div>

              <div className={c.infoBox}>
                <div className={c.info}>
                  <label htmlFor="">부서</label>
                  <div className={c.team}>인사팀</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">직급</label>
                  <div className={c.infoText}>차장</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">입사일</label>
                  <div className={c.infoText}>2018.07.15</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">재직상태</label>
                  <div className={c.state}>재직중</div>
                </div>
              </div>
              <div className={c.line}></div>

              <div className={c.infoBox}>
                <div className={c.info}>
                  <label htmlFor="">휴대폰</label>
                  <div className={c.infoText}>010-9876-5432</div>
                </div>
                <span></span>
                <div className={c.infoEmail}>
                  <label htmlFor="">이메일</label>
                  <div className={c.infoText}>lee@company.com</div>
                </div>
                <span></span>
                <div className={c.info}>
                  <label htmlFor="">근속연수</label>
                  <div className={c.empService}>6년 11개월</div>
                </div>
              </div>
            </div>
          </div>

          <div className={c.menu}>
            <ul className={c.menuList}>
              {menus.map((menu) => (
                <li
                  key={menu}
                  className={activeMenu === menu ? c.choice : ""}
                  onClick={() => setActiveMenu(menu)}
                >
                  {menu}
                </li>
              ))}
              {/* <li className={c.choice}>발령이력</li>
              <li>근태요약</li>
              <li>급여이력</li>
              <li>자격증/학력</li> */}
            </ul>
          </div>

          <div className={c.cardContent}>
            {activeMenu === "발령이력" && (
              <div className={c.appointList}>
                <div className={c.cardTitle}>
                  <div className={c.title}>
                    <span></span>발령 이력
                  </div>
                  <div className={c.totalAppoint}>총 3건</div>
                </div>
                <table className={c.appointTable}>
                  <thead>
                    <tr>
                      <th>발령일</th>
                      <th>발령유형</th>
                      <th>발령전 부서/직급</th>
                      <th>발령후 부서/직급</th>
                      <th>발령번호</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={c.appointDate}>2025.07.01</td>
                      <td className={c.appointType}>
                        <span className={c.promotion}>승진</span>
                      </td>
                      <td className={c.appointBefore}>경영지원팀 · 과장</td>
                      <td className={c.appointAfter}>인사팀 · 차장</td>
                      <td className={c.appointNumber}>APT-2025-003</td>
                    </tr>
                    <tr>
                      <td className={c.appointDate}>2022.01.03</td>
                      <td className={c.appointType}>
                        <span className={c.transfer}>전보</span>
                      </td>
                      <td className={c.appointBefore}>총무팀 · 대리</td>
                      <td className={c.appointAfter}>경영지원팀 · 과장</td>
                      <td className={c.appointNumber}>APT-2022-001</td>
                    </tr>
                    <tr>
                      <td className={c.appointDate}>2018.07.15</td>
                      <td className={c.appointType}>
                        <span className={c.newHire}>신규입사</span>
                      </td>
                      <td className={c.appointBefore}></td>
                      <td className={c.newHireAppoint}>총무팀 · 사원</td>
                      <td className={c.appointNumber}>APT-2018-012</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* <div className={c.line}></div> */}

            {activeMenu === "근태요약" && (
              <div className={c.attendance}>
                <div className={c.cardTitle}>
                  <div className={c.title}>
                    <span></span>올해 근태 요약 (2025년)
                  </div>
                  기준일: 2025.07.01
                </div>
                <div className={c.attendanceCardList}>
                  <div className={`${c.attendanceCard} ${c.work}`}>
                    124
                    <span>출근일수</span>
                  </div>
                  <div className={`${c.attendanceCard} ${c.late}`}>
                    2<span>지각</span>
                  </div>
                  <div className={`${c.attendanceCard} ${c.vacationUse}`}>
                    8<span>연차사용</span>
                  </div>
                  <div className={`${c.attendanceCard} ${c.vacationRemain}`}>
                    7<span>잔여연차</span>
                  </div>
                  <div className={`${c.attendanceCard} ${c.businessTrip}`}>
                    3<span>출장</span>
                  </div>
                  <div className={`${c.attendanceCard} ${c.absence}`}>
                    0<span>결근</span>
                  </div>
                </div>
              </div>
            )}

            {/* <div className={c.line}></div> */}

            {activeMenu === "급여이력" && (
              <div className={c.payList}>
                <div className={c.cardTitle}>
                  <div className={c.title}>
                    <span></span>최근 급여 이력
                  </div>
                  <button className={c.allShow}>
                    전체보기
                    <ChevronRight size={12} color="#9ca3af" />
                  </button>
                </div>
                <table className={c.payTable}>
                  <thead>
                    <tr>
                      <th>지급연월</th>
                      <th>기본급</th>
                      <th>수당합계</th>
                      <th>공제합계</th>
                      <th>실지급액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={c.payYear}>2025.06</td>
                      <td className={c.basicPay}>4,200,000</td>
                      <td>620,000</td>
                      <td className={c.deduction}>432,000</td>
                      <td className={c.realPay}>4,388,000</td>
                    </tr>
                    <tr>
                      <td className={c.payYear}>2025.05</td>
                      <td>4,200,000</td>
                      <td>520,000</td>
                      <td className={c.deduction}>432,000</td>
                      <td className={c.realPay}>4,288,000</td>
                    </tr>
                    <tr>
                      <td className={c.payYear}>2025.04</td>
                      <td>4,200,000</td>
                      <td>420,000</td>
                      <td className={c.deduction}>432,000</td>
                      <td className={c.realPay}>4,188,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* <div className={c.line}></div> */}

            {activeMenu === "자격증/학력" && (
              <div className={c.licenseList}>
                <div className={c.cardTitle}>
                  <div className={c.title}>
                    <span></span>자격증 / 학력
                  </div>
                </div>
                <div className={c.licenseBox}>
                  <div className={c.licenseType}>
                    <div className={c.licenseTitle}>
                      <Award size={13} color="#f59e0b" />
                      자격증
                    </div>
                    <div className={c.license1}>
                      정보처리기사
                      <span>한국산업인력공단 · 2016.08</span>
                    </div>
                    <div className={c.license1}>
                      컴퓨터활용능력 1급
                      <span>대한상공회의소 · 2014.05</span>
                    </div>
                  </div>
                  <div className={c.licenseType}>
                    <div className={c.licenseTitle}>
                      <GraduationCap size={13} color="#3b82f6" />
                      학력
                    </div>
                    <div className={c.license2}>
                      정보처리기사
                      <span>한국산업인력공단 · 2016.08</span>
                    </div>
                    <div className={c.license2}>
                      컴퓨터활용능력 1급
                      <span>대한상공회의소 · 2014.05</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={c.modalFooter}>
            <div className={c.footerText}>
              <Clock size={12} color="#9ca3af" />
              최종 수정: 2025.07.01 · 홍길동 (인사팀)
            </div>
            <button className={c.cancelBtn}>
              <X size={14} color="#ffffff" />
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
