import NextLink from "next/link";

import { Movie } from "../../interfaces/movie.interface";
import styles from "./styles.module.scss";

interface FeaturedMovieProps {
  movie: Movie;
}

export const FeaturedMovie = ({ movie }: FeaturedMovieProps) => {
  const releaseDate = new Date(movie.first_air_date);

  return (
    <div
      className={styles.featured}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.featured__gradient}>
        <div className={styles.featured__container}>
          <div className={styles.featured__title}>{movie.name}</div>
          <div className={styles.featured__info}>
            <div className={styles.featured__score}>{movie.vote_average} Pontos</div>
            <div className={styles.featured__release}>{releaseDate.getFullYear()}</div>
          </div>
          <div className={styles.featured__overview}>{movie.overview}</div>
          <div className={styles.featured__action}>
            <NextLink href="/">▶ Assistir</NextLink>
            <NextLink href="/">+ Adicionar</NextLink>
          </div>
          <div className={styles.featured__genres}>{movie.genres}</div>
        </div>
      </div>
    </div>
  );
};
