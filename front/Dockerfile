FROM node:18.16.0
WORKDIR /front
COPY ./package*.json /front/
COPY / /front
RUN npm install
RUN npm install -g serve@14.2.0
RUN npm install -g typescript@5.0.2
EXPOSE 5173
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
