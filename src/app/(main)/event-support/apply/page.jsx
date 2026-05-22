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
                            <div>
                                <img src="/images/Heart Handshake-navy.png" alt="" />
                                경조비 신청 입력
                            </div>
                            <div>
                                <span>*</span>
                                <p>필수 입력 항목</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}