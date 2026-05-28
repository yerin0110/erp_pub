'use client';

import { useState } from 'react';
import c from './page.module.css';
import Nav from '@/component/common/Nav';
import baseApi from '@/api/baseApi';

export default function Page(){

    const [loginInfo, setLoginInfo]=useState();

    const goLogin=async()=>{
        const res=await baseApi.post('/api/v1/employees/login', loginInfo);
        
        localStorage.setItem('키 값', '넣을 값 ');
        const 로컬스토리지꺼낸데이터=localStorage.getItem('키 값');
    }
    
    return(
        <div className={c.wrap}>

            <Nav />

            <div className={c.continer}>
                <div className={c.content}>
                    <div className={c.contentBox}>
                        <div className={c.intro1}>
                            <div className={c.shield}>
                                <img src="/images/Shield Check.png" alt="" />
                                Enterprise HR Solution
                            </div>
                            <div className={c.introTitle}>
                                <h2>스마트한 인사관리의<br /><span>새로운 기준</span></h2>
                                <p>직원 채용부터 급여, 근태까지<br />하나의 플랫폼으로 관리하세요.</p>
                            </div>
                            <div className={c.introText}>
                                <div className={c.text}>
                                    <h3>2,400+</h3>
                                    <p>기업도입</p>
                                </div>
                                <span></span>
                                <div className={c.text}>
                                    <h3>98%</h3>
                                    <p>고객 만족도</p>
                                </div>
                                <span></span>
                                <div className={c.text}>
                                    <h3>15년</h3>
                                    <p>서비스 운영</p>
                                </div>
                            </div>
                        </div>

                        <div className={c.intro2}>
                            <div className={c.introduce}>
                                <div className={c.imgBox}>
                                    <img src="/images/Users.png" alt="" />
                                </div>
                                <div className={c.introduceText}>
                                    <p>인사관리</p>
                                    <span>조직도, 인사발령, 직원 정보 통합 관리</span>
                                </div>
                            </div>
                            <div className={c.introduce}>
                                <div className={c.imgBox}>
                                    <img src="/images/Banknote-blue.png" alt="" />
                                </div>
                                <div className={c.introduceText}>
                                    <p>급여관리</p>
                                    <span>자동 급여 계산, 세금 신고, 명세서 발송</span>
                                </div>
                            </div>
                            <div className={c.introduce}>
                                <div className={c.imgBox}>
                                    <img src="/images/Clock-blue.png" alt="" />
                                </div>
                                <div className={c.introduceText}>
                                    <p>근태관리</p>
                                    <span>출퇴근, 휴가, 초과근무 실시간 모니터링</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={c.login}>
                    <div className={c.loginBox}>
                        <div className={c.loginText}>
                            <p>로그인</p>
                            <span>계정에 로그인하여 업무를 시작하세요</span>
                        </div>

                        <div className={c.loginInputBox}>
                            <div className={c.loginInput}>
                                <label>이메일</label>
                                <div className={c.inputBox}>
                                    <img src="/images/Mail.png" alt="" />
                                    <input type="text"
                                        placeholder='이메일 주소를 입력하세요'
                                        onChange={(e)=> setLoginInfo(prev=> ({...prev, email: e.target.value}))}
                                    />
                                </div>
                            </div>
                            <div className={c.loginInput}>
                                <label>비밀번호</label>
                                <div className={c.inputBox}>
                                    <img src="/images/Lock.png" alt="" />
                                    <input type="password"
                                        placeholder='비밀번호를 입력하세요'
                                        onChange={(e)=> setLoginInfo(prev=> ({...prev, password: e.target.value}))}
                                    />
                                </div>
                            </div>
                            <div className={c.loginInput}>
                                <div className={c.find}>
                                    <div className={c.loginStatus}>
                                        <input type="checkbox" />
                                        <label>로그인 상태 유지</label>
                                    </div>
                                    <span>비밀번호 찾기</span>
                                </div>
                            </div>
                        </div>

                        <div className={c.btnBox}>
                            <button className={c.loginBtn} onClick={()=> goLogin()}>
                                <img src="/images/Log In.png" alt="" />
                                로그인
                            </button>
                            <div className={c.orBox}>
                                <span></span>또는<span></span>
                            </div>
                            <button className={c.kakaoLoginBtn}>
                                <img src="/images/kakao_login_large_wide 1.png" alt="" />
                            </button>
                        </div>
                        <div className={c.signUp}>
                            <label>계정이 없으신가요?</label>
                            <span>회원가입 신청</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}