import { useContext, useState } from "react";
import { useApiContext } from "../../context/ApiContext";

export default function Main() {
  const { movies, search } = useApiContext();
  return (
    <>
      <div>
        <h2>Film</h2>
        {movies.map((movie) => (
          <ul key={movie.id}>
            <li>{movie.title}</li>
            <li>{movie.original_title}</li>
            <li>{movie.original_language}</li>
            <li>{movie.vote_average}</li>
          </ul>
        ))}
      </div>
    </>
  );
}
