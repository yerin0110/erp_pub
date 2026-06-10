import { ChevronRight } from 'lucide-react';
import c from './PayCard.module.css';

export default function PayCard({ Icon, iconColor='#6B7280', iconSize = 14, imgbox='#f1f5f9',
    title, activeType, description, taxType
}) {
    return (
        <li className={c.payCard}>
            <div className={c.listBox}>
                <div className={c.imgBox} style={{ backgroundColor: imgbox }}>
                    <Icon size={iconSize} color={iconColor} />
                </div>
                <div className={c.content}>
                    <div className={c.contentTitle}>
                        {title}
                        <span className={c.active}>{activeType}</span>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className={c.listBox}>
                <span className={c.tax}>{taxType}</span>
                <ChevronRight size={13} color="#9ca3af" />
            </div>
        </li>
    );
}