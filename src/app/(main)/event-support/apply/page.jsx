'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import Table from '@/component/common/Table';
import { Calendar, Check, Gift, Hash, X } from 'lucide-react';

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
                        location={['인사관리', '경조비관리', '경조비신청']} 
                        title="경조비신청" 
                        subTitle="경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다."
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Plus.png"
                        addBtnText="신규신청"
                    />
                    
                    <div className={c.applyBox}>
                        <div className={c.applyTitle}>
                            <div className={c.title}>
                                <img src="/images/Heart Handshake-navy.png" alt="" />
                                경조비 신청 입력
                            </div>
                            <div className={c.necessaryInput}>
                                <span className={c.necessary}>*</span>
                                <p>필수 입력 항목</p>
                            </div>
                        </div>

                        <div className={c.applyContent}>
                            <div className={c.applyInfoBox}>
                                <div className={c.infoTitle}>
                                    <span></span>
                                    신청자 정보
                                </div>
                                <div className={c.infoUser}>
                                    <div className={c.applyInfo}>
                                        <span>사원번호</span>
                                        <div className={`${c.applyLock} ${c.applyNumLock}`}>
                                            EMP-002
                                            <img src="/images/Lock.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>성명</span>
                                        <div className={`${c.applyLock} ${c.applyNameLock}`}>
                                            이영희
                                            <img src="/images/Lock.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>부서</span>
                                        <div className={`${c.applyLock} ${c.applyTeamLock}`}>
                                            경영지원팀
                                            <img src="/images/Lock.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>직급</span>
                                        <div className={`${c.applyLock} ${c.applyRankLock}`}>
                                            과장
                                            <img src="/images/Lock.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>신청일</span>
                                        <div className={`${c.applyLock} ${c.applyDateLock}`}>
                                            2025.07.01
                                            <img src="/images/Lock.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={c.applyInfoBox}>
                                <div className={c.infoTitle}>
                                    <span></span>
                                    <div>
                                        경조 구분
                                        <p className={c.necessary}>*</p>
                                    </div>
                                </div>
                                <div className={c.eventChoiceBox}>
                                    <button className={`${c.eventChoiceBtn} ${c.choice}`}>
                                        <img src="/images/Heart.png" alt="" />
                                        본인결혼
                                    </button>
                                    <button className={c.eventChoiceBtn}>
                                        <img src="/images/Heart-gray.png" alt="" />
                                        자녀결혼
                                    </button>
                                    <button className={c.eventChoiceBtn}>
                                        <img src="/images/Baby.png" alt="" />
                                        출산
                                    </button>
                                    <button className={c.eventChoiceBtn}>
                                        <img src="/images/Flower.png" alt="" />
                                        부모사망
                                    </button>
                                    <button className={c.eventChoiceBtn}>
                                        <img src="/images/Flower.png" alt="" />
                                        배우자사망
                                    </button>
                                    <button className={c.eventChoiceBtn}>
                                        <img src="/images/Cake Slice.png" alt="" />
                                        부모회갑
                                    </button>
                                    <button className={c.eventChoiceBtn}>
                                        <img src="/images/ellipsis.png" alt="" />
                                        기타
                                    </button>
                                </div>
                                <div className={c.give}>
                                    <img src="/images/Info.png" alt="" />
                                    본인 결혼 선택됨 · 지급기준액:
                                    <span className={c.money}>500,000원</span>
                                </div>
                            </div>

                            <div className={c.applyInfoBox}>
                                <div className={c.infoTitle}>
                                    <span></span>
                                    <div>
                                        경조 대상자 정보
                                        <p className={c.necessary}>*</p>
                                    </div>
                                </div>
                                <div className={c.infoUser}>
                                    <div className={c.applyInfo}>
                                        <span>대상자 성명<p className={c.necessary}>*</p></span>
                                        <input type="text"
                                            placeholder='성명을 입력하세요'
                                            className={c.name}
                                         />
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>관계<p className={c.necessary}>*</p></span>
                                        <select name="" id="" className={c.relation}>
                                            <option value="본인">본인</option>
                                            <option value="본인">본인</option>
                                            <option value="본인">본인</option>
                                            <option value="본인">본인</option>
                                        </select>
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>경조일<p className={c.necessary}>*</p></span>
                                        <input type="date"
                                            className={c.date}
                                         />
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>경조 장소</span>
                                        <input type="text"
                                            placeholder='장소를 입력하세요 (선택)'
                                            className={c.place}
                                         />
                                    </div>
                                </div>
                            </div>

                            <div className={`${c.applyInfoBox} ${c.position}`}>
                                <div className={c.infoTitle}>
                                    <span></span>
                                    <div>
                                        지급 계좌
                                        <p className={c.necessary}>*</p>
                                    </div>
                                </div>
                                <div className={c.infoUser}>
                                    <div className={c.applyInfo}>
                                        <span>은행</span>
                                        <select name="" id="" className={c.bank}>
                                            <option value="국민은행">국민은행</option>
                                            <option value="신한은행">신한은행</option>
                                            <option value="우리은행">우리은행</option>
                                            <option value="기업은행">기업은행</option>
                                            <option value="농협">농협</option>
                                        </select>
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>계좌번호</span>
                                        <input type="text"
                                            placeholder='- 없이 숫자만 입력'
                                            className={c.account}
                                         />
                                    </div>
                                    <div className={c.applyInfo}>
                                        <span>예금주</span>
                                        <div className={c.accountUser}>이영희</div>
                                    </div>
                                </div>
                                <div className={c.accountCheck}>
                                    <img src="/images/Check.png" alt="" />
                                    계좌 확인
                                </div>
                            </div>

                            <div className={c.attach}>
                                <div className={c.infoTitle}>
                                    <span></span>
                                    첨부파일
                                </div>
                                <div className={c.fiileUpload}>
                                    <img src="/images/Paperclip.png" alt="" />
                                    <div className={c.attachText}>
                                        <p>청첩장·출생증명서 등 관련 서류를 첨부해 주세요</p>
                                        <span>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</span>
                                    </div>
                                    <button className={c.uploadBtn}>
                                        <img src="/images/Upload.png" alt="" />
                                        파일 선택
                                    </button>
                                </div>
                                <div className={c.attachFile}>
                                    <div className={c.file}>
                                        <img src="/images/File Text-2.png" alt="" />
                                        <div className={c.fileName}>
                                            <p>청첩장_이영희.pdf</p>
                                            <span>238 KB · 업로드 완료</span>
                                        </div>
                                    </div>
                                    <div className={c.delBtn}>
                                        <img src="/images/X-red.png" alt="" />
                                        취소
                                    </div>
                                </div>
                                <div className={c.note}>
                                    <div className={c.noteTitle}>비고</div>
                                    <textarea name="" id="" 
                                        placeholder='추가 사항을 입력하세요. (선택)'></textarea>
                                    <div className={c.noteBtnBox}>
                                        <button className={c.cancleBtn}>
                                            <img src="/images/X.png" alt="" />
                                            취소
                                        </button>
                                        <button className={c.saveBtn}>
                                            <img src="/images/Send Horizontal.png" alt="" />
                                            신청하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={c.table}>
                        <div className={c.tableTitleBox}>
                            <div className={c.tableTitle}>
                                <img src="/images/Clock.png" alt="" />
                                나의 경조비 신청 현황
                            </div>
                            <div className={c.tableSearch}>
                                <select name="" id="">
                                    <option value="전체">전체</option>
                                    <option value="본인결혼">본인결혼</option>
                                    <option value="자녀결혼">자녀결혼</option>
                                    <option value="출산">출산</option>
                                    <option value="부모사망">부모사망</option>
                                    <option value="배우자사망">배우자사망</option>
                                    <option value="부모회갑">부모회갑</option>
                                    <option value="기타">기타</option>
                                </select>
                                <div className={c.tableLenght}>총 {10}건</div>
                            </div>
                        </div>
                        {/* <Table 
                            columns={[
                                'NO',
                                '신청일',
                                '경조구분',
                                '대상자',
                                '관계',
                                '경조일',
                                '지급금액',
                                '지급계좌',
                                '처리상태',
                                '관리'
                            ]}
                        /> */}
                    </div>
                </div>
            </div>

            <div className={c.modalView}>
                <div className={c.titleBox}>
                    <div className={c.modalTitle}>
                        <Gift size={17} color="#60a5fa" />
                        <div>
                            <p>경조비 신청 상세</p>
                            <span>Welfare Benefit Detail</span>
                        </div>
                    </div>
                    <div className={c.btnBox}>
                        <div className={c.status}>검토중</div>
                        <div className={c.closeBtn}><X size={14} color="#ffffff" /></div>
                    </div>
                </div>

                <div className={c.detailBox}>
                    <div className={c.statusBox}>
                        <div className={c.apply}>
                            <div className={c.applyNum}>
                                <Hash size={12} color="#9ca3af" />신청번호: WEL-2025-07-001
                            </div>
                            <div className={c.applyDate}>
                                <Calendar size={16} color="#9ca3af" />신청일: 2025.07.01
                            </div>
                        </div>
                        <div className={c.state}>
                            <div>
                                <Check size={11} color="#ffffff"
                                    style={{backgroundColor:'#1b3a6b',
                                            width:'20px', height:'20px',
                                            padding:'4.5px', borderRadius:'999px'}}
                                />
                                신청완료
                            </div>
                            <span></span>
                            <div>
                                <div className={c.cricle}>
                                    <div className={c.miniCricle}></div>
                                </div>검토중
                            </div>
                            <span></span>
                            <div>
                                <div className={c.cricleBasic}>
                                    <div className={c.miniCricleBasic}></div>
                                </div>승인
                            </div>
                            <span></span>
                            <div>
                                <div className={c.cricleBasic}>
                                    <div className={c.miniCricleBasic}></div>
                                </div>지급완료
                            </div>
                        </div>
                    </div>

                    <div className={c.detail}>
                        <div className={c.detailInfo}>
                            <div className={c.detailTitle}>
                                <span></span>경조정보
                            </div>
                            <table>
                                <tr>
                                    <th>경조구분</th>
                                    <td><span>본인결혼</span>경조비 지급 규정 3조 1항</td>
                                </tr>
                            </table>
                        </div>
                        <div className={c.detailInfo}>
                            <div className={c.detailTitle}>
                                <span></span>지급 정보
                            </div>
                            <table>
                                <tr>
                                    <th>지급금액</th>
                                    <td><span>500,000원</span>(오십만원정)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}