// Imports
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Getcryto from "./Fetch";
import React from "react";
import BarraNav from "./components/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";
import { Button } from "react-bootstrap";

// Valores estaticos de la tabla
export const ValoresTabla = ({ busqueda, numero }) => {
  return (
    <>
      <thead>
        <tr>
          <th></th>
          <th>Rank</th>
          <th>Nombre</th>
          <th>Precio Actual</th>
          <th>Market Cap</th>
          <th>Volumen en 24hs</th>
          <th>% 24hs</th>
          <th>% 7dias</th>
        </tr>
      </thead>
      <tbody>
        <Getcryto numero={numero} busqueda={busqueda} />
      </tbody>
    </>
  );
};

// Funciones

const ContenidoTabla = () => {
  const [busqueda, setBusqueda] = useState("");
  let [numero, setNumero] = useState(0);

  let aumentarNumero = () => {
    setNumero((numero += 20));
  };

  let restarNumero = () => {
    if (numero == 0) {
      return numero;
    } else {
      setNumero((numero -= 20));
    }
  };

  return (
    // Estructura tabla y barra de busqueda
    <Container>
      <BarraNav />
      <InputGroup className="my-3 d-flex">
        <Button className="mx-2" onClick={restarNumero} variant="dark">
          <span>Atras</span>
        </Button>
        <FormControl
          id="buscadorTexto"
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busca tu moneda en los valores de tabla actual, por nombre y simbolo"
        />
        <Button className="mx-2" onClick={aumentarNumero} variant="dark">
          <span>Adelante</span>
        </Button>
      </InputGroup>
      <Table responsive striped bordered hover variant="dark">
        <ValoresTabla numero={numero} busqueda={busqueda} />
      </Table>
    </Container>
  );
};

export default ContenidoTabla;
