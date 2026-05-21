'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import Table from '@/component/common/Table';
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
                        location={['인사관리', '인사정보', '인사정보등록']} 
                        title="인사정보등록" 
                        subTitle="직원의 인사정보를 등록하고 관리합니다." 
                    />

                    <Table
                        columns={[
                            'NO',
                            '사원번호',
                            '성명',
                            '부서',
                            '직급',
                            '입사일',
                            '연락처',
                            '이메일',
                            '재직상태',
                            '관리'
                        ]}
                    />

                </div>
            </div>
        </div>
    )
}