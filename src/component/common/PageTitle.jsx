import c from './PageTitle.module.css';

export default function PageTitle({ location= [], title, subTitle }){
    return(
        <>
            <div className={c.section}>
                <img src="/images/House.png" alt="" />
                <span>&gt;</span>
                <span>인사관리</span>
                <span>&gt;</span>
                <span>인사정보</span>
                <span>&gt;</span>
                <span className={c.now_section}>인사정보등록</span>
            </div>
            
            <div className={c.pageHeader}>
                <div className={c.titleBox}>
                    <h3 className={c.title}>{title}</h3>
                    <p className={c.subTitle}>{subTitle}</p>
                </div>
                <div className={c.btnBox}>
                    <button className={c.downloadBtn}>
                        <img src="/images/Download.png" alt="" />
                        PDF 다운로드
                    </button>
                    <button className={c.addBtn}>
                        <img src="/images/Plus.png" alt="" />
                        신규 등록
                    </button>
                </div>
            </div>
        </>
    )
}