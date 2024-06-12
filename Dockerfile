FROM mongo-express:1.0.0-alpha.4
RUN mkdir /myApiApp
COPY ./config /myApiApp
COPY ./controllers /myApiApp
COPY ./models /myApiApp
COPY ./node_modules /myApiApp
COPY ./routes /myApiApp
COPY ./index.js /myApiApp
COPY ./package.json /myApiApp
COPY ./variables.env /myApiApp
EXPOSE 3000 
CMD node index.js



