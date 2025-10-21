FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev || npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["node", "dist/app.js"]
