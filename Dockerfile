FROM java:8-alpine
MAINTAINER david <david@codefordenver.org>

RUN apk --update add redis

ADD target/uberjar/cwbn.jar /cwbn/cwbn.jar
ADD dev-config.edn /cwbn/dev-config.edn
ADD start.sh /start.sh

ARG AIRTABLE_API_KEY
ENV AIRTABLE_API_KEY $AIRTABLE_API_KEY

EXPOSE 3000

CMD ["./start.sh"]
