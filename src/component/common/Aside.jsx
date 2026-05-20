import c from './Aside.module.css';

export default function Aside({dummy}){

//    const dummy=[
//        {
//            titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
//            submenuList: ['인사정보등록', '사원명수', '인사발령등록']
//        },
//        {
//            titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
//            submenuList: ['인사정보등록', '사원명수', '인사발령등록']
//        },
//        {
//            titleInfo: { iconPath: '/images/User.png', titleName: '인사정보' },
//            submenuList: ['인사정보등록', '사원명수', '인사발령등록']
//        }
//    ]

    return(
        <header>
            <div className={c.headerMenu}>
                {dummy.map((item, idx)=>
                    <ul key={idx}>
                        <li className={c.menuTitle}>
                            <img src={item.titleInfo.iconPath} alt="" />
                            <p>{item.titleInfo.titleName}</p>
                        </li>

                        {item.submenuList.map((subItem, subIdx)=> (
                            <li key={subIdx}><span></span>{subItem}</li>
                        ))}
                    </ul>
                )}
                
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
    )
}