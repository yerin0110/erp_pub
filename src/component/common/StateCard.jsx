import c from "./StateCard.module.css";

export default function StateCard({
  title,
  value,
  bg,
  titleColor,
  valueColor,
  borderColor,
  subColor,
  subcontent,
  user,
  rank,
  subBoxColor,
  subBoxTextColor,
  undecideColor,
  undecideTextColor,
  undecide,
  decideColor,
  decideTextColor,
  decide,
  subBoxTextBorder,
}) {
  return (
    <div
      className={c.stateCard}
      style={{
        background: bg,
        border: `1px solid ${borderColor}`,
      }}
    >
      <span style={{ color: titleColor }}>{title}</span>
      <p style={{ color: valueColor }} className={c.text}>
        {value}
        {undecide && (
          <span
            style={{ backgroundColor: undecideColor, color: undecideTextColor }}
          >
            {undecide}
          </span>
        )}
        {decide && (
          <span
            style={{ backgroundColor: decideColor, color: decideTextColor }}
          >
            {decide}
          </span>
        )}
      </p>
      <div className={c.subBox}>
        <span style={{ color: subColor }}>{subcontent}</span>
        <div
          style={{
            backgroundColor: subBoxColor,
            border: `1px solid ${subBoxTextBorder}`,
          }}
        >
          <p
            style={{
              color: subBoxTextColor,
            }}
          >
            {user} {rank}
          </p>
        </div>
      </div>
    </div>
  );
}
