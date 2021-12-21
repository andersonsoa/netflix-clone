import { useMovies } from "../hooks/useMovies";

import { Header } from "../components/Header";
import { MovieRow } from "../components/MovieRow";
import { FeaturedMovie } from "../components/FeaturedMovie";

import styles from "./home.module.scss";

export default function Home() {
  const { categories, featuredMovie } = useMovies();

  return (
    <section>
      <Header />

      {featuredMovie && <FeaturedMovie movie={featuredMovie} />}

      <div className={styles.category__section}>
        {categories.map((category, key) => (
          <MovieRow key={key} category={category} />
        ))}
      </div>
    </section>
  );
}
