### SQL Datatypes
Numeric Data Types:
- INT
- TINYINT
- BIGINT
- FLOAT
- REAL

Date and time Data types:
- DATE
- TIME
- DATETIME

Character and string Data Types
- CHAR
- VARCHAR
- TEXT

Binary Data Types:
- BINARY
- VARBINARY

Miscellaneous Data Types:
- Character Large Object (CLOB): to store large block of text in form of text encoding
- Binary Large Object (BLOB): to store large block of binary data such as image
### Types of Key
#### Primary Key
Primary key can be one column or combination of multiple column. This combination is called `composite primary key`.

#### Foreign Key
Tables don't stay isolated from one another. Tables are linked with one another through a key column (the primary key) of one table that’s also present in the related table as a foreign key.

### Integrity Constraint
Every table in a DB should abide by the constraints. These are called integrity constraints. There are 3 integrity constraints:
1. Key constraints
2. Domain constraints
3. Referential integrity constraints

#### Key Constraints
Primary key needs to unique and can't be NULL value.

#### Domain Constraints
It refers to the rule defined for the values that can be stored in a certain column. For instance you can't have string in a column that expects integer value. And rules like contact number can't exceed 11 digits

#### Referential integrity Constraints
When a table is related to another table via a foreign key column, then the referenced column value must exist in the other table.

### SQL Database Overview
#### Database Structure
The structure of db consists of a set of key components. These include:
- Tables or entities
- Attributes describe the table
- Fields, which are columns
- A record, row of details
- Primary key, unique identifier

Following is an example:
![[Database Structure.png]]

### Logical Database Structure
It is represented using a diagram known as the Entity Relationship Diagram(ERD). It is a visual representation of how tables are connected during physical db design, using a DBMS like MySQL or Oracle for example.
There can be 3 ways entities can have relations:
1. One-to-One
2. One-to-Many
3. Many-to-Many
An example of an ERD that has all these elements:
![[ERD.png]]

#### Physical Database Structure
The relationships are established using a field known as a foreign key.
Let’s take the example of a database that contains two tables: student and department. The student table has a primary key of “Stud_id”, which is also present in the Department table as a foreign key. Therefore, the two tables are related to each other via the “Stud_id” field
![[Physical db structure.png]]

#### Default SQL Statement
```sql
CREATE TABLE player (name VARCHAR(50) NOT NULL, city VARCHAR(30) DEFAULT "Madrid");
```
