FROM node:18-alpine

WORKDIR /app

COPY equinox/package*.json ./

RUN npm install

COPY equinox/ .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]