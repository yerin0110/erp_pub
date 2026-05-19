import c from './page.module.css';

export default function page(){
    
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
                            <li><span></span>사원영수/인사기록카드</li>
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
                            <tr>
                                <td>1</td>
                                <td>EMP-001</td>
                                <td className={c.empName}>김철수</td>
                                <td>인사팀</td>
                                <td>팀장</td>
                                <td>2019.03.02</td>
                                <td>010-1234-5678</td>
                                <td>kim@company.com</td>
                                <td><span className={c.statusActive}>재직중</span></td>
                                <td><button className={c.edit_btn}>수정</button></td>
                            </tr>
                            <tr>
                                <td>NO</td>
                                <td>사원번호</td>
                                <td className={c.empName}>성명</td>
                                <td>부서</td>
                                <td>직급</td>
                                <td>입사일</td>
                                <td>연락처</td>
                                <td>이메일</td>
                                <td><span className={c.statusLeave}>휴직중</span></td>
                                <td><button className={c.edit_btn}>수정</button></td>
                            </tr>
                            <tr>
                                <td>NO</td>
                                <td>사원번호</td>
                                <td className={c.empName}>성명</td>
                                <td>부서</td>
                                <td>직급</td>
                                <td>입사일</td>
                                <td>연락처</td>
                                <td>이메일</td>
                                <td><span className={c.statusActive}>재직중</span></td>
                                <td><button className={c.edit_btn}>수정</button></td>
                            </tr>
                            <tr>
                                <td>NO</td>
                                <td>사원번호</td>
                                <td className={c.empName}>성명</td>
                                <td>부서</td>
                                <td>직급</td>
                                <td>입사일</td>
                                <td>연락처</td>
                                <td>이메일</td>
                                <td><span className={c.statusActive}>재직중</span></td>
                                <td><button className={c.edit_btn}>수정</button></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className={c.tableFooterRow}>
                                <td colSpan={10}>
                                    <div className={c.tableFooterInner}>
                                        <div className={c.totalCount}>총 4건</div>
                                        
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