import Container from "../components/Container";

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Acerca de NGINX</h1>

      <section className="space-y-4">
        <p>
          Demo educativa para mostrar <strong>NGINX</strong> sirviendo una SPA
          (<strong>Vite + React</strong>) y funcionando como proxy inverso hacia
          un backend.
        </p>

        <p>
          <strong>NGINX</strong> (pronunciado “engine-ex”) es un servidor web de
          código abierto diseñado para manejar un gran número de conexiones
          simultáneas con alta eficiencia. Fue creado por{" "}
          <em>Igor Sysoev</em> en 2004 y actualmente es uno de los servidores
          más utilizados en el mundo.
        </p>

        <p>
          Su principal fortaleza radica en su arquitectura{" "}
          <em>asíncrona y basada en eventos</em>, lo que le permite atender miles
          de peticiones de forma concurrente sin crear un proceso o hilo por cada
          conexión, reduciendo drásticamente el consumo de recursos.
        </p>

        <h2 className="text-2xl font-semibold mt-6">¿Para qué sirve?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Servidor web:</strong> puede servir archivos estáticos como
            HTML, CSS, imágenes y aplicaciones completas construidas con React,
            Vue o Angular.
          </li>
          <li>
            <strong>Proxy inverso:</strong> actúa como intermediario entre el
            usuario y los servidores backend, redirigiendo las peticiones hacia
            donde corresponda (por ejemplo, a una API en Node.js).
          </li>
          <li>
            <strong>Balanceador de carga:</strong> distribuye el tráfico entre
            varios servidores backend para mejorar el rendimiento y la
            disponibilidad.
          </li>
          <li>
            <strong>Caché de contenido:</strong> almacena temporalmente
            respuestas del servidor para acelerar peticiones repetidas y reducir
            la carga.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">NGINX y las SPA</h2>
        <p>
          En esta demo, NGINX está sirviendo una aplicación{" "}
          <strong>SPA (Single Page Application)</strong> creada con{" "}
          <strong>Vite + React</strong>. Esto significa que toda la aplicación
          corre desde un único archivo <code>index.html</code> y NGINX se encarga
          de devolverlo sin importar la ruta que visites.
        </p>
        <p>
          Además, NGINX funciona como <strong>proxy inverso</strong> para el
          backend: cuando el navegador realiza una solicitud a{" "}
          <code>/api</code>, NGINX la redirige automáticamente al servidor
          Express configurado detrás.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Ventajas principales</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Rendimiento altísimo y consumo mínimo de memoria.</li>
          <li>Capacidad de manejar miles de conexiones concurrentes.</li>
          <li>
            Ideal para arquitecturas modernas con microservicios o contenedores.
          </li>
          <li>
            Configuración flexible mediante archivos simples (
            <code>nginx.conf</code>).
          </li>
          <li>
            Compatible con Docker y herramientas de despliegue en la nube.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">En esta clase...</h2>
        <p>
          Aprendiste a levantar NGINX rápidamente usando Docker, servir una
          aplicación SPA de React y redirigir peticiones hacia un backend
          Node.js. Este mismo enfoque se utiliza en entornos productivos para
          ofrecer aplicaciones modernas con rendimiento y seguridad profesional.
        </p>

        <p className="italic text-gray-600">
          🔧 Próximamente exploraremos cómo agregar HTTPS, balanceo de carga y
          optimización de archivos estáticos con NGINX.
        </p>

        <div className="mt-6">
          <a
            href="https://nginx.org/en/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Leer documentación oficial de NGINX
          </a>
        </div>
      </section>
    </Container>
  );
}
