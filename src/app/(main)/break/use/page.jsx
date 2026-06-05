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
                
                </div>    
            </div>
        </div>
    )
}