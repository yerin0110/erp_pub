"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import { useEffect, useRef, useState } from "react";
import baseApi from "@/api/baseApi";
import Table from "@/component/common/Table";
import {
  Baby,
  Banknote,
  CakeSlice,
  Calendar,
  Check,
  Clock,
  CreditCard,
  Download,
  Ellipsis,
  FileImage,
  FileText,
  Flower2,
  Gift,
  Hash,
  Heart,
  MapPin,
  MessageSquareText,
  User,
  X,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

export default function Page() {
  const fileUploaderRef = useRef(null);

  const [applyInfo, setApplyInfo] = useState();

  // 경조사 조회
  const [eventAppliedList, setEventAppliedList] = useState([]);

  // 경조사 구분
  const [eventType, seteventType] = useState("본인결혼");

  // 경조대상자 정보
  const [eventTargetInfo, setEventTargetInfo] = useState();
  // const [name, setName] = useState("");
  // const [relation, setRelation] = useState();
  // const [date, setDate] = useState("");
  // const [place, setPlace] = useState("");
  // const [bank, setBank] = useState("");
  // const [account, setAccount] = useState("");

  // useEffect(() => {
  //   toast("토스트 테스트", { position: "top-center" });
  // });

  const fileUpload = async (fileList) => {
    const url = "http://localhost:33000/api/v1/files/upload";

    const token = localStorage.getItem("accessToken");

    const 파일 = fileList[0];

    const formData = new FormData();
    formData.append("file", 파일);
    formData.append("refType", "1");

    await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const 경조사비리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setEventAppliedList(res?.data?.data);
    console.log("res >>> ", res);
  };

  // 함수 -> 경조비 신청현황 리스트 조회
  const 경조비신청리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res.data.data);
    setEventAppliedList(res.data.data);
  };

  useEffect(() => {
    // 경조비 신청현황 조회
    경조비신청리스트조회();
  }, []);

  useEffect(() => {
    // 로컬스토리지에 있는 데이터 가져오기
    const user = JSON.parse(localStorage.getItem("user"));

    const 사원번호 = user.employeeNo;
    const 이름 = user.name;
    const 부서명 = user.departmentName;
    const 직급 = user.position;

    const 신청연도 = new Date().getFullYear();
    const 신청월 = new Date().getMonth() + 1;
    const 신청일 = new Date().getDate();

    // 2026.06.12
    const 신청날짜 = `${신청연도}.${신청월}.${신청일}`;

    setApplyInfo({
      employeeNo: 사원번호,
      name: 이름,
      departmentName: 부서명,
      position: 직급,
      applyDate: 신청날짜,
    });

    경조사비리스트조회();
  }, []);

  const 경조사비신청하기 = async () => {
    const token = localStorage.getItem("accessToken");

    // if (
    //   !eventType ||
    //   !eventTargetInfo.targetName ||
    //   !eventTargetInfo.familyRelation ||
    //   !eventTargetInfo.applicationDate ||
    //   !eventTargetInfo.bankName ||
    //   !eventTargetInfo.accountNumder ||
    //   !eventTargetInfo.accountHolder
    // ) {
    //   alert("필수 항목을 모두 입력해주세요");
    //   return;
    // }

    // // 1. 경조구분 확인하기
    if (!eventType) {
      alert("경조구분은 필수 항목 입니다");
      return;
    }

    // // 2. 대상자 성명 확인하기
    if (!eventTargetInfo.targetName) {
      alert("대상자 성명은 필수 항목입니다");
      return;
    }

    // // 3. 관계 확인하기
    if (!eventTargetInfo.familyRelation) {
      alert("관계는 필수 항목입니다");
      return;
    }

    // // 4. 경조일 확인하기
    if (!eventTargetInfo.applicationDate) {
      alert("경조일은 필수 항목입니다");
      return;
    }

    // // 5. 은행 확인하기
    if (!eventTargetInfo.bankName) {
      alert("은행이름은 필수 항목입니다");
      return;
    }

    // // 6. 계좌번호 확인하기
    if (!eventTargetInfo.accountNumder) {
      alert("계좌번호는 필수 항목입니다");
      return;
    }

    if (
      !(
        10 <= eventTargetInfo.accountNumder.length &&
        eventTargetInfo.accountNumder.length <= 12
      )
    ) {
      alert("올바른 계좌번호가 아닙니다");
      return;
    }

    // // 7. 예금주 확인하기
    if (!eventTargetInfo.accountHolder) {
      alert("예금주는 필수 항목입니다");
      return;
    }

    const res = await baseApi.post(
      "/api/v1/support",
      {
        eventType: eventType,
        familyRelation: eventTargetInfo.familyRelation,
        targetName: eventTargetInfo.targetName,
        applicationDate: "2026-06-12",
        eventDate: eventTargetInfo.applicationDate,
        requestedAmount: 50000,
        eventLocation: eventTargetInfo.eventLocation,
        bankName: eventTargetInfo.bankName,
        accountNumber: eventTargetInfo.accountNumder,
        accountHolder: eventTargetInfo.accountHolder,
        approvalStatus: "확인",
        memo: "메모",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };

  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const openApply = () => setIsApplyOpen(true);
  const closeApply = () => setIsApplyOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            location={["인사관리", "경조비관리", "경조비신청"]}
            title="경조비신청"
            subTitle="경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다."
            downloadBtnImg="/images/Download.png"
            downloadBtnText="PDF 다운로드"
            addBtnImg="/images/Plus.png"
            addBtnText="신규신청"
            onAddClick={openApply}
          />

          {isApplyOpen && (
            <div className={c.applyBox}>
              <div className={c.applyTitle}>
                <div className={c.title}>
                  <img src="/images/Heart Handshake-navy.png" alt="" />
                  경조비 신청 입력
                </div>
                <div className={c.necessaryInput}>
                  <span className={c.necessary}>*</span>
                  <p>필수 입력 항목</p>
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
                        {applyInfo?.employeeNo}
                        <img src="/images/Lock.png" alt="" />
                      </div>
                    </div>
                    <div className={c.applyInfo}>
                      <span>성명</span>
                      <div className={`${c.applyLock} ${c.applyNameLock}`}>
                        {applyInfo?.name}
                        <img src="/images/Lock.png" alt="" />
                      </div>
                    </div>
                    <div className={c.applyInfo}>
                      <span>부서</span>
                      <div className={`${c.applyLock} ${c.applyTeamLock}`}>
                        {applyInfo?.departmentName}
                        <img src="/images/Lock.png" alt="" />
                      </div>
                    </div>
                    <div className={c.applyInfo}>
                      <span>직급</span>
                      <div className={`${c.applyLock} ${c.applyRankLock}`}>
                        {applyInfo?.position}
                        <img src="/images/Lock.png" alt="" />
                      </div>
                    </div>
                    <div className={c.applyInfo}>
                      <span>신청일</span>
                      <div className={`${c.applyLock} ${c.applyDateLock}`}>
                        {applyInfo?.applyDate}
                        <img src="/images/Lock.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={c.applyInfoBox}>
                  <div className={c.infoTitle}>
                    <span></span>
                    <div>
                      경조 구분
                      <p className={c.necessary}>*</p>
                    </div>
                  </div>
                  <div className={c.eventChoiceBox}>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "본인결혼" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("본인결혼");
                      }}
                    >
                      <Heart
                        size={13}
                        color={eventType === "본인결혼" ? "#ffffff" : "#888888"}
                      />
                      본인결혼
                    </button>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "자녀결혼" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("자녀결혼");
                      }}
                    >
                      <Heart
                        size={13}
                        color={eventType === "자녀결혼" ? "#ffffff" : "#888888"}
                      />
                      자녀결혼
                    </button>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "출산" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("출산");
                      }}
                    >
                      <Baby
                        size={13}
                        color={eventType === "출산" ? "#ffffff" : "#888888"}
                      />
                      출산
                    </button>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "부모사망" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("부모사망");
                      }}
                    >
                      <Flower2
                        size={13}
                        color={eventType === "부모사망" ? "#ffffff" : "#888888"}
                      />
                      부모사망
                    </button>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "배우자사망" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("배우자사망");
                      }}
                    >
                      <Flower2
                        size={13}
                        color={
                          eventType === "배우자사망" ? "#ffffff" : "#888888"
                        }
                      />
                      배우자사망
                    </button>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "부모회갑" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("부모회갑");
                      }}
                    >
                      <CakeSlice
                        size={13}
                        color={eventType === "부모회갑" ? "#ffffff" : "#888888"}
                      />
                      부모회갑
                    </button>
                    <button
                      className={`${c.eventChoiceBtn} ${eventType === "기타" ? c.choice : ""}`}
                      onClick={() => {
                        seteventType("기타");
                      }}
                    >
                      <Ellipsis
                        size={13}
                        color={eventType === "기타" ? "#ffffff" : "#888888"}
                      />
                      기타
                    </button>
                  </div>
                  <div className={c.give}>
                    <img src="/images/Info.png" alt="" />
                    본인 결혼 선택됨 · 지급기준액:
                    <span className={c.money}>500,000원</span>
                  </div>
                </div>

                <div className={c.applyInfoBox}>
                  <div className={c.infoTitle}>
                    <span></span>
                    <div>
                      경조 대상자 정보
                      <p className={c.necessary}>*</p>
                    </div>
                  </div>
                  <div className={c.infoUser}>
                    <div className={c.applyInfo}>
                      <span>
                        대상자 성명<p className={c.necessary}>*</p>
                      </span>
                      <input
                        type="text"
                        placeholder="성명을 입력하세요"
                        className={c.name}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              targetName: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                    <div className={c.applyInfo}>
                      <span>
                        관계<p className={c.necessary}>*</p>
                      </span>
                      <select
                        name=""
                        id=""
                        className={c.relation}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              familyRelation: e.target.value,
                            };
                          });
                        }}
                      >
                        <option value="선택">== 선택 ==</option>
                        <option value="본인">본인</option>
                        <option value="본인인가">본인</option>
                        <option value="본인일지도">본인</option>
                        <option value="본인일거임">본인</option>
                      </select>
                    </div>
                    <div className={c.applyInfo}>
                      <span>
                        경조일<p className={c.necessary}>*</p>
                      </span>
                      <input
                        type="date"
                        className={c.date}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              applicationDate: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                    <div className={c.applyInfo}>
                      <span>경조 장소</span>
                      <input
                        type="text"
                        placeholder="장소를 입력하세요 (선택)"
                        className={c.place}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              eventLocation: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={`${c.applyInfoBox} ${c.position}`}>
                  <div className={c.infoTitle}>
                    <span></span>
                    <div>
                      지급 계좌
                      <p className={c.necessary}>*</p>
                    </div>
                  </div>
                  <div className={c.infoUser}>
                    <div className={c.applyInfo}>
                      <span>은행</span>
                      <select
                        name=""
                        id=""
                        className={c.bank}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              bankName: e.target.value,
                            };
                          });
                        }}
                      >
                        <option value="선택">=== 선택 ===</option>
                        <option value="국민은행">국민은행</option>
                        <option value="신한은행">신한은행</option>
                        <option value="우리은행">우리은행</option>
                        <option value="기업은행">기업은행</option>
                        <option value="농협">농협</option>
                      </select>
                    </div>
                    <div className={c.applyInfo}>
                      <span>계좌번호</span>
                      <input
                        type="text"
                        placeholder="- 없이 숫자만 입력"
                        className={c.account}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              accountNumder: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                    <div className={c.applyInfo}>
                      <span>예금주</span>
                      <input
                        type="text"
                        className={c.accountUser}
                        onChange={(e) => {
                          setEventTargetInfo((prev) => {
                            return {
                              ...prev,
                              accountHolder: e.target.value,
                            };
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div className={c.accountCheck}>
                    <img src="/images/Check.png" alt="" />
                    계좌 확인
                  </div>
                </div>

                <div className={c.attach}>
                  <div className={c.infoTitle}>
                    <span></span>
                    첨부파일
                  </div>
                  <div className={c.fiileUpload}>
                    <img src="/images/Paperclip.png" alt="" />
                    <div className={c.attachText}>
                      <p>청첩장·출생증명서 등 관련 서류를 첨부해 주세요</p>
                      <span>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</span>
                    </div>

                    <input
                      type="file"
                      hidden
                      ref={fileUploaderRef}
                      onChange={(e) => {
                        // API 백엔드에 파일 전송
                        fileUpload(e.target.files);
                      }}
                    />
                    <button
                      className={c.uploadBtn}
                      onClick={() => {
                        fileUploaderRef.current.click();
                      }}
                    >
                      <img src="/images/Upload.png" alt="" />
                      파일 선택
                    </button>
                  </div>
                  <div className={c.attachFile}>
                    <div className={c.file}>
                      <img src="/images/File Text-2.png" alt="" />
                      <div className={c.fileName}>
                        <p>청첩장_이영희.pdf</p>
                        <span>238 KB · 업로드 완료</span>
                      </div>
                    </div>
                    <div className={c.delBtn}>
                      <img src="/images/X-red.png" alt="" />
                      취소
                    </div>
                  </div>
                  <div className={c.note}>
                    <div className={c.noteTitle}>비고</div>
                    <textarea
                      name=""
                      id=""
                      placeholder="추가 사항을 입력하세요. (선택)"
                    ></textarea>
                    <div className={c.noteBtnBox}>
                      <button className={c.cancleBtn} onClick={closeApply}>
                        <img src="/images/X.png" alt="" />
                        취소
                      </button>

                      <button
                        className={c.saveBtn}
                        onClick={async () => {
                          await 경조사비신청하기();
                          await 경조비신청리스트조회();
                        }}
                      >
                        <img src="/images/Send Horizontal.png" alt="" />
                        신청하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={c.table}>
            <div className={c.tableTitleBox}>
              <div className={c.tableTitle}>
                <img src="/images/Clock.png" alt="" />
                나의 경조비 신청 현황
              </div>
              <div className={c.tableSearch}>
                <select name="" id="">
                  <option value="전체">전체</option>
                  <option value="본인결혼">본인결혼</option>
                  <option value="자녀결혼">자녀결혼</option>
                  <option value="출산">출산</option>
                  <option value="부모사망">부모사망</option>
                  <option value="배우자사망">배우자사망</option>
                  <option value="부모회갑">부모회갑</option>
                  <option value="기타">기타</option>
                </select>
                <div className={c.tableLenght}>
                  총 {eventAppliedList.length}건
                </div>
              </div>
            </div>
            <Table
              tableList={eventAppliedList || []}
              columns={[
                "NO",
                "신청일",
                "경조구분",
                "대상자",
                "관계",
                "경조일",
                "지급금액",
                "지급계좌",
                "처리상태",
                "관리",
              ]}
              onDetailClick={openModal}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={c.modalView}>
          <div className={c.titleBox}>
            <div className={c.modalTitle}>
              <Gift size={17} color="#60a5fa" />
              <div>
                <p>경조비 신청 상세</p>
                <span>Welfare Benefit Detail</span>
              </div>
            </div>
            <div className={c.btnBox}>
              <div className={c.status}>검토중</div>
              <div className={c.closeBtn} onClick={closeModal}>
                <X size={14} color="#ffffff" />
              </div>
            </div>
          </div>

          <div className={c.detailBox}>
            <div className={c.statusBox}>
              <div className={c.apply}>
                <div className={c.applyNum}>
                  <Hash size={12} color="#9ca3af" />
                  신청번호: WEL-2025-07-001
                </div>
                <div className={c.applyDate}>
                  <Calendar size={16} color="#9ca3af" />
                  신청일: 2025.07.01
                </div>
              </div>
              <div className={c.state}>
                <div>
                  <Check
                    size={11}
                    color="#ffffff"
                    style={{
                      backgroundColor: "#1b3a6b",
                      width: "20px",
                      height: "20px",
                      padding: "4.5px",
                      borderRadius: "999px",
                    }}
                  />
                  신청완료
                </div>
                <span></span>
                <div>
                  <div className={c.cricle}>
                    <div className={c.miniCricle}></div>
                  </div>
                  검토중
                </div>
                <span></span>
                <div>
                  <div className={c.cricleBasic}>
                    <div className={c.miniCricleBasic}></div>
                  </div>
                  승인
                </div>
                <span></span>
                <div>
                  <div className={c.cricleBasic}>
                    <div className={c.miniCricleBasic}></div>
                  </div>
                  지급완료
                </div>
              </div>
            </div>

            <div className={c.detail}>
              <div className={c.detailInfo}>
                <div className={c.detailTitle}>
                  <span></span>경조정보
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>경조구분</th>
                      <td>
                        <span className={c.detailType}>본인결혼</span>
                        <div className={c.rule}>경조비 지급 규정 3조 1항</div>
                      </td>
                    </tr>
                    <tr>
                      <th>대상자/관계</th>
                      <td>
                        <span className={c.firstName}>이</span>
                        <p className={c.detailName}>이영희</p>
                        <div className={c.detailRelation}>본인</div>
                      </td>
                    </tr>
                    <tr>
                      <th>경조일</th>
                      <td>
                        <Calendar size={13} color="#9ca3af" />
                        2025년 7월 20일 (일)
                      </td>
                    </tr>
                    <tr>
                      <th>경조 장소</th>
                      <td>
                        <MapPin size={13} color="#9ca3af" />
                        더케이서울호텔 그랜드블룸
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={c.detailInfo}>
                <div className={c.detailTitle}>
                  <span></span>지급 정보
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>지급금액</th>
                      <td>
                        <Banknote size={13} color="#1b3a6b" />
                        <span className={c.amontMoney}>500,000원</span>
                        <div className={c.rule}>(오십만원정)</div>
                      </td>
                    </tr>
                    <tr>
                      <th>지급계좌</th>
                      <td>
                        <CreditCard size={13} color="#9ca3af" />
                        국민은행 12****-34 (이영희)
                      </td>
                    </tr>
                    <tr>
                      <th>예상 지급일</th>
                      <td>
                        <Clock size={13} color="#9ca3af" />
                        승인 후 3영업일 이내
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={c.detailInfo}>
                <div className={c.detailTitle}>
                  <span></span>첨부 서류
                </div>
                <div className={c.detailAttach}>
                  <div className={c.fileType}>
                    <div className={`${c.imgBox} ${c.pdf}`}>
                      <FileText size={14} color="#2563eb" />
                    </div>
                    <div className={c.detailFile}>
                      결혼확인서_이영희_20250701.pdf
                      <span>PDF · 245 KB · 2025.07.01 업로드</span>
                    </div>
                  </div>
                  <button className={c.downloadBtn}>
                    <Download size={15} color="#9ca3af" />
                  </button>
                </div>
                <div className={c.detailAttach}>
                  <div className={c.fileType}>
                    <div className={`${c.imgBox} ${c.jpg}`}>
                      <FileImage size={14} color="#dc2626" />
                    </div>
                    <div className={c.detailFile}>
                      청첩장_스캔본.jpg
                      <span>JPG · 1.2 MB · 2025.07.01 업로드</span>
                    </div>
                  </div>
                  <button className={c.downloadBtn}>
                    <Download size={15} color="#9ca3af" />
                  </button>
                </div>
              </div>
              <div className={c.detailInfo}>
                <div className={`${c.detailTitle} ${c.reviewTitle}`}>
                  <span className={c.review}></span>검토 의견
                </div>
                <div className={c.reviewBox}>
                  <div className={c.reviewText}>
                    <MessageSquareText size={14} color="#d97706" />
                    서류 확인 중입니다. 추가 서류 제출이 필요할 수 있습니다.
                  </div>
                  <div className={c.reviewer}>
                    <User size={11} color="#d97706" />
                    검토자: 김인사 (인사팀장) · 2025.07.02
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={c.modalFooter}>
            <div className={c.footerText}>
              <Clock size={12} color="#9ca3af" />
              최종 수정: 2025.07.02 · 인사팀
            </div>
            <div className={c.buttonBox}>
              <div className={c.applyCancelBtn}>
                <X size={13} color="#dc2626" />
                신청취소
              </div>
              <div className={c.applyCloseBtn} onClick={closeModal}>
                <X size={13} color="#ffffff" />
                닫기
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
