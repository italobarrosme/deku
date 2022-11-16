import { Video } from '../Video';

export class Playlist {
  name: string;
  videos: Video[] = [];

  
  constructor (videos: Video[], name: string) {
    this.name = name
    this.videos = videos;
  }

  addVideo(video: any) {
    this.videos.push(video);
  }

  removeVideo(video: any) {
    this.videos.splice(this.videos.indexOf(video), 1);
  }

  getVideos() {
    return this.videos;
  }

} 