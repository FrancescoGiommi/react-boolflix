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
      <div
        className="d-flex justify-content-between px-5 py-3 bg-dark"
        data-bs-theme="dark"
      >
        <h1 className="text-danger">Booflix</h1>

        <form onSubmit={handleFormSubmit} className="d-flex ">
          <div>
            <input
              onChange={handleDataInput}
              type="text"
              value={dataInput}
              class="form-control me-2"
              placeholder="Cerca"
            />
          </div>
          <div>
            <button class="btn btn-outline-light ms-4">Cerca</button>
          </div>
        </form>
      </div>
    </>
  );
}
