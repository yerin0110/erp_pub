'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { Calendar, Search, Table } from 'lucide-react';

export default function Page(){
    
    return(
        <div className={c.wrap}>

            <Nav />

            <div className={c.continer}>

                <Aside 
                    dummy={
                        [
                            {
                                titleInfo: { iconPath: '/images/Clock-blue.png', titleName: '근태관리' },
                                submenuList: ['일일근태등록', '월근태현황']
                            },
                            {
                                titleInfo: { iconPath: '/images/Plane.png', titleName: '출장관리' },
                                submenuList: ['출장신청', '출장정산', '출장사용현황']
                            },
                            {
                                titleInfo: { iconPath: '/images/Calendar.png', titleName: '휴가관리' },
                                submenuList: ['휴가일수설정', '휴가일수계산', '휴가일수신청', '휴가사용현황']
                            }
                        ]
                    }
                />

                <div className={c.main}>

                    <PageTitle 
                        location={['근태관리', '근태관리', '월근태현황']} 
                        title="월근태현황" 
                        subTitle="부서별·직원별 월간 근태 현황을 조회하고 관리합니다."
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Printer.png"
                        addBtnText="인쇄"
                    />

                    <div className={c.search}>
                        <div className={c.searchBox}>
                            <div className={c.dateBox}>
                                <button className={c.beforeBtn}>&lt;</button>
                                <div className={c.dateInput}>
                                    <Calendar size={13} color="#1b3a6b" />
                                    <input type="text" />
                                </div>
                                <button className={c.nextBtn}>&gt;</button>
                            </div>
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
                            <button className={c.searchBtn}>
                                <Search size={13} color="#ffffff" />조회
                            </button>
                        </div>
                        <div className={c.type}>
                            <div>
                                <span className={c.type1}></span>출근
                            </div>
                            <div>
                                <span className={c.type2}></span>지각
                            </div>
                            <div>
                                <span className={c.type3}></span>연차
                            </div>
                            <div>
                                <span className={c.type4}></span>반차
                            </div>
                            <div>
                                <span className={c.type5}></span>출장
                            </div>
                            <div>
                                <span className={c.type6}></span>결근
                            </div>
                            <div>
                                <span className={c.type7}></span>휴일
                            </div>
                        </div>
                    </div>
                    
                    <div className={c.table}>
                        <div className={c.tableTitleBox}>
                            <div className={c.tableTitle}>
                                <Table size={14} color="#1b3a6b" />
                                2025년 7월 근태현황
                            </div>
                            <div className={c.total}>
                                <div className={c.totalWork}><span></span>총 근무일{10}일</div>
                                <span></span>
                                <div className={c.targetMember}><span></span>대상 인원 {5}명</div>
                            </div>
                        </div>
                        
                        <table className={c.workTable}>
                            <thead>
                                <tr>
                                    <th className={c.thName}>성명</th>
                                    <th className={c.thTeam}>부서</th>
                                    <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th>
                                    <th>6</th> <th>7</th> <th>8</th> <th>9</th> <th>10</th>
                                    <th>11</th> <th>12</th> <th>13</th> <th>14</th> <th>15</th>
                                    <th>16</th> <th>17</th> <th>18</th> <th>19</th> <th>20</th>
                                    <th>21</th> <th>22</th> <th>23</th> <th>24</th> <th>25</th>
                                    <th>26</th> <th>27</th> <th>28</th> <th>29</th> <th>30</th>
                                    <th>31</th>
                                    <th className={c.thWork}>출근</th>
                                    <th className={c.thLate}>지각</th>
                                    <th className={c.thDayoff}>연차</th>
                                    <th className={c.thAbsence}>결근</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={c.name}>김철수</td>
                                    <td className={c.team}>인사팀</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td>
                                    <td className={c.work}>20</td>
                                    <td className={c.late}>1</td>
                                    <td className={c.dayoff}>1</td>
                                    <td className={c.absence}>0</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className={c.name}>이영희</td>
                                    <td className={c.team}>경영지원팀</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td> <td>출</td> <td>출</td> <td>출</td> <td>출</td>
                                    <td>출</td>
                                    <td className={c.work}>19</td>
                                    <td className={c.late}>1</td>
                                    <td className={c.dayoff}>2</td>
                                    <td className={c.absence}>0</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}