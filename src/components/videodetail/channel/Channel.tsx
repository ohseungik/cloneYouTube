import * as common from '../../../tool/util.tsx';
import styles from './Channel.module.css';

const Channel = ({ video }: any) => (
    <div className={styles.channel}>
        <div className={styles.channelStart}>
            <img src={video.channelImg} alt="Channel" className={styles.channelImg} />
            <div className={styles.channelInfo}>
                <h4 className={styles.channelName}>{video.channelTitle}</h4>
                <div className={styles.subscribers}>구독자 {common.countConverter(video.subscriber)}명</div>
            </div>
        </div>
        <button className={styles.subscribe}>구독</button>
    </div>
);

export default Channel;