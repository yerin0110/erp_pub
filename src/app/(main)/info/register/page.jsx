'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
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
                                submenuList: ['인사정보등록', '사원명수', '인사발령등록']
                            },
                            {
                                titleInfo: { iconPath: '/images/Heart Handshake.png', titleName: '인사정보' },
                                submenuList: ['경조비신청', '경조비신청황']
                            },
                            {
                                titleInfo: { iconPath: '/images/File Text.png', titleName: '인사정보' },
                                submenuList: ['증명서발급']
                            }
                        ]
                    }
                />

                <div className={c.main}>

                    <div className={c.section}>
                        <img src="/images/House.png" alt="" />
                        <span>&gt;</span>
                        <span>인사관리</span>
                        <span>&gt;</span>
                        <span>인사정보</span>
                        <span>&gt;</span>
                        <span className={c.now_section}>인사정보등록</span>
                    </div>

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