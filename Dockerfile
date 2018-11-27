FROM clojure:alpine
MAINTAINER volunteers <hello@codefordenver.org>

ARG CWBN_AIRTABLE_API_KEY
ENV CWBN_AIRTABLE_API_KEY $CWBN_AIRTABLE_API_KEY

ENV APP_SRC=/usr/src/app
RUN mkdir -p ${APP_SRC}

WORKDIR ${APP_SRC}
COPY . ${APP_SRC}
RUN lein deps
RUN lein uberjar

COPY start.sh ${APP_SRC}

EXPOSE 3000

CMD ["./start.sh"]
