import { useState } from "react";
import c from "./PageTitle.module.css";
import { Download } from "lucide-react";

export default function PageTitle({
  location = [],
  title,
  subTitle,
  downloadBtnImg,
  downloadBtnText,
  addBtnImg,
  addBtnText,
  onAddClick,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <button className={c.downloadBtn} onClick={openModal}>
            <img src={downloadBtnImg} alt="" />
            {downloadBtnText}
          </button>
          <button className={c.addBtn} onClick={onAddClick}>
            <img src={addBtnImg} alt="" />
            {addBtnText}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={c.modalView}>
          <div className={c.modalContent}>
            <div className={c.imgBox}>
              <Download size={24} color="#3b82f6" />
            </div>
            <div className={c.downloadText}>
              PDF 다운로드
              <div className={c.notice}>
                선택한 데이터를 PDF 파일로 다운로드합니다.
                <br />
                계속 진행하시겠습니까?
              </div>
            </div>
          </div>
          <div className={c.modalFooter}>
            <div className={c.buttonBox}>
              <button className={c.cancelBtn} onClick={closeModal}>
                취소
              </button>
              <button className={c.okBtn}>확인</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
