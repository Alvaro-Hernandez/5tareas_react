import { useState } from "react";
import { esculturaList } from "./data";

export default function MuestraOculta() {
  const [showMore, setShowMore] = useState(false);

  function showMoreLess() {
    setShowMore(!showMore);
  }
  let escultura = esculturaList[0];
  return (
    <>
      <h2>
        <i>{escultura.name}</i>
        by {escultura.artist}
      </h2>
      <button onClick={showMoreLess}>
        {showMore ? "Menos" : "Mas"} Detalles
      </button>
      {showMore && <p>{escultura.description}</p>}
      <img src={escultura.url} alt={escultura.alt} />
    </>
  );
}
