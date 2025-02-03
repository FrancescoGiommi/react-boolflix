import { useApiContext } from "../../context/ApiContext";
import ListProduction from "./ListProduction";

export default function Main() {
  const { movies, series } = useApiContext();
  const hasResults = movies.length > 0 || series.length > 0;

  return (
    <div>
      {hasResults ? (
        <>
          {movies.length > 0 && (
            <ListProduction Production={movies}>
              <h2>Film</h2>
            </ListProduction>
          )}
          <hr />
          {series.length > 0 && (
            <ListProduction Production={series}>
              <h2>Serie TV</h2>
            </ListProduction>
          )}
        </>
      ) : (
        <h1>Prova a cercare un Film o una Serie TV!</h1>
      )}
    </div>
  );
}
