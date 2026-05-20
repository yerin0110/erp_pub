'use client';

import { useEffect, useState } from 'react';
import c from './page.module.css';
import baseApi from '@/api/baseApi';
import Nav from '@/component/common/Nav';

export default function page(){

    const [employees, setEmployees]=useState([]);

    useEffect(()=> {
        // 1. api 요청해서 받기
        const getEmployee=async()=> {
            const response=await baseApi.get('/api/v1/employees');
            console.log(response.data.data);

            // 2. useState에 넣기
            setEmployees(response.data.data);

            // 3. useState에 있는 데이터 렌더링 시키기


        }

        getEmployee();

    }, []);

    // const statusStyles = {
    //     '재직중': c.statusActive,
    //     '휴직중': c.statusLeave,
    //     '퇴사': c.statusRetire
    // };
    
    return(
        <div className={c.wrap}>

            <nav className={c.topBar}>
                <div className={c.topBarL}>
                    <div className={c.logo}>
                        <img src="/images/Briefcase Business.png" alt='' />
                        <p>인사관리시스템</p>
                    </div>
                    <ul className={c.topMenu}>
                        <li className={c.action}>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                </div>
                <div className={c.topBarR}>
                    <img src="/images/Bell.png" alt='' />
                    <span className={c.line1}></span>
                    <ul className={c.loginInfo}>
                        <div className={c.infoIcon}>홍</div>
                        <li className={c.name}>홍길동</li>
                        <span className={c.line2}></span>
                        <li className={c.team}>인사팀</li>
                    </ul>
                    <img src="/images/Log out.png" alt='' />
                </div>
            </nav>

            <div className={c.continer}>

                <header>
                    <div className={c.headerMenu}>
                        <ul>
                            <li className={c.menuTitle}>
                                <img src="/images/User.png" alt="" />
                                <p>인사정보</p>
                            </li>
                            <li className={c.menuClick}><span></span>인사정보등록</li>
                            <li><span></span>사원명수/인사기록카드</li>
                            <li><span></span>인사발령등록</li>
                        </ul>
                        <ul>
                            <li className={`${c.menuTitle} ${c.menuBorder}`}>
                                <img src="/images/Heart Handshake.png" alt="" />
                                <p>경조비관리</p>
                            </li>
                            <li><span></span>경조비신청</li>
                            <li><span></span>경조비신청 현황</li>
                        </ul>
                        <ul> 
                            <li className={`${c.menuTitle} ${c.menuBorder}`}>
                                <img src="/images/File Text.png" alt="" />
                                <p>증명서관리</p>
                            </li>
                            <li><span></span>증명서발급</li>
                        </ul>
                    </div>
                </header>

                <div className={c.main}>

                    <div className={c.section}>
                        <img src="/images/House.png" alt="" />
                        <span>&gt;</span>
                        <span>인사관리</span>
                        <span>&gt;</span>
                        <span>인사정보</span>
                        <span>&gt;</span>
                        <span className={c.now_section}>인사정보등록</span>
                    </div>
                    <div className={c.pageHeader}>
                        <div className={c.titleBox}>
                            <h3 className={c.title}>인사정보등록</h3>
                            <p className={c.subTitle}>직원의 인사정보를 등록하고 관리합니다.</p>
                        </div>
                        <div className={c.btnBox}>
                            <button className={c.downloadBtn}>
                                <img src="/images/Download.png" alt="" />
                                PDF 다운로드
                            </button>
                            <button className={c.addBtn}>
                                <img src="/images/Plus.png" alt="" />
                                신규 등록
                            </button>
                        </div>
                    </div>
                    <div className={c.searchBox}>
                        <div className={c.searchTitle}>
                            <img src="/images/Search.png" alt="" />
                            검색조건
                        </div>
                        <div className={c.search}>
                            <span>사원번호</span>
                            <input type="text" placeholder='전체' />
                            <span>부서</span>
                            <select name="" id="">
                                <option value="">인사팀</option>
                                <option value="">경영지원팀</option>
                                <option value="">개발팀</option>
                                <option value="">영업팀</option>
                            </select>
                            <span>직급</span>

                            <span>재직상태</span>

                        </div>
                    </div>
                    
                    <table className={c.empTable}>
                        <thead>
                            <tr>
                                <th className={c.number}>NO</th>
                                <th className={c.empNumber}>사원번호</th>
                                <th className={c.empName}>성명</th>
                                <th className={c.empTeam}>부서</th>
                                <th className={c.empRank}>직급</th>
                                <th className={c.empJoin}>입사일</th>
                                <th className={c.empPhone}>연락처</th>
                                <th className={c.empEmail}>이메일</th>
                                <th className={c.empStatus}>재직상태</th>
                                <th className={c.empEdit}>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((item, index)=> (
                                <tr key={item.employeeId}>
                                    <td>{index+1}</td>
                                    <td>{item.employeeNo}</td>
                                    <td className={c.empName}>{item.name}</td>
                                    <td>부서</td>
                                    <td>직급</td>
                                    <td>입사일</td>
                                    <td>연락처</td>
                                    <td>이메일</td>
                                    {/* <td><span className={statusStyles[item.status]}>재직중</span></td> */}
                                    <td><span className={c.statusActive}>재직중</span></td>
                                    <td><button className={c.edit_btn}>수정</button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className={c.tableFooter}>
                                <td colSpan={10}>
                                    <div className={c.tableFooterInner}>
                                        <div className={c.totalCount}>총 {employees.length}건</div>
                                        <div className={c.pageChange}>
                                            <button className={c.pageBtn}>&lt;</button>
                                            <button className={`${c.pageBtn} ${c.activePage}`}>1</button>
                                            <button className={c.pageBtn}>2</button>
                                            <button className={c.pageBtn}>3</button>
                                            <button className={c.pageBtn}>&gt;</button>
                                        </div>
                                        <div className={c.emptySpace}></div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        </div>
    )
}