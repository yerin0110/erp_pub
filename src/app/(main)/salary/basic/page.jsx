'use client';

import c from './page.module.css';
import Nav from '@/component/common/Nav';
import Aside from '@/component/common/Aside';
import PageTitle from '@/component/common/PageTitle';
import { RotateCcw, Search, Table as TableIcon} from 'lucide-react';
import StateCard from '@/component/common/StateCard';
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
                        location={['급여관리', '급여기본정보관리']} 
                        title="급여기본정보관리" 
                        subTitle="직원별 기본급여 및 수당 기준 정보를 등록하고 관리합니다."
                        downloadBtnImg="/images/Download.png"
                        downloadBtnText="PDF 다운로드"
                        addBtnImg="/images/Plus.png"
                        addBtnText="급여정보등록"
                    />

                    <div className={c.state}>
                        <StateCard 
                            title="평균 기본급" value="3,662,500원" 
                            bg="#1b3a6b" titleColor="#93c5fd"
                            valueColor="white" borderColor='none'
                            subColor='#60a5fa' subcontent='전월 대비 +50,000원'
                        />
                        <StateCard 
                            title="최고 기본급" value="4,700,000원" 
                            bg="white" titleColor="#9ca3af" valueColor="#374151" 
                            borderColor="#e5e7eb" subBoxColor='#ede9fe' user='이영희'
                            subBoxTextColor='#7c3aed' rank='· 차장'
                        />
                        <StateCard 
                            title="월 총 인건비" value="29,300,000원" 
                            bg="#eff6ff" titleColor="#3b82f6" valueColor="#1e40af" 
                            borderColor="#bfdbfe" subColor='#3b82f6'
                            subcontent='기본급 합계 기준'
                        />
                        <StateCard 
                            title="월 총 수당" value="3,340,000원" 
                            bg="#fffbeb" titleColor="#d97706" valueColor="#92400e" 
                            borderColor="#fde68a"  subColor='#d97706'
                            subcontent='수당 합계 기준'
                        />
                        <StateCard 
                            title="등록 인원" value="8명" 
                            bg="#f0fdf4" titleColor="#16a34a" valueColor="#15803d"  
                            borderColor="#bbf7d0" subColor='#16a34a'
                            subcontent='미등록 0명'
                        />
                    </div>
                
                    <div className={c.search}>
                        <div className={c.searchBox}>
                            <div className={c.teamBox}>
                                <span>부서</span>
                                <select name="" id="">
                                    <option value="전체부서">전체부서</option>
                                    <option value="인사팀">인사팀</option>
                                    <option value="경영지원팀">경영지원팀</option>
                                    <option value="개발팀">개발팀</option>
                                    <option value="영업팀">영업팀</option>
                                </select>
                            </div>
                            <div className={c.teamBox}>
                                <span>직급</span>
                                <select name="" id="">
                                    <option value="전체직급">전체직급</option>
                                    <option value="인사팀">인사팀</option>
                                    <option value="경영지원팀">경영지원팀</option>
                                    <option value="개발팀">개발팀</option>
                                    <option value="영업팀">영업팀</option>
                                </select>
                            </div>
                            <div className={c.dateBox}>
                                <span>적용기준일</span>
                                <input type="date" />
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
                        <button className={c.tableBtn}>
                            <TableIcon size={13} color="#ffffff" />테이블
                        </button> 
                    </div>

                    <div className={c.table}>
                        <div className={c.tableTitleBox}>
                            <div className={c.tableTitle}>
                                <TableIcon size={14} color="#1b3a6b" />
                                2025년 7월 근태현황
                            </div>
                            <div className={c.total}>
                                <div className={c.tableLenght}>총 {8}명</div>
                                <div className={c.basicPay}><span></span>기본급</div>
                                <div className={c.payList}><span></span>수당항목</div>
                                <div className={c.account}><span></span>계좌정보</div>
                            </div>
                        </div>

                        <Table 
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
                        />
                    </div>
                </div>    
            </div>
        </div>
    )
}