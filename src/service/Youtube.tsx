import { httpClientType } from "../type/common.tsx";

class Youtube {
    youtube: httpClientType;

    constructor(httpClient: httpClientType) {
        this.youtube = httpClient;
    }

    async getMostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 28,
                fields: 'items(id,snippet(channelId))',
                regionCode: 'KR',
            }
        })

        return response.data.items;
    }

    async getSearchResult(query: any) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                type: 'video',
                q: query,
                maxResults: 10,
                fields: 'items(id(videoId),snippet(channelId))',
            }
        })

        return response.data.items;
    }

    async getRcmData(videoId: any) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 10,
                fields: 'items(id.videoId,snippet(channelId))',
            },
        });
        return response.data.items.map((item: any) => ({ ...item, id: item.id.videoId }));
    }

    async fetchVideoData(videoId: string) {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet, statistics',
                id: videoId,
                fields: 'items(id,snippet(publishedAt,title,description,thumbnails.maxres.url,thumbnails.medium.url,tags),statistics(viewCount,likeCount,dislikeCount,commentCount))',
            }
        });
        return response.data.items[0];
    }

    async fetchChannelData(channelId: string) {
        const response = await this.youtube.get('channels', {
            params: {
                part: 'snippet,statistics',
                id: channelId,
                fields: 'items(id,snippet(title,thumbnails.default.url),statistics(subscriberCount))',
            }
        });
        return response.data.items[0];
    }

    getAllData(videoId: string, channelId: string) {
        return Promise.all([this.fetchVideoData(videoId), this.fetchChannelData(channelId)]);
    }
}

export default Youtube;