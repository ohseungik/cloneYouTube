import { useState } from 'react';
import styles from './Description.module.css';

const Description = ({ video }: any) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.descriptionBox}>
            <pre className={`${styles.description} ${open ? styles.open : styles.close}`}>
                {video.description}
            </pre>
            <button className={styles.moreBtn} onClick={() => setOpen(!open)}>{open ? '간략히' : '더보기'}</button>
        </div>
    );

}


export default Description;