import c from "./PageTitle.module.css";

export default function PageTitle({
  location = [],
  title,
  subTitle,
  downloadBtnImg,
  downloadBtnText,
  addBtnImg,
  addBtnText,
  onNewRegisterClick,
}) {
  return (
    <>
      <div className={c.section}>
        <img src="/images/House.png" alt="" />
        {location?.map((loc, index) => {
          const isLast = index === location.length - 1;

          return (
            <span key={index}>
              <span>&gt;</span>
              <span className={isLast ? c.now_section : ""}>{loc}</span>
            </span>
          );
        })}
      </div>

      <div className={c.pageHeader}>
        <div className={c.titleBox}>
          <h3 className={c.title}>{title}</h3>
          <p className={c.subTitle}>{subTitle}</p>
        </div>
        <div className={c.btnBox}>
          <button className={c.downloadBtn}>
            <img src={downloadBtnImg} alt="" />
            {downloadBtnText}
          </button>
          <button className={c.addBtn} onClick={onNewRegisterClick}>
            <img src={addBtnImg} alt="" />
            {addBtnText}
          </button>
        </div>
      </div>
    </>
  );
}
