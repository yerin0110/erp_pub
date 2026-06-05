'use client';

import { useState } from 'react';
import c from './BreakTable.module.css';

export default function BreakRow({ rank, standardDays, maxCarryOver, halfDay, note }) {

    const [isAllowed, setIsAllowed] = useState(halfDay);

    const handleToggle = () => {
        setIsAllowed(!isAllowed);
        // 추후 서버나 부모 컴포넌트에 변경된 값을 전달하려면 여기에 저장 로직을 추가하면 됩니다.
    };

    return (
        <tr className={c.tableRow}>
            <td className={c.rank}>{rank}</td>
            <td><div className={c.days}>{standardDays}</div></td>
            <td><div className={c.carry}>{maxCarryOver}</div></td>
            <td className={c.halfDay}>
                <label className={c.switch}>
                    <input 
                        type="checkbox" 
                        checked={isAllowed} 
                        onChange={handleToggle} 
                    />
                    <span className={c.slider}></span>
                </label>
            </td>
            <td className={c.note}>{note}</td>
        </tr>
    );
}