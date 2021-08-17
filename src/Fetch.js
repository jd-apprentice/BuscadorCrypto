// Imports
import { useState, useEffect } from "react";
import AgregarFavoritos from "./components/AgregarFavoritos";
import UseIcon from "./components/Icon";

// Fetch

const Getcrypto = ({ busqueda, numero }) => {
  const [crypto, setCrypto] = useState([]);

  // URL

  let enlance = `https://api.coinlore.net/api/tickers/?start=${numero}&limit=20`;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numero]);

  // Pintar tabla
  const PintarTabla = ({
    id,
    rank,
    symbol,
    name,
    price_usd,
    market_cap_usd,
    volume24,
    percent_change_7d,
    percent_change_24h,
  }) => {
    return (
      <>
        <tr>
          <td>
            <AgregarFavoritos />
          </td>
          <td id={id}>{rank}</td>
          <td>
            <UseIcon symbolCurrency={symbol} />
            {name}
            <span className="ms-3 text-muted text-uppercase small">
              {symbol.toLowerCase()}
            </span>
          </td>
          <td>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price_usd)}
          </td>
          <td>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(market_cap_usd)}
          </td>
          <td>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(volume24)}
          </td>
          <td
            className={percent_change_24h > 0 ? "text-success" : "text-danger"}
          >
            {`${percent_change_24h}%`}
          </td>
          <td
            className={percent_change_7d > 0 ? "text-success" : "text-danger"}
          >
            {`${percent_change_7d}%`}
          </td>
        </tr>
      </>
    );
  };

  // Filtar, mapear, pintar y pasar props
  return (
    <>
      {crypto
        // eslint-disable-next-line array-callback-return
        .filter((moneda) => {
          if (
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
                key={symbol}
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
