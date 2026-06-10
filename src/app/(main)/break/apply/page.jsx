'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import Calendar from '@/component/common/Calendar';
import PageTitle from '@/component/common/PageTitle';
import { CalendarCheck, CalendarPlus, ChevronLeft, ChevronRight, Clock, HeartPulse, Info, MoonStar, Paperclip, SendHorizontal, ShieldCheck, Star, Sun, Upload, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import StateCard from '@/component/common/StateCard';

export default function Page(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

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
                        <StateCard 
                            c={c} title="총 부여일수" value="14일" 
                            bg="#1b3a6b" titleColor="#93c5fd"
                            valueColor="white" borderColor='none'
                        />
                        <StateCard 
                            c={c} title="사용일수" value="11일" 
                            bg="white" titleColor="#9ca3af" valueColor="#374151" 
                            borderColor="#e5e7eb"
                        />
                        <StateCard 
                            c={c} title="잔여일수" value="3일" 
                            bg="#f0fdf4" titleColor="#16a34a" valueColor="#15803d"  
                            borderColor="#bbf7d0"
                        />
                        <StateCard 
                            c={c} title="승인대기" value="1건" 
                            bg="#fffbeb" titleColor="#d97706" valueColor="#92400e" 
                            borderColor="#fde68a"
                        />
                        <StateCard 
                            c={c} title="이월일수" value="0일" 
                            bg="#eff6ff" titleColor="#3b82f6" valueColor="#1e40af" 
                            borderColor="#bfdbfe"
                        />
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
                                    <div className={c.dateBox}>
                                        <div className={c.date}>
                                            <label className={c.start}>시작일</label>
                                            <input type="date" />
                                        </div>
                                        ~
                                        <div className={c.date}>
                                            <label className={c.start}>종료일</label>
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className={c.notice}>
                                        <Clock size={13} color="#2563eb" />
                                        <p className={c.choiceDay}>신청 일수: 1일 (평일 기준)</p>
                                    </div>
                                </div>

                                <div className={c.line}></div>

                                <div className={c.applyInfo}>
                                    <label>업무 대리자 <span className={c.optional}>선택사항</span></label>
                                    <div className={c.agent}>
                                        <input type="text" 
                                            placeholder='대리자를 선택하세요'
                                        />
                                        <UserRound size={13} color="#9ca3af" />
                                    </div>
                                </div>

                                <div className={c.line}></div>

                                <div className={c.applyInfo}>
                                    <label>휴가 사유 <span className={c.necessary}>*</span></label>
                                    <textarea name="" id="" placeholder='휴가 사유를 입력하세요'></textarea>
                                </div>

                                <div className={c.applyInfo}>
                                    <label>첨부파일 <span className={c.optional}>선택사항 · 최대 3개</span></label>
                                    <div className={c.fileBox}>
                                        <Paperclip size={14} color="#9ca3af" />
                                        파일을 끌어다 놓거나
                                        <button className={c.choiceBtn}>
                                            <Upload size={11} color="#374151" /> 선택
                                        </button>
                                    </div>
                                </div>

                                <div className={c.line}></div>

                                <div className={c.btnBox}>
                                    <button className={c.cancelBtn}>
                                        <X size={13} color="#6b7280" />취소
                                    </button>
                                    <button className={c.applyBtn}>
                                        <SendHorizontal size={13} color="#ffffff" />신청하기
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={c.applyContent}>
                            <div className={c.calendarBox}>
                                <div className={c.applyTitle}>
                                    <div className={c.titleBox}>
                                        <CalendarPlus size={15} color="#1b3a6b" />
                                        휴가신청
                                    </div>
                                    <div className={c.arrowBox}>
                                        <button className={c.prevBtn} onClick={handlePrevMonth}>
                                            <ChevronLeft size={12} color="#374151" />
                                        </button>
                                        <button className={c.nextBtn} onClick={handleNextMonth}>
                                            <ChevronRight size={12} color="#374151" />
                                        </button>
                                    </div>
                                </div>
                                <div className={c.calendar}>
                                    <Calendar
                                        currentDate={currentDate} 
                                        selectedDate={selectedDate}
                                        onDateSelect={setSelectedDate}
                                    />
                                </div>
                            </div>

                            <div className={c.historyBox}>
                                <div className={c.applyTitle}>
                                    <div className={c.titleBox}>
                                        <Clock size={15} color="#1b3a6b" />
                                        나의 신청 이력
                                    </div>
                                    <div className={c.tableLenght}>총 {5}건</div>
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