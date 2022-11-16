import  { Playlist } from './Playlist'

export class User {
  id: string;
  playlist: Playlist;
  name?: string;
  picture?: string;
  description?: string;

  constructor(id: string, playlist: Playlist, name?: string, picture?: string, description?: string) {
    this.id = id;
    this.name = name;
    this.playlist = playlist;
    this.picture = picture;
    this.description = description;
  }

  getUser() {
    return this;
  }

  updateUser(name: string, picture: string, description: string) {
    this.name = name;
    this.picture = picture;
    this.description = description;
  }
}