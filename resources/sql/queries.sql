-- :name create-org! :! :n
-- :doc creates a new organization record
INSERT INTO cwbn
(name, type, address, support_type)
VALUES (:name, :type, :address, :support_type)

-- :name update-org! :! :n
-- :doc updates an existing org record
UPDATE cwbn
SET name = :name, type = :type, address = :address, support_type = :support_type
WHERE id = :id

-- :name get-org :? :1
-- :doc retrieves an org record given the id
SELECT * FROM cwbn
WHERE id = :id

-- :name delete-org! :! :n
-- :doc deletes an org record given the id
DELETE FROM cwbn
WHERE id = :id

-- :name get-orgs :?
-- :doc retrieves all orgs records
SELECT * FROM cwbn