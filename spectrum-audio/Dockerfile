FROM daocloud.io/library/node:7.9-wheezy

COPY ./app /usr/src/app/

WORKDIR /usr/src/app

EXPOSE 3000

RUN npm install express 

CMD node app.js
