import c from './Calendar.module.css';

export default function Calendar({ currentDate, selectedDate, onDateSelect }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 달력 날짜 계산 로직
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateSlots = [];
  
  // 지난달 공백
  for (let i = 0; i < firstDayOfMonth; i++) {
    dateSlots.push(<div key={`empty-${i}`} className={c.emptySlot}></div>);
  }
  
  // 이번달 날짜
  for (let day = 1; day <= daysInMonth; day++) {
    // ⭐️ 요일 계산 (0: 일요일, 6: 토요일)
    const dayOfWeek = new Date(year, month, day).getDay();
    
    const isSelected = selectedDate && 
                     selectedDate.getFullYear() === year && 
                     selectedDate.getMonth() === month && 
                     selectedDate.getDate() === day;

    // 기본 클래스 및 선택 상태 조건부 추가
    let dayClass = `${c.daySlot} ${isSelected ? c.selectedDay : ''}`;
    
    // ⭐️ 선택되지 않은 날짜에만 주말 색상 적용 (선택 시에는 흰색 글씨 유지)
    if (!isSelected) {
      if (dayOfWeek === 0) dayClass += ` ${c.sunday}`;
      if (dayOfWeek === 6) dayClass += ` ${c.saturday}`;
    }

    dateSlots.push(
      <button 
        key={`day-${day}`} 
        className={dayClass}
        onClick={() => onDateSelect(new Date(year, month, day))}
      >
        {day}
      </button>
    );
  }

  return (
    <div className={c.calendar}>
      {/* 요일 헤더 */}
      <div className={c.weekHeaders}>
        {['일', '월', '화', '수', '목', '금', '토'].map((w, index) => {
          // ⭐️ 헤더 글자 색상 분기 (index 0: 일요일, index 6: 토요일)
          let headerClass = c.weekHeader;
          if (index === 0) headerClass += ` ${c.sunday}`;
          if (index === 6) headerClass += ` ${c.saturday}`;
          
          return (
            <div key={w} className={headerClass}>{w}</div>
          );
        })}
      </div>
      {/* 날짜 그리드 */}
      <div className={c.daysGrid}>
        {dateSlots}
      </div>
    </div>
  );
}