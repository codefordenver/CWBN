#!/bin/sh

cat >> /dev-config.edn << EOF
{:database-url "jdbc:h2:./cwbn_dev.db"}
EOF

java -jar -Dconf=/usr/src/app/dev-config.edn /usr/src/app/target/uberjar/cwbn.jar
