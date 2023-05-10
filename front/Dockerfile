FROM node:18.16.0
WORKDIR /front
COPY ./package*.json /front
COPY / /front
RUN npm install -g npm@9.6.5
RUN npm install -g serve@14.2.0
RUN npm install -g typescript
EXPOSE 5173
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
