import { Info, Sigma } from "lucide-react";
import c from "./insuranceCard.module.css";

export default function InsuranceCard({
  bg,
  title,
  totalPercent,
  tpColor,
  infoBg,
  iconColor,
  infoTextColor,
  infoText,
  workerMark,
  worker,
  b,
  symbolBg,
  symbol,
  business,
  tbBg,
  totalText,
  children,
}) {
  return (
    <div className={c.card}>
      <div className={c.cardHeader} style={{ background: bg }}>
        <div className={c.cardTitle}>
          <span></span>
          {title}
        </div>
        <div className={c.percentBox} style={{ color: tpColor }}>
          {totalPercent}
        </div>
      </div>
      <div className={c.cardContent}>
        <div
          className={c.info}
          style={{ background: infoBg, color: infoTextColor }}
        >
          <Info size={11} style={{ color: iconColor }} />
          {infoText}
        </div>
        <div className={c.percentInput}>
          <div className={c.worker}>
            <div className={c.textBox}>
              <span style={{ background: workerMark }}></span>
              {worker}
            </div>
            <div className={c.inputBox}>
              <input type="text" style={{ borderColor: b }} />
              <div
                className={c.symbol}
                style={{ background: symbolBg, borderColor: b, color: symbol }}
              >
                %
              </div>
            </div>
            <div className={c.conversion}>예: 3,500,000원 기준</div>
          </div>
          <div className={c.business}>
            <div className={c.textBox}>
              <span></span>
              {business}
            </div>
            <div className={c.inputBox}>
              <input type="text" />
              <div className={c.symbol}>%</div>
            </div>
            <div className={c.conversion}>예: 3,500,000원 기준</div>
          </div>
        </div>
        {children && <div className={c.extraContent}>{children}</div>}
        <div className={c.totalBox} style={{ background: tbBg }}>
          <div className={c.totalText}>
            <Sigma size={11} style={{ color: iconColor }} />
            {totalText}
          </div>
          <div className={c.totalPercent} style={{ color: tpColor }}>
            {totalPercent}
          </div>
        </div>
      </div>
    </div>
  );
}
