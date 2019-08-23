FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD password
ENV MONGO_INITDB_DATABASE colors

COPY ./seed.js /docker-entrypoint-initdb.d/
