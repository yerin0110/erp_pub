import c from './Nav.module.css';

export default function Nav(){
    return(
        <nav className={c.topBar}>
            <div className={c.topBarL}>
                <div className={c.logo}>
                    <img src="/images/Briefcase Business.png" alt='' />
                    <p>인사관리시스템</p>
                </div>
                <ul className={c.topMenu}>
                    <li className={c.action}>인사관리</li>
                    <li>근태관리</li>
                    <li>급여관리</li>
                    <li>일용직관리</li>
                </ul>
            </div>
            <div className={c.topBarR}>
                <img src="/images/Bell.png" alt='' />
                <span className={c.line1}></span>
                <ul className={c.loginInfo}>
                    <div className={c.infoIcon}>홍</div>
                    <li className={c.name}>홍길동</li>
                    <span className={c.line2}></span>
                    <li className={c.team}>인사팀</li>
                </ul>
                <img src="/images/Log out.png" alt='' />
            </div>
        </nav>
    )
}