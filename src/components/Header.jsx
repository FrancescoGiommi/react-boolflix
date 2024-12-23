import { useState } from "react";
import { useApiContext } from "../../context/ApiContext";

export default function Header() {
  const [dataInput, setDataInput] = useState("");

  const { searchMovie, searchSeries } = useApiContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    searchMovie(dataInput);
    searchSeries(dataInput);
  };

  const handleDataInput = (e) => {
    setDataInput(e.target.value);
  };
  return (
    <>
      <h1 className="mt-5">Booflix</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input onChange={handleDataInput} type="text" value={dataInput} />
        </div>
        <div>
          <button>Cerca</button>
        </div>
      </form>
    </>
  );
}
