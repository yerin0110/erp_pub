'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { Calendar, CalendarCheck, Search } from 'lucide-react';
import Table from '@/component/common/Table';

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
                                <span className={c.type6}></span>결군
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
                            <div className={c.tableSearch}>
                                <div className={c.totalWork}>총 근무일{10}일</div>
                                <div className={c.targetMember}>대상 인원 {5}명</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}