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

                    <PageTitle 
                        location={['인사관리', '인사정보', '인사발령등록']} 
                        title="인사발령등록" 
                        subTitle="사원의 부서·직급·직책·발령 정보를 등록하고 이력을 관리합니다"
                    />
                    
                    <div>
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
                    </div>

                </div>
            </div>
        </div>
    )
}