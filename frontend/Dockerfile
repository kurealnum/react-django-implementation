FROM node:18.20.3

WORKDIR /frontend_src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6901

CMD [ "npm", "run", "dev" ]
