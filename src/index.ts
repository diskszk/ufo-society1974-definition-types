type Album = {
  description: string;
  imageFile: File | null;
  id: string;
  publishedDate: string;
  title: string;
};

type File = {
  filename: string;
  path: string;
};

type Song = {
  id: string;
  lyric: string;
  songFile: File | null;
  story: string;
  title: string;
  wordsRights: string;
  musicRights: string;
};

const MASTER = "master" as const;
const EDITOR = "editor" as const;
const WATCHER = "watcher" as const;

type User = {
  isSignedIn: boolean;
  uid: string;
  username: string;
  role: typeof EDITOR | typeof MASTER | typeof WATCHER;
  email: string;
  isDeleted: boolean;
};

export { Album, User, Song };
