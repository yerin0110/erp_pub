'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import Table from '@/component/common/Table';

export default function page(){
    
    return(
        <div className={c.wrap}>

            <Nav />

            <div className={c.continer}>

                <Aside 
                    dummy={
                        [
                            {
                                titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
                                submenuList: ['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
                            },
                            {
                                titleInfo: { iconPath: '/images/Heart Handshake.png', titleName: '경조비관리' },
                                submenuList: ['경조비신청', '경조비신청현황']
                            },
                            {
                                titleInfo: { iconPath: '/images/File Text.png', titleName: '증명서관리' },
                                submenuList: ['증명서발급']
                            }
                        ]
                    }
                />

                <div className={c.main}>

                    <PageTitle 
                        location={['인사관리', '인사정보', '인사발령등록']} 
                        title="인사발령등록" 
                        subTitle="사원의 부서·직급·직책·발령 정보를 등록하고 이력을 관리합니다"
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Plus.png"
                        addBtnText="발령등록"
                    />
                    
                    <div className={c.searchBox}>
                        <div className={c.searchTitle}>
                            <img src="/images/Search.png" alt="" />
                            검색조건
                        </div>
                        <div className={c.search}>
                            <div>
                                <span className={c.condition}>사원검색</span>
                                <input type="text" placeholder='사원번호 또는 성명' />
                                <div className={c.imgBox}><img src="/images/Search-white.png" alt="" /></div>
                            </div>
                            
                            <div>
                                <span className={c.condition}>발령유형</span>
                                <select name="" id="">
                                    <option value="">인사팀</option>
                                    <option value="">경영지원팀</option>
                                    <option value="">개발팀</option>
                                    <option value="">영업팀</option>
                                </select>
                            </div>

                            <div className={c.searchDate}>
                                <span className={c.condition}>발령일</span>
                                <input type="date" />
                                <span>~</span>
                                <input type="date" />
                            </div>

                            <div className={c.searchBtnBox}>
                                <button className={c.searchBtn}>
                                    <img src="/images/Search-white.png" alt="" />
                                    조회
                                </button>
                                <button className={c.resetBtn}>
                                    <img src="/images/Rotate Ccw.png" alt="" />
                                    초기화
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={c.inputForm}>
                        <div className={c.formHeader}>
                            <div className={c.formTitle}>
                                <img src="/images/File Pen.png" alt="" />
                                발령 입력 폼
                            </div>
                            <div className={c.userInfo}>
                                <img src="/images/User Round.png" alt="" />
                                EMP-002·이영희·경영지원팀·과장
                            </div>
                        </div>

                        <div className={c.formInput}>
                            <div className={c.formInputBox}>
                                <div className={c.formType}>
                                    <p>발령유형<b>*</b></p>
                                    <div>
                                        <button className={c.click}>승진</button>
                                        <button>전보</button>
                                        <button>겸직</button>
                                        <button>기타</button>
                                    </div>
                                </div>
                                <div className={c.formDate}>
                                    <p>발령일<b>*</b></p>
                                    <input type="date" />
                                </div>
                                <div className={c.formNum}>
                                    <p>발령번호</p>
                                    <div className={c.formNumAuto}>자동생성</div>
                                </div>
                                <div className={c.formReason}>
                                    <p>발령사유</p>
                                    <input type="text"
                                        placeholder='발령 사유를 입력하세요'
                                    />
                                </div>
                            </div>

                            <div className={c.formEdit}>
                                <div className={c.formEditBefore}>
                                    <div className={c.beforeTitle}>
                                        <p>발령 전</p>
                                        <div className={`${c.hr} ${c.hrBefore}`}></div>
                                    </div>
                                    <div className={c.beforeInput}>
                                        <div>
                                            <span>부서</span>
                                            <div>경영지원팀 <img src="/images/lock.png" alt="" /></div>
                                        </div>
                                        <div>
                                            <span>직급</span>
                                            <div>과장 <img src="/images/lock.png" alt="" /></div>
                                        </div>
                                        <div>
                                            <span>직책</span>
                                            <div>팀원 <img src="/images/lock.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/Arrow Right.png" alt="" />
                                <div className={c.formEditAfter}>
                                    <div className={c.afterTitle}>
                                        <p>발령 후</p>
                                        <div className={`${c.hr} ${c.hrAfter}`}></div>
                                    </div>
                                    <div className={c.afterInput}>
                                        <div>
                                            <span>부서</span>
                                            <select name="" id="">
                                                <option value="인사팀">인사팀</option>
                                                <option value="경영지원팀">경영지원팀</option>
                                                <option value="개발팀">개발팀</option>
                                                <option value="영업팀">영업팀</option>
                                            </select>
                                        </div>
                                        <div>
                                            <span>직급</span>
                                            <select name="" id="">
                                                <option value="팀장">팀장</option>
                                                <option value="과장">과장</option>
                                                <option value="대리">대리</option>
                                                <option value="사원">사원</option>
                                            </select>
                                        </div>
                                        <div>
                                            <span>직책</span>
                                            <select name="" id="">
                                                <option value="리더">리더</option>
                                                <option value="팀원">팀원</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={c.note}>
                                <div className={c.noteTitle}>비고</div>
                                <textarea name="" id="" 
                                    placeholder='발령 관련 추가 사항을 입력하세요.'></textarea>
                                <div className={c.noteBtnBox}>
                                    <button className={c.cancleBtn}>
                                        <img src="/images/X.png" alt="" />
                                        취소
                                    </button>
                                    <button className={c.saveBtn}>
                                        <img src="/images/Save.png" alt="" />
                                        저장
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={c.table}>
                        <div className={c.tableTitleBox}>
                            <div className={c.tableTitle}>
                                <img src="/images/Clock.png" alt="" />
                                발령 이력
                            </div>
                            <div className={c.tableLenght}>총 {10}건</div>
                        </div>
                        {/* <Table 
                            columns={[
                                'NO',
                                '발령번호',
                                '사원번호',
                                '성명',
                                '발령유형',
                                '발령전 부서/직급',
                                '발령후 부서/직급',
                                '발령일',
                                '등록자',
                                '관리'
                            ]}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}