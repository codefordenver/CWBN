# cwbn

generated using Luminus version "2.9.12.52"

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Setup

- Create file at root called "dev-config.edn" and populate the following database connection information `{:database-url "jdbc:h2:./cwbn_dev.db"}`
- `lein repl`
- `(restart)`
- `(migrate)`
- exit lein repl (ctrl-d)

## Running

To start a web server for the application, run:

    lein run 

## License

Copyright © 2018 FIXME
