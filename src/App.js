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
      <h2>Ejercicios React</h2>
      <h3>
        1. Crea un Contador que pueda ser incrementado y decrementado por un
        botón
      </h3>
      <Task />
      <hr></hr>
      <h3>
        5.Crea una aplicacción que muestre y oculte una seccion de texto al
        hacer click en un botón
      </h3>
      <MuestraOculta />
    </>
  );
}

export default AllTask;
