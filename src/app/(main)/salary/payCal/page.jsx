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
                                titleInfo: { iconPath: '/images/Banknote-3.png', titleName: '급여관리' },
                                submenuList: ['급여기본정보관리', '급여지급', '기본수당외수당관리', '급여계산', '급여조회']
                            },
                            {
                                titleInfo: { iconPath: '/images/Shield Check-blue.png', titleName: '4대보험관리' },
                                submenuList: ['4대보험요율표설정', '국민연금관리', '건강보험관리', '고용보험관리', '4대보험취득/상실']
                            }
                        ]
                    }
                />

                <div className={c.main}>

                    <PageTitle 
                        location={['급여관리', '급여지급']} 
                        title="급여지급" 
                        subTitle="월별 직원 급여 지급 내역을 관리하고 확정합니다."
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Save.png"
                        addBtnText="설정저장"
                    />
                
                </div>    
            </div>
        </div>
    )
}