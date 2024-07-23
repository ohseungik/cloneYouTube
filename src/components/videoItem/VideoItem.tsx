import { memo, useState, useEffect } from 'react';
import styles from './VideoItem.module.scss';
import * as util from '../../tool/util';

const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display, youtube, channelImg, search }: any) => {
    const [loading, setLoading] = useState(true);
    const [videoData, setVideoData] = useState({
        videoId: '',
        channelId: '',
        description: '',
        videoTitle: '',
        date: '',
        videoThumbnail: '',
        viewCount: '',
        like: '',
        dislike: '',
        comment: '',
        tags: '',
        channelTitle: '',
        channelImg: '',
        subscriber: '',
    });
   
    useEffect(() => {
        snippet && youtube.getAllData(video.id, snippet.channelId).then((result: any) => {
            const video = result[0];
            const channel = result[1];
            setVideoData({
                videoId: video.id,
                channelId: channel.id,
                description: video.snippet.description,
                videoTitle: video.snippet.title,
                date: video.snippet.publishedAt,
                videoThumbnail: video.snippet.thumbnails.maxres ? video.snippet.thumbnails.maxres.url : video.snippet.thumbnails.medium.url,
                viewCount: video.statistics.viewCount,
                like: video.statistics.likeCount,
                dislike: video.statistics.dislikeCount,
                comment: video.statistics.commentCount,
                tags: video.snippet.tags,
                channelTitle: channel.snippet.title,
                channelImg: channel.snippet.thumbnails.default.url,
                subscriber: channel.statistics.subscriberCount
            });
            setLoading(false);
        });

    }, [video, youtube]);

    return (

        <>
            {loading === true ? (
                <div></div>)
                : (
                    <li className={`${styles.video} ${display === 'list' ? styles.list : styles.grid} ${search ? styles.search : ''}`} onClick={() => onVideoClick(videoData)}>
                        <img src={videoData.videoThumbnail} className={styles.thumbnail} alt='thumbnail'></img>
                        <div className={styles.metadata}>
                            {channelImg && !search && (<img src={videoData.channelImg} className={styles.channelImg} alt='channel' />)}
                            <div className={styles.infoBox}>
                                <p className={styles.videoTitle}>{videoData.videoTitle}</p>
                                {search && <p className={styles.viewCountAndDate}>{`조회수 ${util.countConverter(parseInt(videoData.viewCount))}회 • `}
                                    <span className={styles.date}>{util.agoConverter(videoData.date)}</span>
                                </p>}
                                <div className={styles.channelBox}>
                                    {search && <img src={videoData.channelImg} className={styles.searchChannelImg} alt='channel' />}
                                    <p className={styles.channelName}>{videoData.channelTitle}</p>
                                </div>
                                {!search && <p className={styles.viewCountAndDate}>{`조회수 ${util.countConverter(parseInt(videoData.viewCount))}회 • `}
                                    <span className={styles.date}>{util.agoConverter(videoData.date)}</span>
                                </p>}
                                {search && <div className={styles.description}>{videoData.description}</div>}
                            </div>
                        </div>
                    </li>
                )}
        </>
    );


});
export default VideoItem;