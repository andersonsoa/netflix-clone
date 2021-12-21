export type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name: string;
  original_title: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  genres: string;
};

export type Movies = Movie[];
