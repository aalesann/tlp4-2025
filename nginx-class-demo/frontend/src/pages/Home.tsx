import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-2">Bienvenido 👋</h1>
      <p className="mb-4">
        Esta SPA está servida por NGINX. El backend está detrás del proxy en <code>/api</code>.
      </p>
      <ul className="list-disc ml-6">
        <li>Probá navegar a <strong>API Demo</strong> y ejecutar una consulta.</li>
        <li>Actualizá el navegador en cualquier ruta: NGINX sirve <code>index.html</code> para SPA.</li>
      </ul>
    </Container>
  );
}
