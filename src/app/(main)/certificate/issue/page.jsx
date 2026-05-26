'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';

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
                        location={['인사관리', '증명서관리', '증명서발급']} 
                        title="증명서발급" 
                        subTitle="필요한 증명서를 선택하고 발급 정보를 입력하여 출력하세요"
                        downloadBtnImg="/images/Clock-black.png"
                        downloadBtnText="발급이력"
                        addBtnImg="/images/Printer.png"
                        addBtnText="출력하기"
                    />
                    
                    <div className={c.applyBox}>
                        <div className={c.applyTitle}>
                            <div className={c.title}>
                                <img src="/images/File Check.png" alt="" />
                                증명서 종류 선택
                            </div>
                            <div className={c.necessaryInput}>
                                <span className={c.necessary}>*</span>
                                <p>필수 입력 항목</p>
                            </div>
                        </div>
                        
                        <div className={c.certificateBox}>
                            <div className={c.certificateChoice}>
                                <div className={c.imgBox}>
                                    <img src="/images/Briefcase Business-blue.png" alt="" />
                                </div>
                                <p>재직증명서</p>
                                <span>현재 재직 중임을 증명합니다</span>
                                <button className={`${c.choiceBtn} ${c.click}`}>
                                    <img src="/images/Check-white.png" alt="" />
                                    선택됨
                                </button>
                            </div>
                            <div className={c.certificateChoice}>
                                <div className={c.imgBox}>
                                    <img src="/images/Award.png" alt="" />
                                </div>
                                <p>재직증명서</p>
                                <span>현재 재직 중임을 증명합니다</span>
                                <button className={c.choiceBtn}>
                                    선택하기
                                </button>
                            </div>
                            <div className={c.certificateChoice}>
                                <div className={c.imgBox}>
                                    <img src="/images/Banknote.png" alt="" />
                                </div>
                                <p>재직증명서</p>
                                <span>현재 재직 중임을 증명합니다</span>
                                <button className={c.choiceBtn}>
                                    선택하기
                                </button>
                            </div>
                            <div className={c.certificateChoice}>
                                <div className={c.imgBox}>
                                    <img src="/images/Receipt Text.png" alt="" />
                                </div>
                                <p>재직증명서</p>
                                <span>현재 재직 중임을 증명합니다</span>
                                <button className={c.choiceBtn}>
                                    선택하기
                                </button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}