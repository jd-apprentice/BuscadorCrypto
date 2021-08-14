// Imports
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useState, useEffect } from "react";
import AgregarFavoritos from "./AgregarFavoritos";

// Arrarys

export let nombreCrypto = [];
export let precioCrypto = [];
export let marketCrypto = [];
export let porcentajeCrypto24hs = [];
export let porcentajeCrypto = [];
export let rankCrypto = [];

// Variables

const enlance = "https://api.coinlore.net/api/tickers/?limit=20";

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

  // Pintar la tabla
  const PintarTabla = (props, key) => {
    return (
      <tr key={props.key}>
        <th className="d-flex justify-content-between" id={props.id}>
          {(rankCrypto = "\n#" + props.rank)}
          <AgregarFavoritos className="text-center" />
        </th>
        <th>{(nombreCrypto = "\n" + props.name)}</th>
        <th>{(precioCrypto = "\n " + props.price_usd)}</th>
        <th>{(marketCrypto = "\n$" + props.market_cap_usd)}</th>
        <th>{(porcentajeCrypto24hs = "\n %" + props.percent_change_24h)}</th>
        <th>{(porcentajeCrypto = "\n % " + props.percent_change_7d)}</th>
      </tr>
    );
  };

  // Barra de búsqueda por nombre de las monedas, filtar, mapear y pintar
  return (
    <>
      <InputGroup size="sm" className="my-3">
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
        .map((props) => {
          return (
            <PintarTabla
              key={props.symbol}
              id={props.id}
              rank={props.rank}
              name={props.name}
              price_usd={props.price_usd}
              market_cap_usd={props.market_cap_usd}
              percent_change_24h={props.percent_change_24h}
              percent_change_7d={props.percent_change_7d}
            />
          );
        })}
    </>
  );
};

export default Getcrypto;
