FROM node:21.1.0

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

ENV PORT=3000
EXPOSE 3004

CMD ["node", "dist/index.js"]