FROM node

COPY package.json .

RUN npm install

COPY . .

CMD npx wdio run ./wdio.conf.js --suite sum