import Image from "next/image";
import { SyntheticEvent } from "react";
import { Category } from "../../interfaces/category.interface";
import styles from "./style.module.scss";

interface IMovieRow {
  category: Category;
}

export const MovieRow = ({ category }: IMovieRow) => {
  const handleLeftClick = (e: SyntheticEvent) => {
    const list = e.currentTarget.parentElement;
    const distance = Math.round(window.innerWidth / 2);
    const currentPosition = list.scrollLeft;
    list.scrollTo({ left: currentPosition - distance, behavior: "smooth" });
  };
  const handleRightClick = (e: SyntheticEvent) => {
    const list = e.currentTarget.parentElement;
    const distance = Math.round(window.innerWidth / 2);
    const currentPosition = list.scrollLeft;
    list.scrollTo({ left: currentPosition + distance, behavior: "smooth" });
  };

  return (
    <div className={styles.movie__row}>
      <h2>{category.title}</h2>

      <div className={styles.movie__list}>
        <div className={styles.movie__left_click} onClick={handleLeftClick}>
          ◀
        </div>
        <div className={styles.movie__right_click} onClick={handleRightClick}>
          ▶
        </div>

        {category.movies.map((movie) => {
          return (
            <div key={movie.id} className={styles.movie__poster}>
              <Image
                className={styles.movie__image}
                alt={movie.original_title}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
