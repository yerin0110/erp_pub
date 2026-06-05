'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { Calculator, RotateCcw, Search } from 'lucide-react';

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
                        location={['근태관리', '휴가관리', '휴가일수계산']} 
                        title="휴가일수계산" 
                        subTitle="입사일 기준으로 직원별 발생 휴가일수를 자동 계산합니다."
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Calculator.png"
                        addBtnText="전직원 일괄계산"
                    />
                    
                    <div className={c.searchBox}>
                        <div className={c.search}>
                            <div className={c.year}>
                                <span>기준년도</span>
                                <select name="" id="">
                                    <option value="">2025년</option>
                                    <option value="">2024년</option>
                                    <option value="">2023년</option>
                                    <option value="">2022년</option>
                                    <option value="">2021년</option>
                                </select>
                            </div>

                            <div className={c.team}>
                                <span>부서</span>
                                <select name="" id="">
                                    <option value="">전체부서</option>
                                    <option value="">인사팀</option>
                                    <option value="">경영지원팀</option>
                                    <option value="">개발팀</option>
                                    <option value="">영업팀</option>
                                </select>
                            </div>

                            <div className={c.rank}>
                                <span>직급</span>
                                <select name="" id="">
                                    <option value="">전체직급</option>
                                    <option value="팀장">팀장</option>
                                    <option value="과장">과장</option>
                                    <option value="대리">대리</option>
                                    <option value="사원">사원</option>
                                </select>
                            </div>

                            <div className={c.nameSearch}>
                                <Search size={13} color="#9ca3af" />
                                <input type="text" placeholder='사원명' />
                            </div>

                            <div className={c.searchBtnBox}>
                                <button className={c.searchBtn}>
                                    <Search size={13} color="#ffffff" />
                                    조회
                                </button>
                                <button className={c.resetBtn}>
                                    <RotateCcw size={13} color="#6b7280" />
                                    초기화
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className={c.table}>
                        <div className={c.tableTitleBox}>
                            <div className={c.tableTitle}>
                                <Calculator size={15} color="#1b3a6b" />
                                직원별 휴가 계산 결과
                            </div>
                            <div className={c.tableLenght}>총 {10}명</div>
                        </div>
                        {/* <Table 
                            columns={[
                                '사원번호',
                                '성명',
                                '부서',
                                '직급',
                                '입사일',
                                '근속연수',
                                '기본일수',
                                '가산일수',
                                '이월일수',
                                '총 부여일수',
                                '사용일수',
                                '잔여일수',
                                '상태'
                            ]}
                        /> */}
                    </div>
                </div>    
            </div>
        </div>
    )
}