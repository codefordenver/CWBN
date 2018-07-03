-- This script drops all the CWBN tables
-- We are using foreign key constraint - so the tables using
-- a lookup table must be dropped prior to dropping a reference table
DROP TABLE organization_services;

DROP TABLE organization_categories;

DROP TABLE organizations;

DROP TABLE services;

DROP TABLE categories;

DROP TABLE org_types;
