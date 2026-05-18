import './test_style.css'

export default function page(){
    return(
        <div className='app_wrap'>
            <nav className="top_bar">
                <div className='bar_left'>
                    <div className="logo">
                        <img src="/Briefcase Business.png" alt='' />
                        <p>인사관리시스템</p>
                    </div>
                    <ul className='menu_list'>
                        <li className='action'>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                </div>
                <div className='bar_right'>
                    <img src="/Bell.png" alt='' />
                    <span className='line1'></span>
                    <ul className='login_info'>
                        <div className='info_icon'>홍</div>
                        <li className='name'>홍길동</li>
                        <span className='line2'></span>
                        <li className='team'>인사팀</li>
                    </ul>
                    <img src="/Log out.png" alt='' />
                </div>
            </nav>
        </div>
    )
}