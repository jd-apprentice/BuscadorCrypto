// Imports
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Getcryto from "./Fetch";
import Badge from "react-bootstrap/Badge";

// Valores estaticos de la tabla
export const ValoresTabla = (props) => {
  return (
    <>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Nombre</th>
          <th>Precio Actual</th>
          <th>Porcentaje en 7 dias</th>
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
      <Badge className="fs-2 my-3" bg="dark">
        Buscador de Cryptomonedas
      </Badge>
      <Table responsive striped bordered hover variant="dark">
        <ValoresTabla />
      </Table>
    </Container>
  );
};

export default ContenidoTabla;
