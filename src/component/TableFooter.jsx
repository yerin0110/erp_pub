"use client";

import c from "./TableFooter.module.css";

export default function TableFooter({ totalCount = 0 }) {
  return (
    <div className={c.tableFooter}>
      <div className={c.tableFooterInner}>
        <div className={c.totalCount}>총 {totalCount}건</div>
        <div className={c.pageChange}>
          <button className={c.pageBtn}>&lt;</button>
          <button className={`${c.pageBtn} ${c.activePage}`}>1</button>
          <button className={c.pageBtn}>2</button>
          <button className={c.pageBtn}>3</button>
          <button className={c.pageBtn}>&gt;</button>
        </div>
        <div className={c.emptySpace}></div>
      </div>
    </div>
  );
}
