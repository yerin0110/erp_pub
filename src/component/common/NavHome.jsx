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
                    <li>인사관리</li>
                    <li>근태관리</li>
                    <li>급여관리</li>
                    <li>일용직관리</li>
                </ul>
            </div>
        </nav>
    )
}