import { useEffect, useState } from "react";
import { Category } from "../interfaces/category.interface";
import { Featured } from "../interfaces/featured.interface";
import { Movie } from "../interfaces/movie.interface";
import { api } from "../services/clientApi";

export const useMovies = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie>();

  useEffect(() => {
    async function loadMovies() {
      const randomNumber = Math.floor(Math.random() * 20);

      const [originals, toprated, trending, action, comedy] = await Promise.all([
        api.get("originals"),
        api.get("toprated"),
        api.get("trending"),
        api.get("movies?genre=28"),
        api.get("movies?genre=35"),
      ]);

      setCategories([
        {
          slug: "originals",
          title: "Originais da Netflix",
          movies: originals.data.results,
        },
        {
          slug: "trending",
          title: "Destaques da Semana",
          movies: trending.data.results,
        },
        {
          slug: "toprated",
          title: "Mais Vistos",
          movies: toprated.data.results,
        },
        {
          slug: "action",
          title: "Filmes de Ação",
          movies: action.data.results,
        },
        {
          slug: "comedy",
          title: "Filmes de Comédia",
          movies: comedy.data.results,
        },
      ]);

      const selectedMovie = originals.data.results[randomNumber];

      try {
        const rawMovie = await api.get<Featured>(`movies/${selectedMovie.id}`);

        setFeaturedMovie({ ...selectedMovie, genres: rawMovie.data.genres.map((g) => g.name).join(", ") });
      } catch {
        setFeaturedMovie(selectedMovie);
      }
    }

    loadMovies();
  }, []);

  return { categories, featuredMovie };
};
