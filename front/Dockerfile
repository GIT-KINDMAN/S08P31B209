FROM node:18.16.0
WORKDIR /front
COPY --chown=node:node ./package*.json /front/
COPY --chown=node:node ./package-lock.json /front/
RUN npm install --quiet
RUN npm install -g serve@14.2.0
RUN npm install -g typescript
COPY --chown=node:node ./ /front/
EXPOSE 5173
RUN npm run build
CMD ["npx", "serve", "-s", "build"]