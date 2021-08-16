// Imports

import { useState, useEffect } from "react";
import AgregarFavoritos from "./components/AgregarFavoritos";
import UseIcon from "./components/Icon";

// Arrarys

export let nombreCrypto = [];
export let volumeCrypto = [];
export let precioCrypto = [];
export let marketCrypto = [];
export let porcentajeCrypto24hs = [];
export let porcentajeCrypto = [];
export let rankCrypto = [];

// Fetch

const Getcrypto = ({ busqueda }) => {
  const [crypto, setCrypto] = useState([]);

  // URL
  let enlance = `https://api.coinlore.net/api/tickers/?start=0&limit=20`;

  // Datos almacenados en un array (crypto)
  const obtenerDatos = async () => {
    const datos = await fetch(enlance);
    const response = await datos.json();
    setCrypto(response.data);
    return crypto;
  };

  // Obtener datos de la API
  useEffect(() => {
    obtenerDatos();
  }, []);

  // Pintar tabla
  const PintarTabla = ({
    id,
    rank,
    symbol,
    name,
    price_usd,
    market_cap_usd,
    percent_change_7d,
    percent_change_24h,
    volume24,
  }) => {
    return (
      <tr>
        <td>
          <AgregarFavoritos />
        </td>
        <td id={id}>{(rankCrypto = "\n#" + rank)}</td>
        <td>
          <UseIcon symbolCurrency={symbol} />
          {(nombreCrypto = "\n" + name)}
          <span className="ms-3 text-muted text-uppercase small">
            {symbol.toLowerCase()}
          </span>
        </td>
        <td>
          {
            (precioCrypto =
              "\n" +
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price_usd))
          }
        </td>
        <td>
          {
            (marketCrypto =
              "\n" +
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(market_cap_usd))
          }
        </td>
        <td>
          {
            (volumeCrypto =
              "\n" +
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(volume24))
          }
        </td>
        <td
          className={porcentajeCrypto24hs > 0 ? "text-success" : "text-danger"}
        >
          {(porcentajeCrypto24hs = "\n  " + percent_change_24h) + "%"}
        </td>
        <td className={porcentajeCrypto > 0 ? "text-success" : "text-danger"}>
          {(porcentajeCrypto = "\n " + percent_change_7d) + "%"}
        </td>
      </tr>
    );
  };

  // Filtar, mapear, pintar y pasar props
  return (
    <>
      {crypto
        .filter((moneda) => {
          if (busqueda === "") {
            return moneda;
          } else if (
            moneda.name.toLowerCase().includes(busqueda.toLowerCase()) ||
            moneda.symbol.toLowerCase().includes(busqueda.toLowerCase())
          ) {
            return moneda;
          }
        })
        .map(
          ({
            symbol,
            key,
            id,
            rank,
            name,
            price_usd,
            market_cap_usd,
            volume24,
            percent_change_24h,
            percent_change_7d,
          }) => {
            return (
              <PintarTabla
                symbol={symbol}
                key={key}
                id={id}
                rank={rank}
                name={name}
                price_usd={price_usd}
                market_cap_usd={market_cap_usd}
                volume24={volume24}
                percent_change_24h={percent_change_24h}
                percent_change_7d={percent_change_7d}
              />
            );
          }
        )}
    </>
  );
};

export default Getcrypto;
