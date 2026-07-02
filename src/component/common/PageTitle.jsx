import { useState } from "react";
import c from "./PageTitle.module.css";
import { Download } from "lucide-react";

export default function PageTitle({
  location = [],
  title,
  subTitle,
  buttons = [],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getButtonStyle = (btn, index, total) => {
    // 1. 첫 번째 버튼 (인덱스 0) -> white 고정
    if (index === 0) {
      return {
        backgroundColor: "white",
        color: "#374151",
        borderColor: "#d1d5db",
      };
    }

    // 2. 마지막 버튼 (인덱스 === total - 1) -> #1b3a6b 고정
    if (index === total - 1) {
      return {
        backgroundColor: "#1b3a6b",
        color: "white",
        borderColor: "transparent",
      };
    }

    // 3. 중간 버튼 (2번째 등) -> 부모가 지정한 색상 적용, 없으면 기본값
    return {
      backgroundColor: btn.bgColor || "white",
      color: btn.textColor || "#374151",
      borderColor: btn.bgColor ? "transparent" : "#d1d5db",
    };
  };

  const downLoadClick = (btn) => {
    const isDownload = btn.text
      ?.replaceAll(" ", "")
      .toLowerCase()
      .includes("다운로드");

    if (isDownload) {
      openModal(); // 내부에 선언된 openModal 실행
    }

    // 다운로드 버튼이더라도 부모가 따로 등록한 onClick 기능이 있다면 함께 실행해 줍니다.
    if (typeof btn.onClick === "function") {
      btn.onClick();
    }
  };

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
        {buttons.length > 0 && (
          <div className={c.btnBox}>
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={c.baseBtn}
                onClick={() => downLoadClick(btn)}
                style={getButtonStyle(btn, index, buttons.length)} // 👈 스타일 자동 부여
              >
                {btn.img && <img src={btn.img} alt="" />}
                {btn.text}
              </button>
            ))}
          </div>
        )}
        {/* <div className={c.btnBox}>
          <button className={c.downloadBtn} onClick={openModal}>
            <img src={downloadBtnImg} alt="" />
            {downloadBtnText}
          </button>
          <button className={c.addBtn} onClick={onAddClick}>
            <img src={addBtnImg} alt="" />
            {addBtnText}
          </button>
        </div> */}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
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
        </div>
      )}
    </>
  );
}
