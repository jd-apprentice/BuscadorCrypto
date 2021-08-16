// Imports
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Getcryto from "./Fetch";
import React from "react";
import BarraNav from "./components/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";

// Valores estaticos de la tabla
export const ValoresTabla = ({ busqueda }) => {
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
        <Getcryto busqueda={busqueda} />
      </tbody>
    </>
  );
};

// Estructura tabla y barra de busqueda
const ContenidoTabla = () => {
  const [busqueda, setBusqueda] = useState("");
  return (
    <Container>
      <BarraNav />
      <InputGroup className="my-3 d-flex">
        <FormControl
          id="buscadorTexto"
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busca tu moneda por nombre o simbolo"
        />
      </InputGroup>
      <Table responsive striped bordered hover variant="dark">
        <ValoresTabla busqueda={busqueda} />
      </Table>
    </Container>
  );
};

export default ContenidoTabla;
