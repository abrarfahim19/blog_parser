### Database Schema
The database schema is just the skeleton of the database, and it doesn’t store any actual data. Once the designers have provided the database schema, the developers can understand how the data should be stored by the application that they are implementing.

Database schema can be broadly divided into three categories. 

1. Conceptual or logical schema that defines entities, attributes and relationships. 
2. Internal or physical schema that defines how data is stored in a secondary storage. In other words, the actual storage of data and access paths. 
3. External or view schema that defines different user views.

These three levels of schema are also known as the three-schema architecture. It can be diagrammatically depicted like this.
![[three-schema architecture.png]]
##### Entity Relationship Model:
![[Entity Relationship Model.png]]

#### Exercise:
Try and write the schema for the following database ER-D
![[DB schema exercise.png]]

```sql
-- Create the database
CREATE DATABASE restaurant

-- Create table tbl
CREATE TABLE tbl(
table_id INT(11),
location VARCHAR(255),
PRIMARY KEY (table_id)
)

-- Create table waiter 
CREATE TABLE waiter(
waiter_id INT(11),
name VARCHAR(150),
contact_no VARCHAR(10),
shift VARCHAR(10),
PRIMARY KEY (waiter_id)
)

-- Create table table_order
CREATE TABLE table_order(
order_id INT(11),
date_time DATETIME,
table_id INT(11),
PRIMARY KEY (order_id),
FOREIGN KEY (waiter_id) REFERENCES waiter(waiter_id)
FOREIGN KEY (table_id) REFERENCES tbl(table_id)
)

-- Create table menu
CREATE TABLE menu(
menu_id INT(11),
description VARCHAR(255),
availability INT(11),
PRIMARY KEY (menu_id)
)

-- Create table menu_item
CREATE TABLE menu_item(
menu_item_id INT(11),
description VARCHAR(255),
price FLOAT,
availability INT(11),
menu_id INT(11),
PRIMARY KEY (menu_item_id),
FOREIGN KEY (menu_id) REFERENCES menu(menu_id)
)

-- Create table customer
CREATE TABLE customer(
customer_id INT(11),
name VARCHAR(100),
NIC_no VARCHAR(12),
contact_no VARCHAR(10),
PRIMARY KEY (customer_id)
)

-- Create table reservation
CREATE TABLE reservation(
reservation_id INT(11),
date_time DATETIME,
no_of_pax INT(11),
order_id INT(11),
table_id INT(11),
customer_id INT(11),
PRIMARY KEY (reservation_id),
FOREGIN KEY (order_id) REFERENCES table_order(order_id),
FOREGIN KEY (table_id) REFERENCES tbl(table_id),
FOREGIN KEY (customer_id) REFERENCES cusomer(customer_id)
)

-- Create table with composit primary key order_menu_item
🫣
```