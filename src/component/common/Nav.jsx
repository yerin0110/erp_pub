import { useEffect, useState } from "react";
import c from "./Nav.module.css";
import { Key } from "lucide-react";

export default function Nav() {
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

  return (
    <nav className={c.topBar}>
      <div className={c.topBarL}>
        <div className={c.logo}>
          <img src="/images/Briefcase Business.png" alt="" />
          <p>인사관리시스템</p>
        </div>
        <ul className={c.topMenu}>
          <li>인사관리</li>
          <li>근태관리</li>
          <li>급여관리</li>
          <li>일용직관리</li>
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
        <img src="/images/Log out.png" alt="" />
      </div>
    </nav>
  );
}
