"use client";

import { useState } from "react";
import c from "./page.module.css";
import NavHome from "@/component/common/NavHome";
import baseApi from "@/api/baseApi";

export default function Page() {
  // 회원가입
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    name: "",
    employeeNo: "",
    departmentName: "",
    positionName: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const 회원가입하기 = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await baseApi.post(
        "/api/v1/employees/joinErp",
        {
          firstName: signupInfo.firstName,
          name: signupInfo.name,
          employeeNo: signupInfo.employeeNo,
          departmentName: signupInfo.team,
          positionName: signupInfo.rank,
          email: signupInfo.email,
          password: signupInfo.password,
          checkPassword: signupInfo.passwordCheck,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (e) {
    } finally {
    }
  };

  return (
    <div className={c.wrap}>
      <NavHome />

      <div className={c.continer}>
        <div className={c.content}>
          <div className={c.contentBox}>
            <div className={c.intro1}>
              <div className={c.shield}>
                <img src="/images/Shield Check.png" alt="" />
                Enterprise HR Solution
              </div>
              <div className={c.introTitle}>
                <h2>
                  HRMaster와 함께
                  <br />
                  <span>인사관리를 혁신하세요</span>
                </h2>
                <p>
                  지금 가입하고 강력한
                  <br />
                  인사관리 도구를 경험해보세요.
                </p>
              </div>
            </div>

            <div className={c.intro2}>
              <div className={c.introduce}>
                <div className={c.imgBox}>
                  <img src="/images/Circle Check.png" alt="" />
                </div>
                <p>무제한 직원 등록 및 관리</p>
              </div>
              <div className={c.introduce}>
                <div className={c.imgBox}>
                  <img src="/images/Circle Check.png" alt="" />
                </div>
                <p>자동화된 급여 계산 및 신고</p>
              </div>
              <div className={c.introduce}>
                <div className={c.imgBox}>
                  <img src="/images/Circle Check.png" alt="" />
                </div>
                <p>실시간 근태 현황 모니터링</p>
              </div>
              <div className={c.introduce}>
                <div className={c.imgBox}>
                  <img src="/images/Circle Check.png" alt="" />
                </div>
                <p>강력한 보안 및 권한 관리</p>
              </div>
            </div>

            <div className={c.intro3}>
              <div className={c.introduceText}>
                <img src="/images/Gift.png" alt="" />
                <p>30일 무료 체험 제공</p>
              </div>
            </div>
          </div>
        </div>

        <div className={c.login}>
          <div className={c.signupBox}>
            <div className={c.loginText}>
              <p>회원가입</p>
              <span>계정을 만들어 인사관리를 시작하세요</span>
            </div>

            <div className={c.signupInputBox}>
              <div className={c.loginInput}>
                <label>성</label>
                <div className={c.inputBox}>
                  <input
                    type="text"
                    placeholder="성"
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          firstName: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <div className={c.loginInput}>
                <label>이름</label>
                <div className={c.inputBox}>
                  <input
                    type="text"
                    placeholder="이름"
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          name: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <div className={c.loginInput}>
                <label>사번</label>
                <div className={c.inputBox}>
                  <img src="/images/Id Card.png" alt="" />
                  <input
                    type="text"
                    placeholder="EMP-0001"
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          employeeNo: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <div className={c.loginInput}>
                <label>부서</label>
                <div className={c.inputBox}>
                  <img src="/images/Building 2.png" alt="" />
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          team: e.target.value,
                        };
                      });
                    }}
                  >
                    <option value="선택">== 선택 ==</option>
                    <option value="인사팀">인사팀</option>
                    <option value="경영지원본부">경영지원본부</option>
                    <option value="IT본부">IT본부</option>
                    <option value="영업본부">영업본부</option>
                  </select>
                </div>
              </div>
              <div className={c.loginInput}>
                <label>직급</label>
                <div className={c.inputBox}>
                  <img src="/images/Briefcase.png" alt="" />
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          rank: e.target.value,
                        };
                      });
                    }}
                  >
                    <option value="선택">== 선택 ==</option>
                    <option value="과장">과장</option>
                    <option value="팀장">팀장</option>
                    <option value="대리">대리</option>
                    <option value="사원">사원</option>
                  </select>
                </div>
              </div>
              <div className={c.loginInput}>
                <label>회사 이메일</label>
                <div className={c.inputBox}>
                  <img src="/images/Mail.png" alt="" />
                  <input
                    type="text"
                    placeholder="company@example.com"
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          email: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <div className={c.loginInput}>
                <label>비밀번호</label>
                <div className={c.inputBox}>
                  <img src="/images/Lock.png" alt="" />
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          password: e.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </div>
              <div className={c.loginInput}>
                <label>비밀번호 확인</label>
                <div className={c.inputBox}>
                  <img src="/images/Lock.png" alt="" />
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    onChange={(e) => {
                      setSignupInfo((prev) => {
                        return {
                          ...prev,
                          passwordCheck: e.target.value,
                        };
                      });
                    }}
                  />
                  <img src="/images/Circle Check-1.png" alt="" />
                </div>
              </div>
              <div className={c.loginInput}>
                <div className={c.signupStatus}>
                  <img src="/images/Info-2.png" alt="" />
                  영문, 숫자, 특수문자 포함 8자리 이상
                </div>
              </div>
            </div>

            <div className={c.agreeBox}>
              <div className={c.agree}>
                <input type="checkbox" />
                <p>이용약관 및 개인정보처리방침에 동의합니다</p>
              </div>
              <span>내용보기</span>
            </div>

            <div className={c.btnBox}>
              <button
                className={c.loginBtn}
                onClick={async () => {
                  await 회원가입하기();
                }}
              >
                <img src="/images/User Plus.png" alt="" />
                회원가입
              </button>
            </div>
            <div className={c.signUp}>
              <label>이미 계정이 없으신가요?</label>
              <span>로그인하기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
