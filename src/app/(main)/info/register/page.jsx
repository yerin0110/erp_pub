"use client";

import c from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import PageTitle from "@/component/common/PageTitle";
import Table from "@/component/common/Table";
import TableFooter from "@/component/TableFooter";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import { Save, Search, UserPlus, X } from "lucide-react";

export default function Page() {
  const [employees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState();

  // case 1: 렌더링 되자마자
  // case 2: 조회 버튼 누를 때
  // case 3: 페이지 번호 클릭할 때
  const getEmployees = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });

    setEmployees(res.data.data);
    console.log(res.data.data);
  };

  // 페이지가 뜨자마자
  useEffect(() => {
    // useEffect 배열 내에 의존 추가가능
    // 의존한 데이터가 getEmployees 내에 또 바뀔 경우 무한루프 돌 가능성 있어서 에러 나옴
    // 지워주셈

    /* const getEmployees = async () => {
      // 기존 직원 데이터를 가져오는 로직
    }; */

    getEmployees();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressInfo, setAddressInfo] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setAddressInfo({});
  };

  {
    /* [다음 주소찾기 API]  2. 다음주소 검색 > 리스트 선택시 발동 */
  }
  const openPostcode = () => {
    if (!window || window === undefined) return;

    const postCode = new window.daum.Postcode({
      oncomplete(data) {
        // data 안에 많이 있음. 여기서 뽑아서 쓰면됨.
        console.log("선택한 주소 >>>> ", data);

        const 우편번호 = data?.zonecode;
        const 주소 = data?.address;

        // setAddressInfo({ ...data });
        setAddressInfo((prev) => ({
          ...prev,
          postCode: 우편번호,
          address: 주소,
        }));
      },
    });

    postCode.open();
  };

  // radio버튼
  const handleStatusChange = (e) => {
    setRegisterInfo((prev) => ({
      ...prev,
      state: e.target.value,
    }));
  };

  // 사원등록하기
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    team: "",
    rank: "",
    joinDate: "",
    state: "재직중",
    phone: "",
    email: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });

  const 사원등록하기 = async () => {
    const token = localStorage.getItem("accessToken");

    // 필수항목 미기입 경고창
    if (
      !registerInfo.name ||
      !registerInfo.team ||
      !registerInfo.rank ||
      !registerInfo.joinDate ||
      !registerInfo.state ||
      !registerInfo.phone
    ) {
      alert("필수 항목을 빠짐없이 기입해주십시오");
      return;
    }

    const res = await baseApi.post(
      "/api/v1/employees/registerEmployee",
      {
        name: registerInfo.name,
        departmentName: registerInfo.team,
        positionName: registerInfo.rank,
        hireDate: registerInfo.joinDate,
        employmentStatus: registerInfo.state,
        phone: registerInfo.phone,
        email: registerInfo.email,
        postCode: addressInfo.postCode,
        // address: addressInfo.roadAddress,
        address: addressInfo.address,
        detailedAddress: registerInfo.detailAddress,
        /* emergencyName: registerInfo.emergencyName,
        emergencyRelation: registerInfo.emergencyRelation,
        emergencyPhone: registerInfo.emergencyPhone, */
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setAddressInfo({});
  };

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
            location={["인사관리", "인사정보", "인사정보등록"]}
            title="인사정보등록"
            subTitle="직원의 인사정보를 등록하고 관리합니다."
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
                <span>사원번호</span>
                <input
                  type="text"
                  placeholder="전체"
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>

              <div>
                <span>부서</span>
                <select name="" id="">
                  <option value="선택">== 선택 ==</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원본부">경영지원본부</option>
                  <option value="IT본부">IT본부</option>
                  <option value="영업본부">영업본부</option>
                </select>
              </div>

              <div>
                <span>직급</span>
                <select name="" id="">
                  <option value="선택">== 선택 ==</option>
                  <option value="과장">과장</option>
                  <option value="팀장">팀장</option>
                  <option value="대리">대리</option>
                  <option value="사원">사원</option>
                </select>
              </div>

              <div>
                <span>재직상태</span>
                <select name="" id="">
                  <option value="선택">== 선택 ==</option>
                  <option value="재직중">재직중</option>
                  <option value="휴직중">휴직중</option>
                </select>
              </div>

              <div className={c.searchBtnBox}>
                <button className={c.searchBtn} onClick={() => getEmployees()}>
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

          <Table
            employees={employees}
            columns={[
              "NO",
              "사원번호",
              "성명",
              "부서",
              "직급",
              "입사일",
              "연락처",
              "이메일",
              "재직상태",
              "관리",
            ]}
          />
          <TableFooter totalCount={employees.length} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className={c.modalView}>
            <div className={c.modalTitle}>
              <div className={c.title}>
                <UserPlus size={18} color="#60a5fa" />
                인사정보등록
              </div>
              <div className={c.closeBtn} onClick={closeModal}>
                <X size={16} color="#ffffff" />
              </div>
            </div>
            <div className={c.inputBox}>
              <div className={c.input}>
                <div className={c.inputTitle}>
                  <span></span>
                  <p>기본정보</p>
                </div>
                <div className={c.basic}>
                  <div>
                    <label>
                      사원번호<span className={c.necessary}>*</span>
                    </label>
                    <div className={c.auto}>자동생성</div>
                  </div>
                  <div>
                    <label>
                      성명<span className={c.necessary}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="성명"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            name: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label>
                      부서<span className={c.necessary}>*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            team: e.target.value,
                          };
                        });
                      }}
                    >
                      <option value="선택">=== 선택 ===</option>
                      <option value="인사팀">인사팀</option>
                      <option value="경영지원본부">경영지원본부</option>
                      <option value="IT본부">IT본부</option>
                      <option value="영업본부">영업본부</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      직급<span className={c.necessary}>*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            rank: e.target.value,
                          };
                        });
                      }}
                    >
                      <option value="">=== 선택 ===</option>
                      <option value="과장">과장</option>
                      <option value="팀장">팀장</option>
                      <option value="대리">대리</option>
                      <option value="사원">사원</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      입사일<span className={c.necessary}>*</span>
                    </label>
                    <input
                      type="date"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            joinDate: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label>
                      재직상태<span className={c.necessary}>*</span>
                    </label>
                    <ul className={c.status}>
                      <li className={c.statusBtn}>
                        <input
                          type="radio"
                          name="employmentStatus"
                          value="재직중"
                          checked={registerInfo.state === "재직중"}
                          onChange={handleStatusChange}
                        />
                        재직중
                      </li>
                      <li className={c.statusBtn}>
                        <input
                          type="radio"
                          name="employmentStatus"
                          value="휴직중"
                          checked={registerInfo.state === "휴직중"}
                          onChange={handleStatusChange}
                        />
                        휴직중
                      </li>
                      <li className={c.statusBtn}>
                        <input
                          type="radio"
                          name="employmentStatus"
                          value="퇴직"
                          checked={registerInfo.state === "퇴직"}
                          onChange={handleStatusChange}
                        />
                        퇴직
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={c.input}>
                <div className={c.inputTitle}>
                  <span></span>
                  <p>연락처</p>
                </div>
                <div className={c.phone}>
                  <div>
                    <label>
                      휴대폰<span className={c.necessary}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="010-0000-0000"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            phone: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label>이메일</label>
                    <input
                      type="text"
                      placeholder="example@company.com"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            email: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={c.input}>
                <div className={c.inputTitle}>
                  <span></span>
                  <p>주소</p>
                </div>
                <div className={c.address}>
                  <div>
                    <label>우편번호</label>
                    <div className={c.postNumBox}>
                      <div className={c.postNum}>
                        {/* {addressInfo?.zonecode || "우편번호"} */}
                        {addressInfo?.postCode || "우편번호"}
                      </div>
                      <button className={c.addressBtn} onClick={openPostcode}>
                        <Search size={13} color="#ffffff" />
                        주소검색
                      </button>
                    </div>
                  </div>
                  <div>
                    <label>도로명주소</label>
                    <div className={c.auto}>
                      {/* {addressInfo?.rodaAddress || "주소검색 후 자동입력"} */}
                      {addressInfo?.address || "주소검색 후 자동입력"}
                    </div>
                  </div>
                  <div>
                    <label>상세주소</label>
                    <input
                      type="text"
                      placeholder="상세주소를 입력하세요"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            detailAddress: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={c.input}>
                <div className={c.inputTitle}>
                  <span></span>
                  <p>비상연락처</p>
                </div>
                <div className={c.emergency}>
                  <div>
                    <label>성명</label>
                    <input
                      type="text"
                      placeholder="비상연락자 성명"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            emergencyName: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label>관계</label>
                    <select
                      name=""
                      id=""
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            emergencyRelation: e.target.value,
                          };
                        });
                      }}
                    >
                      <option value="관계선택">관계선택</option>
                      <option value="부">부</option>
                      <option value="모">모</option>
                      <option value="조부">조부</option>
                      <option value="조모">조모</option>
                    </select>
                  </div>
                  <div>
                    <label>연락처</label>
                    <input
                      type="text"
                      placeholder="010-0000-0000"
                      onChange={(e) => {
                        setRegisterInfo((prev) => {
                          return {
                            ...prev,
                            emergencyPhone: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={c.modalFooter}>
              <p>
                <span className={c.necessary}>*</span>필수 입력 항목입니다.
              </p>
              <div className={c.btnBox}>
                <button className={c.cancelBtn} onClick={closeModal}>
                  <X size={14} color="#6b7280" />
                  취소
                </button>
                <button
                  className={c.saveBtn}
                  onClick={async () => {
                    await 사원등록하기();
                    // await closeModal();
                  }}
                >
                  <Save size={14} color="#ffffff" />
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
