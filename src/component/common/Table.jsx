'use client';

import { useEffect, useState } from 'react';
import baseApi from '@/api/baseApi';
import c from './Table.module.css';

export default function Table({columns}){
    const [employees, setEmployees] = useState([])
    console.log(columns)

    useEffect(()=> {
        // 1. api 요청해서 받기
        const getEmployee=async()=> {
            const response=await baseApi.get('/api/v1/employees');
            console.log(response.data.data);

            // 2. useState에 넣기
            setEmployees(response.data.data);

            // 3. useState에 있는 데이터 렌더링 시키기

        }

        getEmployee();

    }, []);
    
    return(
        <>  
            <table className={c.empTable}>
                <thead>
                    <tr>
                        {columns.map((item, idx)=> (
                            <th key={item} className={c.number}>{item}</th>
                        ))}

                            {/* <th className={c.number}>NO</th>
                            <th className={c.empNumber}>사원번호</th>
                            <th className={c.empName}>성명</th>
                            <th className={c.empTeam}>부서</th>
                            <th className={c.empRank}>직급</th>
                            <th className={c.empJoin}>입사일</th>
                            <th className={c.empPhone}>연락처</th>
                            <th className={c.empEmail}>이메일</th>
                            <th className={c.empStatus}>재직상태</th>
                            <th className={c.empEdit}>관리</th> */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item, index)=> (
                        <tr key={item.employeeId}>
                            <td>{index+1}</td>
                            <td>{item.employeeNo}</td>
                            <td className={c.empName}>{item.name}</td>
                            <td>부서</td>
                            <td>직급</td>
                            <td>입사일</td>
                            <td>연락처</td>
                            <td>이메일</td>
                            {/* <td><span className={statusStyles[item.status]}>재직중</span></td> */}
                            <td><span className={c.statusActive}>재직중</span></td>
                            <td><button className={c.editBtn}>수정</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className={c.tableFooter}>
                        <td colSpan={10}>
                            <div className={c.tableFooterInner}>
                                <div className={c.totalCount}>총 {employees.length}건</div>
                                <div className={c.pageChange}>
                                    <button className={c.pageBtn}>&lt;</button>
                                    <button className={`${c.pageBtn} ${c.activePage}`}>1</button>
                                    <button className={c.pageBtn}>2</button>
                                    <button className={c.pageBtn}>3</button>
                                    <button className={c.pageBtn}>&gt;</button>
                                </div>
                                <div className={c.emptySpace}></div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}