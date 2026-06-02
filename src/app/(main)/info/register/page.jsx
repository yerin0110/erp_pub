'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import Table from '@/component/common/Table';
import PageTitle from '@/component/common/PageTitle';
import { useState } from 'react';
import baseApi from '@/api/baseApi';

export default function Page(){

    const [keyword, setKeyword]=useState();

    const getEmployees=async()=> {
        const res=await baseApi.get('/api/v1/employees', {
            params: {
                keyword: keyword || '',
                page: 1
            }
        });
        console.log(res.data.data);
    }

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
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드" 
                        addBtnImg="/images/Plus.png"
                        addBtnText="신규등록"
                    />
                
                    <div className={c.searchBox}>
                        <div className={c.searchTitle}>
                            <img src="/images/Search.png" alt="" />
                            검색조건
                        </div>
                        <div className={c.search}>
                            <div>
                                <span>사원번호</span>
                                <input type="text" placeholder='전체'
                                    onChange={(e)=> setKeyword(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <span>부서</span>
                                <select name="" id="">
                                    <option value="">인사팀</option>
                                    <option value="">경영지원팀</option>
                                    <option value="">개발팀</option>
                                    <option value="">영업팀</option>
                                </select>
                            </div>

                            <div>
                                <span>직급</span>
                                <select name="" id="">
                                    <option value="">과장</option>
                                    <option value="">팀장</option>
                                    <option value="">대리</option>
                                    <option value="">사원</option>
                                </select>
                            </div>

                            <div>
                                <span>재직상태</span>
                                <select name="" id="">
                                    <option value="">재직중</option>
                                    <option value="">휴직중</option>
                                </select>
                            </div>

                            <div className={c.searchBtnBox}>
                                <button className={c.searchBtn}
                                    onClick={()=> getEmployees()}
                                >
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

            <div className={c.modalView}>
                
            </div>
        </div>
    )
}