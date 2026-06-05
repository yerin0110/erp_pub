'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { Calendar, CalendarCheck, CalendarPlus, Clock, HeartPulse, Info, MoonStar, ShieldCheck, Star, Sun } from 'lucide-react';

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
                        location={['근태관리', '휴가관리', '휴가일수신청']} 
                        title="휴가일수신청" 
                        subTitle="휴가 종류와 기간을 선택하여 신청합니다."
                        // downloadBtnImg="/images/Download.png"
                        // downloadBtnText="PDF 다운로드"
                        // addBtnImg="/images/Save.png"
                        // addBtnText="설정저장"
                    />

                    <div className={c.state}>
                        <div className={c.total}>
                            <span>총 부여일수</span>
                            <p>14일</p>
                        </div>
                        <div className={c.use}>
                            <span>사용일수</span>
                            <p>11일</p>
                        </div>
                        <div className={c.remain}>
                            <span>잔여일수</span>
                            <p>3일</p>
                        </div>
                        <div className={c.wait}>
                            <span>승인대기</span>
                            <p>1건</p>
                        </div>
                        <div className={c.transfer}>
                            <span>이월일수</span>
                            <p>0일</p>
                        </div>
                    </div>

                    <div className={c.apply}>
                        <div className={c.applyBox}>
                            <div className={c.applyTitle}>
                                <div className={c.titleBox}>
                                    <CalendarPlus size={15} color="#1b3a6b" />
                                    휴가신청
                                </div>
                                <p><span className={c.necessary}>*</span>필수항목</p>
                            </div>
                            <div className={c.breakApply}>
                                <div className={c.applyInfo}>
                                    <label>신청자 정보</label>
                                    <div className={c.member}>
                                        <div className={c.icon}>박</div>
                                        <div className={c.memberInfo}>
                                            <p className={c.name}>박민준</p>
                                            <div>
                                                개발팀 · 대리
                                                <span></span>
                                                <p className={c.num}>EMP-003</p>
                                            </div>
                                        </div>
                                        <div className={c.remainDay}>
                                            <CalendarCheck size={12} color="#16a34a" />
                                            잔여 3일
                                        </div>
                                    </div>
                                </div>

                                <div className={c.line}></div>

                                <div className={c.applyInfo}>
                                    <label>휴가 종류<span className={c.necessary}>*</span></label>
                                    <div className={c.typeBox}>
                                        <button className={c.dayoff}>
                                            <CalendarCheck size={13} color="#ffffff" />연차
                                        </button>
                                        <button className={c.halfoff}>
                                            <Sun size={13} color="#0284c7" />오전반차
                                        </button>
                                        <button className={c.halfoff}>
                                            <MoonStar size={13} color="#0284c7" />오후반차
                                        </button>
                                        <button className={c.special}>
                                            <Star size={13} color="#ca8a04" />특별휴가
                                        </button>
                                        <button className={c.sick}>
                                            <HeartPulse size={13} color="#dc2626" />병가
                                        </button>
                                        <button className={c.official}>
                                            <ShieldCheck size={13} color="#6b7280" />공가
                                        </button>
                                    </div>
                                    <div className={c.notice}>
                                        <Info size={13} color="#2563eb" />
                                        <p className={c.choice}>연차 선택됨</p>
                                        <span></span>
                                        <p>1일 차감 / 잔여 3일</p>
                                    </div>
                                </div>

                                <div className={c.line}></div>

                                <div className={c.applyInfo}>
                                    <label>휴가 기간<span className={c.necessary}>*</span></label>

                                </div>
                            </div>
                        </div>

                        <div className={c.applyContent}>
                            <div className={c.calendarBox}>
                                <div className={c.applyTitle}>
                                    <div className={c.titleBox}>
                                        <Calendar size={15} color="#1b3a6b" />
                                        2025년 7월
                                    </div>
                                    
                                </div>
                                <div className={c.calendar}>
                                    달력이지롱
                                </div>
                            </div>

                            <div className={c.historyBox}>
                                <div className={c.applyTitle}>
                                    <div className={c.titleBox}>
                                        <Clock size={15} color="#1b3a6b" />
                                        나의 신청 이력
                                    </div>
                                    
                                </div>
                                <div className={c.history}>
                                    신청이력이지롱
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}