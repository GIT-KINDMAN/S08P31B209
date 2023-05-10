FROM node:16.18.0
WORKDIR /Front
COPY ./package*.json /Front
COPY / /Front
RUN npm install -g npm@9.6.5
RUN npm install -g serve@14.2.0
EXPOSE 5173
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
