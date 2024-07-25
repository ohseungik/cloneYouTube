import VideoList from '../components/videolist/VideoList.tsx';
import styles from '../assets/style/common.module.scss';
import VideoDetail from '../components/videodetail/VideoDetail.tsx';

const Watch = ({ youtube, videos, selectVideo, loading, selectedVideo }: any) => {
    return (
        <>
            {loading ? (
                <div className={styles.loadingScreen}>
                    <div className={styles.loadingSpinner}></div>
                </div>) : (
                <section className={`${styles.list} ${styles.content}`}>
                    <VideoDetail video={selectedVideo} />
                    <VideoList
                        channelImg={false}
                        youtube={youtube}
                        videos={videos}
                        onVideoClick={selectVideo}
                        display='list'
                        search={false}
                    />
                </section>
            )}
        </>
    );
};

export default Watch;