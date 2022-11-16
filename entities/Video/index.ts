export class Video {
  readonly id: string;
  title: string;
  description: string;
  url: string;
  favorite: boolean;

  constructor (title: string, description: string, url: string) {
    this.id = Math.random().toString(32).slice(2, 7);
    this.title = title;
    this.description = description;
    this.url = url;
    this.favorite = false;
  }

  favoritize() {
    this.favorite = !this.favorite;
  }

  edit(title: string, description: string, url: string) {
    this.title = title;
    this.description = description;
    this.url = url;
  }
  

}