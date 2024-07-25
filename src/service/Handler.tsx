import { httpClientType } from "../type/common";

class ServiceHandler {
    youtube: any;
    htmlTitle: any;
    defaultVideos: any;
    setVideos: any;
    setSelectedVideo: any;
    navigate: any;
    setLoading: any;
    
    constructor(youtube: httpClientType, htmlTitle: any, defaultVideos: any, setVideos: any, setSelectedVideo: any, navigate: any, setLoading: any) {
        this.youtube = youtube;
        this.htmlTitle = htmlTitle;
        this.defaultVideos = defaultVideos;
        this.setVideos = setVideos;
        this.setSelectedVideo = setSelectedVideo;
        this.navigate = navigate;
        this.setLoading = setLoading;
    }

    selectVideo = (video: any) => {
        this.navigate(`/watch?v=${video.videoId}`);
        this.htmlTitle.textContent = `(8) ${video.videoTitle}`;
        this.setLoading(true);
        this.setSelectedVideo(video);
        this.youtube.getRcmData(video.videoId).then((videos: any) => {
            this.setVideos(videos);
            this.setLoading(false);
        })
    }

    handleSearch = (query: any) => {
        this.htmlTitle.textContent = `(8) ${query} - Youtube`;
        this.navigate(`/results?search_query=${query}`);
        this.setLoading(true);
        this.setSelectedVideo(null);
        this.youtube.getSearchResult(query).then((videos: any) => {
            this.setVideos(videos);
            this.setLoading(false);
        })
    }

    clickLogo = () => {
        this.htmlTitle.textContent = 'Youtube';
        this.navigate('/');
        this.setLoading(true);
        this.setVideos(this.defaultVideos);
        this.setLoading(false);
    }

    mostPopular = () => {
        this.youtube.getMostPopular().then((videos: any) => {
            this.setVideos(videos);
            this.setLoading(false);
            this.defaultVideos = videos;
            sessionStorage.setItem('defaultVideos', JSON.stringify(this.defaultVideos));
        });
    }
}

export default ServiceHandler;