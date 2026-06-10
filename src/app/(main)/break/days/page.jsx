'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { Calendar, Copy, Info, Layers, Plus, Star, TrendingUp } from 'lucide-react';
import BreakRow from '@/component/common/BreakTable';

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
                        location={['근태관리', '휴가관리', '휴가일수설정']} 
                        title="휴가일수설정" 
                        subTitle="연도별 휴가 정책 및 직급별 기준 일수를 설정합니다."
                        // downloadBtnImg="/images/Download.png"
                        // downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Save.png"
                        addBtnText="설정저장"
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
                            <div className={c.standard}>
                                <Info size={10} color="#2563eb" />
                                회계연도 기준 &#40;1월~12월&#41;
                            </div>
                        </div>
                        <div className={c.copyBtn}>
                            <Copy size={13} color="#374151" /> 전년도 설정 복사
                        </div>
                    </div>

                    <div className={c.break}>
                        <div className={c.rank}>
                            <div className={c.breakTitle}>
                                <div className={c.titleBox}>
                                    <Layers size={15} color="#1b3a6b" /> 직급별 기준 휴가일수
                                </div>
                                <div className={c.rowPlusBtn}>
                                    <Plus size={12} color="#2563eb" /> 행 추가
                                </div>
                            </div>

                            <table className={c.rankBreak}>
                                <thead>
                                    <tr>
                                        <th>직급</th>
                                        <th>기준 일수</th>
                                        <th>최대 이월</th>
                                        <th>반차 허용</th>
                                        <th>비고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <BreakRow 
                                        rank="임원" 
                                        standardDays={25} 
                                        maxCarryOver={10} 
                                        halfDay={true} 
                                        note="최고 직급 기준" 
                                    />
                                    <BreakRow 
                                        rank="부장" 
                                        standardDays={21} 
                                        maxCarryOver={10} 
                                        halfDay={true} 
                                        note="-" 
                                    />
                                    <BreakRow 
                                        rank="차장" 
                                        standardDays={18} 
                                        maxCarryOver={5} 
                                        halfDay={true} 
                                        note="-" 
                                    />
                                    <BreakRow 
                                        rank="과장" 
                                        standardDays={15} 
                                        maxCarryOver={5} 
                                        halfDay={true} 
                                        note="-" 
                                    />
                                    <BreakRow 
                                        rank="대리" 
                                        standardDays={12} 
                                        maxCarryOver={5} 
                                        halfDay={true} 
                                        note="-" 
                                    />
                                    <BreakRow 
                                        rank="사원" 
                                        standardDays={11} 
                                        maxCarryOver={0} 
                                        halfDay={false} 
                                        note="신입 기준" 
                                    />
                                </tbody>
                            </table>
                        </div>

                        <div className={c.specialBreack}>
                            <div className={c.special}>
                                <div className={c.specialTitle}>
                                    <Star size={15} color="#1b3a6b" /> 특별 휴가 정책
                                </div>
                                <div className={`${c.policy} ${c.daysBox}`}>
                                    <div className={c.box}>
                                        <label>결혼 휴가</label>
                                        <div className={c.days}>5<span>일</span></div>
                                    </div>
                                    <div className={c.box}>
                                        <label>출산 휴가(여)</label>
                                        <div className={c.days}>90<span>일</span></div>
                                    </div>
                                    <div className={c.box}>
                                        <label>배우자 출산 휴가</label>
                                        <div className={c.days}>10<span>일</span></div>
                                    </div>
                                    <div className={c.box}>
                                        <label>부모 사망</label>
                                        <div className={c.days}>5<span>일</span></div>
                                    </div>
                                    <div className={c.box}>
                                        <label>배우자/자녀 사망</label>
                                        <div className={c.days}>3<span>일</span></div>
                                    </div>
                                    <div className={c.box}>
                                        <label>형제/자매 사망</label>
                                        <div className={c.days}>1<span>일</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className={c.breakPlus}>
                                <div className={c.specialTitle}>
                                    <TrendingUp size={15} color="#1b3a6b" /> 근속 가산 일수
                                </div>
                                <div className={`${c.policy} ${c.plusBox}`}>
                                    <div className={c.noticeBox}>
                                        <Info size={13} color="#d97706" />
                                        근속 2년 초과 시 매 2년마다 1일씩 최대 25일까지 가산됩니다.
                                    </div>

                                    <div className={c.infoHeader}>
                                        <p>근속 연수</p>
                                        <p>가산 일수</p>
                                        <p>최종 일수 (사원 기준)</p>
                                    </div>

                                    <div className={c.info}>
                                        <p>1년 미만</p>
                                        <p className={c.noPlus}>+0일</p>
                                        <p className={c.total}>11일</p>
                                    </div>
                                    <div className={c.info}>
                                        <p>1년 이상 ~ 3년 미만</p>
                                        <p className={c.plus}>+1일</p>
                                        <p className={c.total}>12일</p>
                                    </div>
                                    <div className={c.info}>
                                        <p>3년 이상 ~ 5년 미만</p>
                                        <p className={c.plus}>+2일</p>
                                        <p className={c.total}>13일</p>
                                    </div>
                                    <div className={c.info}>
                                        <p>5년 이상 ~ 10년 미만</p>
                                        <p className={c.plus}>+3일</p>
                                        <p className={c.total}>14일</p>
                                    </div>
                                    <div className={c.info}>
                                        <p>10년 이상</p>
                                        <p className={c.plus}>+5일</p>
                                        <p className={c.total}>16일</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}