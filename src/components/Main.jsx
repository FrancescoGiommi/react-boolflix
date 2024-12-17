import { useApiContext } from "../../context/ApiContext";
import ListProduction from "./ListProduction";
export default function Main() {
  const { movies } = useApiContext();
  return (
    <>
      <div>
        <ListProduction Production={movies}>
          <h2>Film</h2>
        </ListProduction>
        <hr />
        <h2>Series</h2>
      </div>
    </>
  );
}
