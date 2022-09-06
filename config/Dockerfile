FROM openjdk

COPY package.json .

RUN npm install

COPY ../. .

CMD npx allure serve