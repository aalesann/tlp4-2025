# Guía: Docker Compose con Express

## Estructura basica esperada del proyecto

```
mi-proyecto/
├── src/
│   ├── app.ts
│   ├── routes/
│   └── ...
├── dist/
├── package.json
├── tsconfig.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── .env.example
```

---

## 1. Archivo `.dockerignore`

```txt
node_modules
dist
.git
.env
Dockerfile
docker-compose.yml
```

---

## 2. Archivo `Dockerfile`

```dockerfile
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

---

## 3. Archivo `docker-compose.yml`

```yaml
services:
  app:
    build: .
    container_name: express_app
    restart: always
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      - mongo
    networks:
      - app-network

  mongo:
    image: mongo:6
    container_name: mongo_db
    restart: always
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
    driver: bridge
```

---

## 4. Comandos útiles

| Acción                                | Comando                     |
| ------------------------------------- | --------------------------- |
| Construir y levantar los contenedores | `docker-compose up --build` |
| Ver logs en tiempo real               | `docker-compose logs -f`    |
| Detener los contenedores              | `docker-compose down`       |
| Eliminar volúmenes también            | `docker-compose down -v`    |

---
