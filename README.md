# cwbn

generated using Luminus version "2.9.12.52"

## Prerequisites

You will need
- Java
- [Leiningen][1] 2.0 or above
- sassc (on a Mac it can be installed with homebrew)

[1]: https://github.com/technomancy/leiningen

## Setup

- Create file at root called "dev-config.edn" and populate the following database connection information `{:database-url "jdbc:h2:./cwbn_dev.db"}`
- `lein repl`
- `(restart)`
- `(migrate)`
- exit lein repl (ctrl-d)

## Test (After running setup)
- Create file at root called "test-config.edn" and populate the following database connection information `{:database-url "jdbc:h2:./cwbn_test.db"}`
- `lein test`

## Running

To start a web server for the application, run:

- `lein run`
- `lein figwheel` (can be started from a separate terminal)

## License

Copyright © 2018 FIXME
