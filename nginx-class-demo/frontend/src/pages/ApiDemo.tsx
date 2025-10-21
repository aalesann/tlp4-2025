import { useEffect, useState } from "react";
import Container from "../components/Container";
import { api } from "../lib/api";

type ApiResponse = { message: string } | Record<string, unknown>;

export default function ApiDemo() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const fetchApi = async () => {
    setLoading(true);
    setErr(null);
    try {
      // Llamamos con ruta relativa (''), la base (API_BASE) ya contiene '/api'
      // Si tu backend expone otra ruta, usa 'ping' o 'status' por ejemplo.
      const res = await api.get<ApiResponse>("");
      setData(res);
    } catch (e: any) {
      setErr(e.message ?? "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Carga inicial opcional
    // fetchApi();
  }, []);

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4">API Demo</h1>

      <div className="flex gap-2 mb-4">
        <button
          onClick={fetchApi}
          className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Consultar Backend
        </button>
      </div>

      {loading && <p>Cargando…</p>}
      {err && <p className="text-red-600">Error: {err}</p>}
      {data && (
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Container>
  );
}
