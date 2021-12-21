export type Genre = {
  id: number;
  name: string;
};

export interface Featured {
  id: number;
  original_title: string;
  title: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  poster_path: string;
}
