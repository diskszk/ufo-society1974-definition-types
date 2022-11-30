import type { Timestamp } from "firebase/firestore";
import "firebase/firestore";

type Album = {
  description: string;
  imageFile: File | null;
  id: string;
  publishedDate: string;
  title: string;

  createdAt?: Timestamp;
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

  createdAt?: Timestamp;
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

  createdAt?: Timestamp;
};

export { Album, User, Song };
