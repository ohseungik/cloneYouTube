import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import styles from "../assets/style/common.module.scss";
import VideoList from "../components/videolist/VideoList.tsx";

const htmlTitle: any = document.querySelector("title");

const Home = ({ onLogoClick, youtube, videos, selectVideo, loading }: any) => {
    useEffect(() => {
        htmlTitle.textContent = "Youtube";
    }, []);

    return (
        <>
           <Sidebar onHomeClick={onLogoClick} />
           {loading ? (
                <div className={styles.loadingScreen}>
                    <div className={styles.loadingSpinner}></div>
                </div>
           ) : (
                <section className={`${styles.grid} ${styles.content}`}>
                    <VideoList
                        youtube={youtube}
                        videos={videos}
                        onVideoClick={selectVideo}
                        display='grid'
                        channelImg={true}
                        search={false}
                    />
                </section>
           )}
        </>
    )
}

export default Home;