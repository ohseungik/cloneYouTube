import VideoItem from '../videoItem/VideoItem.tsx';
import styles from './VideoList.module.scss';

const VideoList = ({ search, channelImg, youtube, videos, onVideoClick, display }: any) => {
    return (
        <ul className={`${styles.videos} ${display === 'list' ? styles.list : styles.grid}`}>
            {videos.map((video: { id: any; }) => <VideoItem
                key={video.id}
                video={video}
                onVideoClick={onVideoClick}
                display={display}
                youtube={youtube}
                channelImg={channelImg}
                search={search}
            />)}
        </ul>

    );

};

export default VideoList;