-- Reference table for organization org_types
-- Each organization will be assigned a single org_type
CREATE TABLE IF NOT EXISTS org_types
    (org_type_code   VARCHAR(10) PRIMARY KEY,
     org_type_name   VARCHAR(40) NOT NULL,
     UNIQUE(org_type_name));

-- Reference table for categories
-- Category will be a primary search criteria for organizations
-- We expect each organization to be assigned one or more categories
-- The category_sort_order columns will be used to display multiple categories in the same order
CREATE TABLE IF NOT EXISTS categories
    (category_code VARCHAR(10) PRIMARY KEY,
     category_name VARCHAR(40) NOT NULL,
     category_sort_order    INTEGER,
     UNIQUE(category_name));

-- A table of pre-defined Services
-- Services are defined within a category - for example under Business Development there are 6 services
-- The service_sort_order column will be used to always display services under a Category in the same order
CREATE TABLE IF NOT EXISTS services
    (service_id     INTEGER PRIMARY KEY AUTO_INCREMENT,
     category_code  VARCHAR(10) NOT NULL,
     service_name   VARCHAR(50) NOT NULL,
     service_sort_order  INTEGER,
     UNIQUE(category_code, service_name),
     FOREIGN KEY (category_code) REFERENCES categories(category_code));

-- This table will contain a row for each organization defined within the database
-- The org_name column will need to be UNIQUE
-- Note that this table has the child tables:  ORGANIZATION_CATEGORIES, ORGANIZATION_SERVICES
CREATE TABLE IF NOT EXISTS organizations
   (org_id        INTEGER PRIMARY KEY AUTO_INCREMENT,
    org_name      VARCHAR(300) NOT NULL,
    org_type_code VARCHAR(10) NOT NULL ,
    related_org_name         VARCHAR(200),
    service_description    VARCHAR(200),
    target_population      VARCHAR(200),
    area_served            VARCHAR(500),
    website                VARCHAR(200),
    contact_name           VARCHAR(40),
    contact_email_address  VARCHAR(50),
    contact_phone_number   VARCHAR(10),
    street_address         VARCHAR(200),
    city                   VARCHAR(50),
    zip_code               VARCHAR(10),
    state                  VARCHAR(2) DEFAULT 'CO',
    organization_purpose   VARCHAR(5000),
    interest               VARCHAR(500),
    need                   VARCHAR(500),
    notes                  VARCHAR(2000),
    org_status             VARCHAR(1) DEFAULT 'A',
    created_on             TIMESTAMP NOT NULL,
    last_updated           TIMESTAMP NOT NULL,
    UNIQUE(org_name),
    FOREIGN KEY (org_type_code) REFERENCES org_types(org_type_code));


-- This table contains one or more rows for each Organization
-- Each ORGANIZATION should have at least one ORGANIZATION_CATEGORY
CREATE TABLE IF NOT EXISTS organization_categories
       (org_category_id         INTEGER  PRIMARY KEY AUTO_INCREMENT,
        org_id                 INTEGER NOT NULL,
        category_code          VARCHAR(10) NOT NULL,
        last_updated           TIMESTAMP NOT NULL,
        UNIQUE (org_id, category_code),
        FOREIGN KEY (org_id)       REFERENCES organizations(org_id),
        FOREIGN KEY (category_code) REFERENCES categories(category_code));

-- This table contains a row for each pre-defined service that a single Organization provides
-- An organization may provide zero, one, or more predefined services
-- Some organizations may not be assigned pre-defined services, but instead
-- there may be a service description in the ORGANIZATION table row
CREATE TABLE IF NOT EXISTS organization_services
   (org_service_id         INTEGER  PRIMARY KEY AUTO_INCREMENT,
    org_id                 INTEGER NOT NULL,
    service_id             INTEGER NOT NULL,
    last_updated           TIMESTAMP NOT NULL,
    UNIQUE (org_id, service_id),
    FOREIGN KEY (org_id)       REFERENCES organizations(org_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id));

    -- Re-initialize all of the Applications tables
    DELETE FROM organization_services;
    DELETE FROM organization_categories;
    DELETE FROM organizations;
    DELETE FROM services;
    DELETE FROM categories;
    DELETE FROM org_types;
    COMMIT;

    -- First Set the auto_increment sequences for the application
    ALTER TABLE services ALTER COLUMN service_id RESTART WITH 1;
    ALTER TABLE organizations ALTER COLUMN org_id RESTART WITH 1;
    ALTER TABLE organization_categories ALTER COLUMN org_category_id RESTART WITH 1;
    ALTER TABLE organization_services ALTER COLUMN org_service_id RESTART WITH 1;

    -- Populate the org_type table will the Organization Types
    INSERT INTO org_types  (org_type_code, org_type_name)
    VALUES
    ('BUS','Business, LLC'),
    ('COAL','Coalition'),
    ('CB', 'Community Based Organization'),
    ('COOP','Cooperative'),
    ('FIN','Financial'),
    ('FND', 'Foundation'),
    ('GOV', 'Government'),
    ('HOSP','Hospital'),
    ('NP','Non-Profit'),
    ('IND','Individual'),
    ('OG','Organizing'),
    ('SE','Social Enterprise'),
    ('UNIV','University'),
    ('UN','Unknown');

    COMMIT;

    --SELECT org_type_code, org_type_name
    --FROM org_types
    --ORDER BY org_type_name;
    -------------------------------------------------------------------
    --  Populate the  CATEGORIES with the Organization Categories
    INSERT INTO categories (category_code, category_name, category_sort_order)
    VALUES
    ('BD', 'Business Development', 1),
    ('COOP','Cooperatives',2),
    ('HS','Housing', 3),
    ('WF','Work Force Development', 4),
    ('ORG','Organizing', 5),
    ('AD','Advocacy',6),
    ('ED','Education', 7),
    ('DS','Direct Service', 8),
    ('AI','Anchor Institution', 9 ),
    ('FIN','Financial Investment', 10 ),
    ('SE','Social Enterprise', 11 );

    COMMIT;
    --SELECT category_code, category_name, category_sort_order
    --FROM categories
    --ORDER BY category_sort_order, category_name;

    -------------------------------------------------------------------
    -- Populate the SERVICES table with the services defined for each category
    INSERT INTO services (category_code, service_name, service_sort_order)
    VALUES
    ('BD', 'Business Pre-Idea', 1),
    ('BD', 'Business Plan', 2),
    ('BD', 'Launch', 3),
    ('BD', 'Business Support', 4),
    ('BD', 'Business Growth', 5),
    ('BD', 'Business Exit', 6),
    ('BD', 'Business Lending', 7),
    ('BD', 'Business Technical Assistance', 8),
    ('COOP', 'Cooperative Principles Education/Pre-Idea', 1),
    ('COOP', 'Cooperative Business Plan', 2),
    ('COOP', 'Cooperative Launch', 3),
    ('COOP', 'Cooperative Business Support', 4),
    ('COOP', 'Cooperative Legal Support', 5),
    ('COOP', 'Cooperative Growth', 6),
    ('COOP', 'Cooperative Lending', 7),
    ('COOP', 'Cooperative Technical Assistance', 8),
    ('HS', 'Affordable Housing', 1),
    ('HS', 'Community Land Trusts', 2),
    ('HS', 'Down-Payment Assistance', 3),
    ('WF', 'Skill Development', 1),
    ('WF', 'Apprenticeship', 2),
    ('WF', 'On-the-Job Training', 3),
    ('ORG', 'Economic Justice Community Organizing', 1),
    ('ORG', 'Education Organizing',2),
    ('ORG', 'Environmental Justice Community Organizing',3),
    ('ORG', 'Food Justice Community Organizing',4),
    ('ORG', 'Health Justice Community Organizing',5),
    ('ORG', 'Immigration Organizing',6),
    ('ORG', 'Labor Organizing',7),
    ('ORG', 'Racial Justice Community Organizing',8),
    ('AD', 'Advocacy',1),
    ('AD', 'Policy',2),
    ('ED', 'Arts',1),
    ('ED', 'Computer Classes',2),
    ('ED', 'Financial Education',3),
    ('ED', 'GED Classes',4),
    ('ED', 'Youth Development',5),
    ('ED', 'Citizenship Classes',6),
    ('DS', 'Food Bank',1),
    ('DS', 'Healthy Food Access',2),
    ('DS', 'Shared Space',3),
    ('DS', 'Transit/Transportation',4),
    ('DS', 'Volunteer Service',5),
    ('DS', 'Health Care',6),
    ('AI', 'Local Hire Program',1),
    ('AI', 'Local Procurement',2),
    ('AI', 'Local Investment',3),
    ('FIN', 'Micro-Loans',1),
    ('FIN', 'Capital Investment',2),
    ('FIN', 'Individual Development Accounts',3),
    ('FIN', 'Community Loans',4),
    ('FIN', 'Lending Circles',5);

    COMMIT;

    --SELECT s.service_id, c.category_code, c.category_name, s.service_name
    --FROM services s, categories c
    --WHERE s.category_code = c.category_code
    --ORDER BY c.category_sort_order, s.service_sort_order, s.service_name


DELETE FROM organization_categories;
DELETE FROM organization_services;
DELETE FROM organizations;
ALTER TABLE organizations ALTER COLUMN org_id RESTART WITH 1;
ALTER TABLE organization_categories ALTER COLUMN org_category_id RESTART WITH 1;
ALTER TABLE organization_services ALTER COLUMN org_service_id RESTART WITH 1;


INSERT INTO organizations
   (org_id, org_name, org_type_code, related_org_name,
    service_description, target_population, area_served,
    contact_name,contact_email_address, contact_phone_number,
    website, organization_purpose,
    created_on, last_updated)
VALUES
(1,'Rocky Mountain Microfinance Institute', 'NP', null,
    null, 'Entrepreneurs', null,
    null, null, null,
    null,null,
    SYSTIMESTAMP, SYSTIMESTAMP),
(2, 'Colorado Lending Source', 'NP',null,
    null, null, null,
    null, null, null,
    null,null,
    SYSTIMESTAMP,SYSTIMESTAMP),
(3, 'Accion', 'NP', null,
    null, null, null,
    null, null, null,
    null,null,
    SYSTIMESTAMP,SYSTIMESTAMP),
(4, 'Mi Casa Resource Center', 'NP',null,
    null, 'Entrepreneurs, women, Latinos', 'Denver Metro',
    'Elena Vasconez', 'evasconez@MiCasaResourceCenter.org', '3035731302',
    'http://www.micasaresourcecenter.org',null,
    SYSTIMESTAMP,SYSTIMESTAMP),
(5, 'Colorado Enterprise Fund', 'NP',null,
       null, null, null,
       null, null, null,
       null,null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(6, 'Community Enterprise Development Services (CEDS)', 'NP',null,
       null, 'Refugees, entrepreneurs, consumers', 'Metro area',
       'Bishal Kafle','bkafle@cedsfinance.org', '3035698165',
       'http://scorecard.prosperitynow.org/2016/,http://assetsandopportunity.org/scorecard/about/',null,
       SYSTIMESTAMP, SYSTIMESTAMP ),
(7,'Rocky Mountain Employee Ownership Center', 'NP',null,
       null, 'model', 'Colorado',
       'Halisi Vinson', 'halisi@rmeoc.org', null,
       null,null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(8, 'Community Language Cooperative', 'COOP', null,
       'Interpretation Services', null, 'Denver Metro Area, State',
       'Rosy Snyder', 'rosa@communitylanguagecoop.com', '719244373',
       'http://www.communitylanguagecoop.com/',null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(9, 'Denver Art Society Cooperative', 'COOP', null,
       'Arts', null, null,
       null, null, null,
       'http://denvercooperativepreschool.org/',null,
       SYSTIMESTAMP, SYSTIMESTAMP ),
(10,'Denver Cooperative Preschool', 'COOP', null,
       'Education', null, 'Denver Metro Area, State',
       null, null, null,
       'https://coop.denverartsociety.org/',null,
       SYSTIMESTAMP, SYSTIMESTAMP ),
(11, 'Prodigy Coffeehouse', 'SE',null,
       null, null, null,
       null, null, null,
       null,null,
       SYSTIMESTAMP, SYSTIMESTAMP ),
(12, 'Extreme Yard Care', 'SE', 'Extreme Community Makeover',
       'Lawn Services', null, null,
       null, null, null,
       null,null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(13, 'Strong, Smart, and Bold Beans', 'SE', 'Girls, Inc.',
       'Coffee Shop', null, null,
       null, null, null,
       null,null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(14, 'The Laundry Truck', 'SE', 'Bayaud Enterprises',
       'Laundry Services', null, null,
       null, null, null,
       null,null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(15,'CityWild Adventures', 'SE', 'City Wild',
       'Outdoor Adventures', null, null,
       null, null, null,
       'http://adventures.citywild.org/',null,
       SYSTIMESTAMP, SYSTIMESTAMP),
(16,'Regis University', 'UNIV', null,
      null, null, null,
      'Sue Scherer, PhD, PT', 'sscherer@regis.edu', '3039645252',
      null,null,
      SYSTIMESTAMP, SYSTIMESTAMP),
(17,'Anschutz Medical Campus', 'UNIV', null,
      null, null, null,
      null, null, null,
      null,null,
      SYSTIMESTAMP, SYSTIMESTAMP),
(18,'University of Colorado Denver', 'UNIV', null,
      null, null, null,
      null, null, null,
      null,null,
      SYSTIMESTAMP, SYSTIMESTAMP),
(19,'Metropolitan State University', 'UNIV', null,
      null, null, null,
      null, null, null,
      null,null,
      SYSTIMESTAMP, SYSTIMESTAMP),
(20,'St. Joseph Hospital', 'HOSP', null,
      null, null, null,
      null, null, null,
      null,null,
      SYSTIMESTAMP, SYSTIMESTAMP),
(21,'10.10.10', 'FIN', null,
      null, null, null,
      null, null, null,
      'http://101010.net/','10.10.10 brings together 10 prospective CEOs for 10 days to tackle large problems with the goal of persuading investors to fund their vision and to deliver products and services which generate return on investment in conjunction with community, and societal benefits.',
      SYSTIMESTAMP, SYSTIMESTAMP),
(22,'ACCION', 'FIN', null,
      null, null, null,
      null, null, null,
      'https://www.accion.org/','Accion is a nationwide nonprofit micro- and small business lending network, Accion connects small business owners with the financing and support it takes to create or grow healthy businesses. We stand behind every small business owner as they achieve success, so that businesses — and entire communities — see real and lasting impact.',
      SYSTIMESTAMP, SYSTIMESTAMP),
(23,'Alliance for Sustainable Colorado', 'FIN', null,
      null, null, null,
      null, null, null,
      'http://www.sustainablecolorado.org/','The Alliance for Sustainable Colorado is an alliance where connected, empowered, and sustainable communities fulfill their potential economically, environmentally, and socially. ',
      SYSTIMESTAMP, SYSTIMESTAMP);
--------------------------------------------------------------
INSERT INTO organization_categories (org_id,category_code, last_updated)
VALUES
(1 , 'BD' , SYSTIMESTAMP),
(2 , 'BD' , SYSTIMESTAMP),
(3 , 'BD' , SYSTIMESTAMP),
(4 , 'BD' , SYSTIMESTAMP),
(4 , 'WF' , SYSTIMESTAMP),
(5, 'BD' ,SYSTIMESTAMP),
(6, 'BD' ,SYSTIMESTAMP),
(7, 'BD' ,SYSTIMESTAMP),
(8, 'COOP' ,SYSTIMESTAMP),
(9, 'COOP' ,SYSTIMESTAMP),
(10, 'COOP' ,SYSTIMESTAMP),
(11, 'SE' ,SYSTIMESTAMP),
(12, 'SE' ,SYSTIMESTAMP),
(13, 'SE' ,SYSTIMESTAMP),
(14, 'SE' ,SYSTIMESTAMP),
(15, 'SE' ,SYSTIMESTAMP),
(16, 'AI' ,SYSTIMESTAMP),
(17, 'AI' ,SYSTIMESTAMP),
(18, 'AI' ,SYSTIMESTAMP),
(19, 'AI' ,SYSTIMESTAMP),
(20, 'AI' ,SYSTIMESTAMP),
(21, 'FIN' ,SYSTIMESTAMP),
(22, 'FIN' ,SYSTIMESTAMP),
(23, 'FIN' ,SYSTIMESTAMP);
---------------------------------------------------------------------
INSERT INTO organization_services (org_id, service_id, last_updated)
VALUES
(1 ,48  , SYSTIMESTAMP),
(1 ,8  , SYSTIMESTAMP),
(2 , 7, SYSTIMESTAMP),
(3 , 7, SYSTIMESTAMP),
(4 , 7, SYSTIMESTAMP),
(4 , 8, SYSTIMESTAMP),
(5 , 7, SYSTIMESTAMP),
(6 , 8, SYSTIMESTAMP),
(6 , 48, SYSTIMESTAMP),
(6 , 50, SYSTIMESTAMP),
(7 , 8, SYSTIMESTAMP);


COMMIT;
