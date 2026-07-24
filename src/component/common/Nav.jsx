"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import c from "./Nav.module.css";
import { Key } from "lucide-react";

export default function Nav() {
  const pathname = usePathname();
  const [navInfo, setNavInfo] = useState();

  useEffect(() => {
    // 로컬스토리지에 있는 데이터 가져오기
    const user = JSON.parse(localStorage.getItem("user"));

    const 부서명 = user.departmentName;
    const 이름 = user.name;

    setNavInfo({
      departmentName: 부서명,
      name: 이름,
    });
  }, []);

  const isInfoGroup =
    pathname.startsWith("/info") ||
    pathname.startsWith("/event-support") ||
    pathname.startsWith("/certificate");
  const isAttendanceGroup =
    pathname.startsWith("/attendance") || pathname.startsWith("/break");
  const isSalaryGroup =
    pathname.startsWith("/salary") || pathname.startsWith("/insurance");

  return (
    <nav className={c.topBar}>
      <div className={c.topBarL}>
        <div className={c.logo}>
          <img src="/images/Briefcase Business.png" alt="" />
          <p>인사관리시스템</p>
        </div>
        <ul className={c.topMenu}>
          <li className={isInfoGroup ? c.action : ""}>
            <Link href="/info/register">인사관리</Link>
          </li>
          <li className={isAttendanceGroup ? c.action : ""}>
            <Link href="/attendance/day">근태관리</Link>
          </li>
          <li className={isSalaryGroup ? c.action : ""}>
            <Link href="/salary/basic">급여관리</Link>
          </li>
          <li className={pathname === "/" ? c.action : ""}>일용직관리</li>
        </ul>
      </div>
      <div className={c.topBarR}>
        <img src="/images/Bell.png" alt="" />
        <span className={c.line1}></span>
        <ul className={c.loginInfo}>
          <div className={c.infoIcon}>{navInfo?.name.slice(0, 1)}</div>
          <li className={c.name}>{navInfo?.name}</li>
          <span className={c.line2}></span>
          <li className={c.team}>{navInfo?.departmentName}</li>
        </ul>
        <Link href="/login">
          <img
            src="/images/Log out.png"
            alt="로그아웃"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </nav>
  );
}
