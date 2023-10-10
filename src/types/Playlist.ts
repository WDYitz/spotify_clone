import { SongType } from "./Song";

export type PlaylistType = {
  image: string;
  playlist_title: string;
  playlist: SongType[];
};
