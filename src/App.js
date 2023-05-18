import { useState } from "react";
import MuestraOculta from "./ButtonComponent";
//import FormList from "./Form";

function Task() {
  const [index, setIndex] = useState(0);

  function sumarIndex() {
    setIndex(index + 1);
  }
  function restarIndex() {
    setIndex(index - 1);
  }

  return (
    <>
      <h2>Contador</h2>
      <h3>{index + 1}</h3>
      <button onClick={restarIndex}> - </button>
      <button onClick={sumarIndex}> + </button>
    </>
  );
}

function AllTask() {
  return (
    <>
      <Task />
      <hr></hr>
      <MuestraOculta />
    </>
  );
}

export default AllTask;
