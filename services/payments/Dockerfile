FROM node:21.1.0

WORKDIR /usr/src/app

# Copiar archivos de la aplicación
COPY package.json ./
COPY tsconfig.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Compilar TypeScript
RUN npm run build

ENV PORT=3000
EXPOSE 3002

CMD ["node", "dist/index.js"]