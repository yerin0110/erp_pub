"use client";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import c from "./Table.module.css";
import { Spinner } from "@/components/ui/spinner";

export default function Table({
  columns,
  employees = [],
  tableList = [],
  onDetailClick,
  setEventDetailInfo,
}) {
  const [isLoading, setIsLoading] = useState();

  console.log("tableList >> ", tableList);

  const 경조비상세조회 = async (id) => {
    setIsLoading(true);
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get(`/api/v1/support/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setEventDetailInfo(res?.data?.data);

    setIsLoading(false);

    onDetailClick();
  };

  return (
    <>
      <table className={c.empTable}>
        <thead>
          <tr>
            {columns.map((item, idx) => (
              <th key={item} className={c.number}>
                {item}
              </th>
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
          {employees.length > 0 &&
            employees.map((item, index) => (
              <tr key={item.employeeId}>
                <td>{index + 1}</td>
                <td>{item.employeeNo}</td>
                <td className={c.empName}>{item.name}</td>
                <td>부서</td>
                <td>직급</td>
                <td>입사일</td>
                <td>연락처</td>
                <td>이메일</td>
                {/* <td><span className={statusStyles[item.status]}>재직중</span></td> */}
                <td>
                  <span className={c.statusActive}>재직중</span>
                </td>
                <td>
                  <button className={c.editBtn}>수정</button>
                </td>
              </tr>
            ))}

          {tableList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.applicationDate}</td>
              <td className={c.empName}>{item.eventType}</td>
              <td>{item.targetName}</td>
              <td>{item.familyRelation}</td>
              <td>{item.eventDate}</td>
              <td>{item.requestedAmount}</td>
              <td>{item.accountNumber}</td>
              <td>
                <span className={c.statusActive}>검토중</span>
              </td>
              <td>
                <button
                  className={c.detailBtn}
                  onClick={() => {
                    console.log(item?.EmployeeEventSupportId);

                    경조비상세조회(item?.EmployeeEventSupportId);
                  }}
                >
                  상세
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Spinner className="size-8" />
          </div>
        )}
      </table>
    </>
  );
}
