-- :name get-categories :? :*
-- :doc retrieves all the categories sorted
SELECT category_code, category_name, category_sort_order
FROM categories
ORDER BY category_sort_order, category_name

-- :name get-category :? :1
-- :doc retrieves the category information for the code
SELECT category_code, category_name, category_sort_order
FROM categories
WHERE category_code = :code

-- :name get-orgtypes :? :*
-- :doc retrieves all the org_types sorted by org_type_name
SELECT org_type_code, org_type_name
FROM org_types
ORDER BY org_type_name

-- :name get-orgtype :? :1
-- :doc retrieves the org_type information for the code
SELECT org_type_code, org_type_name
FROM org_types
WHERE org_type_code = :code

-- :name get-services :? :*
-- :doc retrieves all the services sorted by category_sort_order and service_sort_order
SELECT s.service_id, c.category_code, c.category_name, s.service_name
FROM services s, categories c
WHERE s.category_code = c.category_code
ORDER BY c.category_sort_order, s.service_sort_order, s.service_name

-- :name get-service :? :1
-- :doc retrieves the service information for a specific service_id
SELECT s.service_id, c.category_code, c.category_name, s.service_name
FROM services s, categories c
WHERE s.category_code = c.category_code
AND s.service_id = :id

-- :name get-services-by-category :? :*
-- :doc retrieves all the services for a specific category_code
SELECT s.service_id, c.category_code, c.category_name, s.service_name
FROM services s, categories c
WHERE s.category_code = c.category_code
AND c.category_code = :categorycode
ORDER BY s.service_sort_order, s.service_name

-- :name get-active-orgs :? :*
-- :doc retrieves all the active organizations with categories and services as a list
SELECT o.*, cl.categories, sl.services
FROM organizations o
LEFT OUTER JOIN
(SELECT os.org_id, group_concat(s.service_name) services
FROM  organization_services os, services s
WHERE os.service_id = s.service_id
GROUP BY os.org_id)  sl  ON (o.org_id = sl.org_id)
LEFT OUTER JOIN
(SELECT oc.org_id, GROUP_CONCAT(c.category_name) categories
FROM   organization_categories oc, categories c
WHERE oc.category_code = c.category_code
GROUP BY oc.org_id) cl ON (o.org_id = cl.org_id)
WHERE o.org_status = 'A'
ORDER BY o.org_name



-- :name get-org :? :1
-- :doc retrieves all the organization data for an orgid. The org categories and services are groups as a list
SELECT o.*, cl.categories, sl.services
FROM organizations o
LEFT OUTER JOIN
(SELECT os.org_id, group_concat(s.service_name) services
FROM  organization_services os, services s
WHERE os.service_id = s.service_id
GROUP BY os.org_id)  sl  ON (o.org_id = sl.org_id)
LEFT OUTER JOIN
(SELECT oc.org_id, GROUP_CONCAT(c.category_name) categories
FROM   organization_categories oc, categories c
WHERE oc.category_code = c.category_code
GROUP BY oc.org_id) cl ON (o.org_id = cl.org_id)
WHERE o.org_id = :org_id

-- :name get-orgs-by-category_code :? :*
-- :doc retrieves all the active organizations for a category_code. The org categories and services are groups as a list SELECT o.org_id, cl.categories, o.org_name, sl.services, oc2.category_code
SELECT o.*, cl.categories, sl.services
FROM organizations o
JOIN (organization_categories oc2)
ON  (o.org_id = oc2.org_id
AND oc2.category_code = :category_code)
LEFT OUTER JOIN
(SELECT os.org_id, group_concat(s.service_name) services
FROM  organization_services os, services s
WHERE os.service_id = s.service_id
GROUP BY os.org_id)  sl  ON (o.org_id = sl.org_id)
LEFT OUTER JOIN
(SELECT oc.org_id, GROUP_CONCAT(c.category_name) categories
FROM   organization_categories oc, categories c
WHERE oc.category_code = c.category_code
GROUP BY oc.org_id) cl ON (o.org_id = cl.org_id)
WHERE o.org_status = 'A'
ORDER BY o.org_name
