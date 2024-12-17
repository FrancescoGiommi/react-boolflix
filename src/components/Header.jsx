import { useState } from "react";
import { useApiContext } from "../../context/ApiContext";

export default function Header() {
  const [dataInput, setDataInput] = useState("");

  const { search } = useApiContext();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    search(dataInput);
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
          <button onClick={() => search()}>Cerca</button>
        </div>
      </form>
    </>
  );
}
