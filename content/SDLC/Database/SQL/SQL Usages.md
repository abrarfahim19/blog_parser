---
tags:
  - programming
---
## SQL usage
SQL has following subsets:
1. Data Definition Language (DDL)
2. Data Manipulation Language (DML)
3. Data Query Language (DQL)
4. Data Control Language (DCL)

#### Data Definition Language (DDL)
The SQL DDL category provides commands for defining, deleting and modifying tables in a database. Use the following commands in this category.
```sql
-- DDL Commands

-- Create Table
CREATE TABLE member (id int);

-- Delete Table
DROP TABLE member;

-- Recreate Table
CREATE TABLE member (id int, age int);

-- Alter Table changes the structure of the table: add column 
ALTER TABLE member ADD (name char(10));

-- Alter Table and drop column
ALTER TABLE member DROP COLUMN age ;

-- Alter Table and drop column
ALTER TABLE member MODIFY COLUMN name char(20);

-- Alter Table and add primary key
ALTER TABLE member ADD primary key (id);

-- Truncate Table to remove all the entries of the table but not deleting the table
TRUNCATE TABLE member;
```

#### Data Query Language (DQL)
DQL provides commands to retrieve and query from database.
```sql
-- DQL Commands

-- Select the whole Table
SELECT * FROM member;

-- Select a column from Table
SELECT name FROM member;

-- Select multiple column from Table
SELECT name, age FROM member;

```

#### Data Manipulation Language (DML)
DML provides commands to insert, update delete data in the database
```sql

-- DML Commands

-- Insert into Table one
INSERT INTO member (id, age, name) VALUES (1, 27, "Abrar");

-- Insert into Table multiple
INSERT INTO member (id, age, name)
VALUES
	(1, 27, "Abrar"),
	(1, 27, "Fahim"),
	(1, 27, "Patwari");

-- Insert into select query
INSERT INTO country (countryName) SELECT country FROM member;

-- Update 1 data into Table
UPDATE member SET name = 'x' WHERE id = 1;

-- Update multiple data into Table
UPDATE member SET name = 'x', age = 26 WHERE id = 1;

-- Delete data from Table
DELETE FROM member WHERE id = 2;
```

#### Data Control Language (DCL)
DCL deals with the rights and permissions of users of a database system. Following commands are used:

`GRANT`: Gives privileges required to allow users to access and manipulate the database.

`REVOKE`: Remove permissions

#### Transaction Control Language (TCL)
It allows SQL statements to be grouped together into logical transactions.

`COMMIT`: Command to save all the work done to the DB.
`ROLLBACK`: Command to restore a database to the last committed state.