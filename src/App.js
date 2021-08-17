// Imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../node_modules/react-bootstrap/Container";
import ContenidoTabla from "./Tabla";
import { Link, Route } from "wouter";

// Estructura Aplicación
const App = () => {
  return (
    <>
      <Container>
        <Route component={ContenidoTabla} path="/" />
      </Container>
    </>
  );
};

export default App;
