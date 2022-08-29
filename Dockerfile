FROM node

COPY package.json .

RUN npm install

COPY . .

CMD npx wdio run ./config/wdio.conf.js --suite positiveAndNegativeLogin