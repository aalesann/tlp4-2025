# Actividad Práctica: Implementación de Docker Compose en un servidor

## 🎯 Objetivo

Contenerizar el servidor desarrollado previamente en la _Actividad Práctica: Desarrollo con TypeScript_ y utilizando **Docker Compose**, de modo que tanto la aplicación como la base de datos puedan ejecutarse en contenedores interconectados con un solo comando.

---

## 📋 Consigna

Siguiendo la guía de **Docker**, se deberá:

1. **Crear un archivo `Dockerfile`** en la raíz del proyecto que:

   - Defina la imagen base (por ejemplo: `node:20-alpine`).
   - Copie los archivos del proyecto.
   - Instale las dependencias.
   - Compile (si fuese necesario).
   - Exponga el puerto del servidor.
   - Defina el comando de inicio (`npm run dev` o equivalente).

2. **Crear un archivo `.dockerignore`** que excluya archivos innecesarios, como:

   ```
   node_modules
   dist
   .env
   .git
   ```

3. **Crear un archivo `docker-compose.yml`** en la raíz del proyecto con los siguientes requisitos:

   - Debe incluir **dos servicios**:
     - `api`: tu servidor (basado en el `Dockerfile` que creaste).
     - `db`: una base de datos (por ejemplo: MongoDB).
   - Ambos servicios deben estar conectados en la misma red interna.
   - Las variables de entorno deben configurarse correctamente (por ejemplo: conexión a la base de datos).
   - El puerto del servidor debe mapearse para poder acceder desde el host.
   - Debe definirse **volumenes**.

4. **Comprobar que el servidor funciona correctamente** y se conecta a la base de datos desde el contenedor.

---

## Entrega

- Volver a enviar en la tarea nueva el link del repositorio pero ya actualizado con los archivos:
  - `Dockerfile`
  - `.dockerignore`
  - `docker-compose.yml`
- Archivo `.env.example` con las variables necesarias.
- Breve explicación en el `README.md` de cómo levantar el entorno usando Docker Compose.
