(ns cwbn.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [cwbn.core-test]))

(doo-tests 'cwbn.core-test)

