-- :name create-org! :! :n
-- :doc creates a new organization record
INSERT INTO cwbn
(id, name, type, address, support_type, timestamp)
VALUES (:id, :name, :type, :address, :support_type, :timestamp)

-- :name update-org! :! :n
-- :doc updates an existing user record
UPDATE cwbn
SET name = :name, type = :type, address = :address, support_type = :support_type, timestamp = :timestamp
WHERE id = :id

-- :name get-org :? :1
-- :doc retrieves a user record given the id
SELECT * FROM cwbn
WHERE id = :id

-- :name delete-user! :! :n
-- :doc deletes a user record given the id
DELETE FROM cwbn
WHERE id = :id
