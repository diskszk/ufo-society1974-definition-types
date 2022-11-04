type Album = {
  description: string;
  imageFile: File;
  id: string;
  publishedDate: string;
  songs: Song[] | [];
  title: string;
  publishPlatform: PublishPlatform;
};

type File = {
  filename: string;
  path: string;
};

type Song = {
  id: string;
  lyric: string;
  songFile: File;
  story: string;
  title: string;
  wordsRights: string;
  musicRights: string;
};

type PublishPlatform = {
  AppleMusic: string;
  Spotify: string;
  iTunes: string;
  Bandcamp: string;
};

export { Album, File, Song, PublishPlatform };
