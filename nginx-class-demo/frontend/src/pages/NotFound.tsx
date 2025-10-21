import Container from "../components/Container";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-2">404 - No encontrado</h1>
      <p className="mb-4">La ruta que buscás no existe.</p>
      <Link to="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
    </Container>
  );
}
