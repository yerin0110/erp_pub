"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import c from "./Aside.module.css";

const routeMap = {
  일일근태등록: "/attendance/day",
  월근태현황: "/attendance/month",
  출장신청: "/break/apply",
  출장정산: "/break/cal",
  출장사용현황: "/break/days",
  인사정보등록: "/info/register",
  인사발령등록: "/info/appointment",
  경조비신청: "/event-support/apply",
  증명서발급: "/certificate/issue",
  급여기본정보관리: "/salary/basic",
  급여지급: "/salary/pay",
  기본수당외수당관리: "/salary/etc",
  급여계산: "/salary/payCal",
  급여조회: "/salary/payslip",
  "4대보험요율표설정": "/insurance/setting",
  국민연금관리: "/insurance/acquire",
};

export default function Aside({ dummy }) {
  //    const dummy=[
  //        {
  //            titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
  //            submenuList: ['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
  //        },
  //        {
  //            titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
  //            submenuList: ['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
  //        },
  //        {
  //            titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
  //            submenuList: ['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
  //        }
  //    ]

  const pathname = usePathname();

  return (
    <header>
      <div className={c.headerMenu}>
        {dummy.map((item, idx) => (
          <ul key={idx}>
            <li className={c.menuTitle}>
              <img src={item.titleInfo.iconPath} alt="" />
              <p>{item.titleInfo.titleName}</p>
            </li>

            {item.submenuList.map((subItem, subIdx) => {
              const href = routeMap[subItem] || "#";
              const isActive = pathname === href;

              return (
                <li
                  key={subIdx}
                  className={isActive ? c.menuClick : ""}
                  style={{ cursor: href === "#" ? "default" : "pointer" }}
                >
                  <span></span>
                  {href === "#" ? subItem : <Link href={href}>{subItem}</Link>}
                </li>
              );
            })}
          </ul>
        ))}

        {/* <ul>
              <li className={c.menuTitle}>
                  <img src="/images/User.png" alt="" />
                  <p>인사정보</p>
              </li>
              <li className={c.menuClick}><span></span>인사정보등록</li>
              <li><span></span>사원명수/인사기록카드</li>
              <li><span></span>인사발령등록</li>
          </ul>
          <ul>
              <li className={`${c.menuTitle} ${c.menuBorder}`}>
                  <img src="/images/Heart Handshake.png" alt="" />
                  <p>경조비관리</p>
              </li>
              <li><span></span>경조비신청</li>
              <li><span></span>경조비신청 현황</li>
          </ul>
          <ul> 
              <li className={`${c.menuTitle} ${c.menuBorder}`}>
                  <img src="/images/File Text.png" alt="" />
                  <p>증명서관리</p>
              </li>
              <li><span></span>증명서발급</li>
          </ul> */}
      </div>
    </header>
  );
}
