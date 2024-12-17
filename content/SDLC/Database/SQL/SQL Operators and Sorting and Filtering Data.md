#### SQL Operators
| **Operator** | **Description**                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ALL**      | Used to compare a single value to all the values in another value set.                                                                                |
| **AND**      | Allows for the existence of multiple conditions in an SQL statement's WHERE clause.                                                                   |
| **ANY**      | Used to compare a value to any applicable value in the list as per the condition.                                                                     |
| **BETWEEN**  | Used to search for values that are within a set of values, given the minimum value and the maximum value.                                             |
| **EXISTS**   | Used to search for the presence of a row in a specified table that meets a certain criterion.                                                         |
| **IN**       | Used to compare a value to a list of literal values that have been specified.                                                                         |
| **LIKE**     | Used to compare a value to similar values using wildcard operators.                                                                                   |
| **NOT**      | Reverses the meaning of the logical operator with which it is used. For example: NOT EXISTS, NOT BETWEEN, NOT IN, etc. **This is a negate operator.** |
| **OR**       | Used to combine multiple conditions in an SQL statement's WHERE clause.                                                                               |
| **IS NULL**  | Used to compare a value with a NULL value.                                                                                                            |
| **UNIQUE**   | Searches every row of a specified table for uniqueness (no duplicates).                                                                               |

#### Arithmetic Operators
In SQL, arithmetic operators are used to perform mathematical operations on data. To be more specific, they’re used with numerical data stored in database tables.

Arithmetic operators can be used in the SELECT clause as well as in the WHERE clause in a SQL SELECT statement. When an operator is used in the WHERE clause, it’s intended to perform the operations on specific rows only. This is because the WHERE clause in SQL is used to filter out data that a particular SQL statement is working on.

All arithmetic operators are used on numerical operands for performing:
- Addition 
- Subtraction 
- Multiplication 
- Division 
- Modulus

| **employee_ID** | **employee_name** | **salary** | **allowance** | **tax** |
| --------------- | ----------------- | ---------- | ------------- | ------- |
| 1               | Alex              | 24000      | 1000          | 1000    |
| 2               | John              | 55000      | 1000          | 2000    |
| 3               | James             | 52000      | 1000          | 2000    |
| 4               | Sam               | 24000      | 1000          | 1000    |
##### Addition Operator:
```sql
-- To find the total
SELECT salary + allowance FROM employee;

-- To find employee record of those whose salary+allowance is 25000
SELECT * FROM EMPLOYEE
WHERE salary + allowance = 25000;
```

##### Subtraction Operator:
```sql
-- To find the salary - tax
SELECT salary - tax;

-- With where clause
SELECT * FROM employee
WHERE salary - tax = 50000;
```

Multiplication, Modulus operator are similar to this.

> [!tip] "!=" in SQL can be expressed as "<>" 

#### SQL comparison Operator
| **Operator** | **What it does**                            |
| ------------ | ------------------------------------------- |
| =            | Checks for equality                         |
| <>  or !=    | Checks for not inequality                   |
| >            | Check if something is greater than          |
| >=           | Check if something is greater than or equal |
| <            | Check if something is less than             |
| <=           | Check if something is less than or equal    |
### Order By Clause
By default ordering happens in ascending (`ASC`) order.
##### Sorting by a single column:
```sql
SELECT *
FROM customers
ORDER BY CustomerID DESC;
```

##### Sorting by multiple column:
```sql
SELECT *
FROM customers
ORDER BY CustomerID ASC, dateOfBirth DESC;
```

#### Example of Operators

```sql
-- BETWEEN usage
SELECT *
FROM customers
WHERE id BETWEEN 10 AND 19; 

-- IN usage
SELECT *
FROM customers
WHERE country IN('USA','UK'); 

-- LIKE usage
SELECT *
FROM customers
WHERE country LIKE 'U%';
```

### SELECT DISTINCT clause
DISTINCT is useful for retrieving a set of unique values when there are duplicate column values in a table. It is used with the SELECT statement, so it’s commonly referred to as SELECT DISTINCT. In short, what DISTINCT does is to find unique values within a column, or columns, of a table.

```sql
-- SELECT DISTINCT on single column
SELECT DISTINCT BillingCountry
FROM invoices
ORDER BY BillingCountry;

-- SELECT DISTINCT on multiple column
SELECT DISTINCT BillingCountry, BillingCity
FROM invoices
ORDER BY BillingCountry;
```

> [!info] `null` is considered as unique value

> [!tip] DISTINCT can also be used with sql `aggregate functions`.

```sql
SELECT COUNT(DISTINCT country)
FROM customers;
```

Here are some important points to remember in terms of SELECT DISTINCT:
- When only one column or expression is provided in the DISTINCT clause, the query will return the unique values for that column. 
- When more than one column or expression is provided in the DISTINCT clause, the query will retrieve unique combinations for those columns. 
- The DISTINCT clause doesn't ignore NULL values in DISTINCT column(s). NULL values are considered as unique values by DISTINCT. 