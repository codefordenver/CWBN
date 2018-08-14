#!/bin/sh

redis-server --daemonize yes
java -jar -Dconf=/cwbn/dev-config.edn /cwbn/cwbn.jar
