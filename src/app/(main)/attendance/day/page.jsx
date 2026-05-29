'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { Calendar, CalendarCheck, FilePen, Search } from 'lucide-react';

export default function page(){
    
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
                        location={['근태관리', '근태관리', '일일근태등록']} 
                        title="일일근태등록" 
                        subTitle="날짜별 직원 근태 현황을 등록하고 수정합니다."
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Save.png"
                        addBtnText="일괄저장"
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
                            <div className={c.today}>
                                <CalendarCheck size={13} color="#2563eb" />
                                오늘
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
                            <div className={c.nameBox}>
                                <Search size={13} color="#9ca3af" />
                                <input type="text"
                                    placeholder='사원명 검색'
                                />
                            </div>
                        </div>

                        <div className={c.searhResult}>
                            <div className={c.total}>
                                <span></span>
                                전체 23명
                            </div>
                            <div className={c.work}>
                                <span></span>
                                출근 18
                            </div>
                            <div className={c.late}>
                                <span></span>
                                지각 2
                            </div>
                            <div className={c.absence}>
                                <span></span>
                                결근 1
                            </div>
                            <div className={c.dayoff}>
                                <span></span>
                                연차 2
                            </div>
                        </div>
                    </div>

                    <div className={c.attendanceBox}>
                        <div className={c.register}>
                            <div className={c.registerTitle}>
                                <div className={c.titleBox}>
                                    <FilePen size={16} color="#1b3a6b" />
                                    근태등록
                                </div>
                                <span>7월 1일</span>
                            </div>
                            .{c.registerBox}
                        </div>

                        <div className={c.listBox}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}