// Imports
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useState, useEffect } from "react";

// Arrarys

export let nombreCrypto = [];
export let precioCrypto = [];
export let porcentajeCrypto = [];
export let rankCrypto = [];

// Variables

const enlance = "https://api.coinlore.net/api/tickers/";

// Fetch

const Getcrypto = () => {
  const [crypto, setCrypto] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // Datos almacenados en un array (crypto)
  const obtenerDatos = async () => {
    const datos = await fetch(enlance);
    const response = await datos.json();
    setCrypto(response.data);
    return crypto;
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  // Barra de búsqueda por nombre de las monedas, filtar, mapear y pintar
  return (
    <>
      <InputGroup className="my-3">
        <FormControl
          id="buscadorTexto"
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busca tu moneda por nombre"
        />
      </InputGroup>
      {crypto
        .filter((props) => {
          if (busqueda === "") {
            return props;
          } else if (
            props.name.toLowerCase().includes(busqueda.toLowerCase())
          ) {
            return props;
          }
        })
        .map((props, llave) => {
          return (
            <tr>
              <th key={llave} id={props.id}>
                {(rankCrypto = "\n#" + props.rank)}
              </th>
              <th className={props.symbol}>
                {(nombreCrypto = "\n" + props.name)}
              </th>
              <th>{(precioCrypto = "\n$ " + props.price_usd)}</th>
              <th>{(porcentajeCrypto = "\n % " + props.percent_change_7d)}</th>
            </tr>
          );
        })}
    </>
  );
};

export default Getcrypto;
