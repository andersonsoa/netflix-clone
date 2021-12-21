import { Movies } from "./movie.interface";

export type Category = {
  slug: string;
  title: string;
  movies: Movies;
};
