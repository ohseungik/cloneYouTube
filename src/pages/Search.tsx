import VideoList from '../components/videolist/VideoList.tsx';
import styles from '../assets/style/common.module.scss';
import Sidebar from '../components/sidebar/Sidebar.tsx';

const Search = ({ clickLogo, selectVideo, youtube, videos, loading }: any) => {
    return (
        <>

            <Sidebar onHomeClick={clickLogo} />
            {loading ? (
                <div className={styles.loadingScreen}>
                    <div className={styles.loadingSpinner}></div>
                </div>) : (
                <section className={`${styles.list} ${styles.content} ${styles.search}`}>
                    <VideoList
                        youtube={youtube}
                        videos={videos}
                        onVideoClick={selectVideo}
                        display='list'
                        channelImg={true}
                        search={true}
                    />
                </section>
            )}


        </>
    );
};

export default Search;