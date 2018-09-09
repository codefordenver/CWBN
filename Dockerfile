FROM clojure:alpine
MAINTAINER volunteers <hello@codefordenver.org>

ARG AIRTABLE_API_KEY
ENV AIRTABLE_API_KEY $AIRTABLE_API_KEY

ENV APP_SRC=/usr/src/app
RUN mkdir -p ${APP_SRC}

RUN apk --update add redis

RUN mkdir -p ${APP_SRC}
WORKDIR ${APP_SRC}
COPY project.clj ${APP_SRC}
RUN lein deps
COPY . ${APP_SRC}
RUN lein uberjar

COPY start.sh ${APP_SRC}

# TODO: figure out what is wrong with this path
#COPY dev-config.edn ${APP_SRC}

RUN mv ${APP_SRC}/target/uberjar/cwbn.jar .
RUN rm -rf ${APP_SRC}/target/*

EXPOSE 3000

CMD ["./start.sh"]
