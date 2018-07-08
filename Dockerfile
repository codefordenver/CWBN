FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/cwbn.jar /cwbn/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/cwbn/app.jar"]
