// Imports
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Getcryto from "./Fetch";
import React from "react";
import BarraNav from "./Navbar";

// Valores estaticos de la tabla
export const ValoresTabla = () => {
  return (
    <>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Nombre</th>
          <th>Precio Actual</th>
          <th>Market Cap</th>
          <th>% 24hs</th>
          <th>% 7 dias</th>
        </tr>
      </thead>
      <tbody>
        <Getcryto />
      </tbody>
    </>
  );
};

// Estructura tabla
const ContenidoTabla = () => {
  return (
    <Container fluid>
      <BarraNav />
      <Table responsive striped bordered hover variant="dark">
        <ValoresTabla />
      </Table>
    </Container>
  );
};

export default ContenidoTabla;
