FROM node:22.14.0-bullseye-slim
WORKDIR /webapp
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["node", "./.output/server/index.mjs"]
