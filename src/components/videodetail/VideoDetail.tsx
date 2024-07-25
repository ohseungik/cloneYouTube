import styles from './VideoDetail.module.scss';
import * as common from '../../tool/util.tsx';
import ViewInfo from './viewInfo/ViewInfo.tsx';
import Channel from './channel/Channel.tsx';
import Description from './description/Description.tsx';

const VideoDetail = ({ video }: any) => {
    return (
        <div className={styles.playVideoBox}>
            <div className={styles.iframeBox}>
                <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title='youtube video'
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder='0'></iframe>
            </div>
            <div className={styles.videoContainer}>
                {video.tags && <p className={styles.tags}>{common.tagMaker(video.tags)}</p>}
                <h2 className={styles.title}>{video.videoTitle}</h2>
                <ViewInfo video={video} />
                <Channel video={video} />
                <Description video={video} />
            </div>
            <span className={styles.comments1}>댓글 {common.numberWithCommas(video.comment)}개</span>
        </div>
    );
};




export default VideoDetail;
