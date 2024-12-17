The normalisation process aims to minimise data duplications, avoid errors during data modifications, and simplify data queries from the database. The three fundamental normalisation forms are known as:
- First Normal Form (1NF)   
- Second Normal Form (2NF)   
- Third Normal Form (3NF)

| Doctor ID | Doctor name | Region      | Patient ID                   | Patient name                      | Surgery Number | Surgery council | Postcode | Slot ID                    | Total Cost         |
| --------- | ----------- | ----------- | ---------------------------- | --------------------------------- | -------------- | --------------- | -------- | -------------------------- | ------------------ |
| D1        | Karl        | West London | P1   <br><br>P2   <br><br>P3 | Rami   <br><br>Kim   <br><br>Nora | 3              | Harrow          | HA9SDE   | A1  <br><br>A2  <br><br>A3 | 1500 1200 1600     |
| D1        | Karl        | East London | P4  <br><br>P5               | Kamel  <br><br>Sami               | 4              | Hackney         | E1 6AW   | A1  <br><br>A2             | 2500 1000          |
| D2        | Mark        | East London | P5  <br><br>P6               | Sami  <br><br>Norma               | 4              | Hackney         | E1 6AW   | A3  <br><br>A4             | 1500 2000          |
| D2        | Mark        | West London | P7 <br><br>P1                | Rose  <br><br>Rami                | 5              | Harrow          | HA9SDE   | A4  <br><br>A5             | 1000  <br><br>1500 |

Following data table is in an unnormalised form:
```sql
CREATE TABLE Surgery 
	(DoctorID VARCHAR(10),
	DoctorName VARCHAR(50),
	Region VARCHAR(20),
	PatientID VARCHAR(10),
	PatientName VARCHAR(50),
	SurgeryNumber INT, Council VARCHAR(20),
	Postcode VARCHAR(10),
	SlotID VARCHAR(5),
	TotalCost Decimal
);
```
#### First normal form (_atomicity_)  
The data atomicity rule means you can only have one single instance value of the column attribute in any table cell.
```sql
CREATE TABLE Patient (
	PatientID VARCHAR(10) NOT NULL,
	PatientName VARCHAR(50),
	SlotID VARCHAR(10) NOT NULL,
	TotalCost Decimal, 
	CONSTRAINT PK_Patient
	PRIMARY KEY (PatientID, SlotID));

CREATE TABLE Doctor (
DoctorID VARCHAR(10),
DoctorName VARCHAR(50), PRIMARY KEY (DoctorID));

CREATE TABLE Surgery (
SurgeryNumber INT NOT NULL,
Region VARCHAR(20), Council VARCHAR(20),
Postcode VARCHAR(10), PRIMARY KEY (SurgeryNumber));
```

|Patient Table|

| Patient ID | Patient name | Slot ID | Total Cost |
| ---------- | ------------ | ------- | ---------- |
| P1         | Rami         | A1      | 1500       |
| P2         | Kim          | A2      | 1200       |
| P3         | Nora         | A3      | 1600       |
| P4         | Kamel        | A1      | 2500       |
| P5         | Sami         | A2      | 1000       |
| P6         | Norma        | A5      | 2000       |
| P7         | Rose         | A6      | 1000       |

Doctor table:   

| Doctor ID | Doctor name |
| --------- | ----------- |
| D1        | Karl        |
| D2        | Mark        |

Surgery table:

| Surgery Number | Region      | Surgery council | Postcode |
| -------------- | ----------- | --------------- | -------- |
| 3              | West London | Harrow          | HA9SDE   |
| 4              | East London | Hackney         | E1 6AW   |
| 5              | West London | Harrow          | HA9SDE   |

By applying the atomicity rule and removing the repeating data groups, the database now meets the first normal form.

### Second normal from (_partial dependency_)
Partial dependency refers to tables with a composite primary key. Namely, a key that consists of a combination of two or more columns, where a non-key attribute value depends only on one part of the composite key.

| **Patient ID** | Patient name | **Slot ID** | Total Cost |
| -------------- | ------------ | ----------- | ---------- |
| P1             | Rami         | A1          | 1500       |
| P2             | Kim          | A2          | 1200       |
| P3             | Nora         | A3          | 1600       |
| P4             | Kamel        | A1          | 2500       |
| P5             | Sami         | A2          | 1000       |
| P5             | Sami         | A3          | 1000       |
| P6             | Sami         | A4          | 1500       |
| P7             | Norma        | A5          | 2000       |
| P8             | Rose         | A6          | 1000       |
| P1             | Rami         | A7          | 1500       |

Here, Patient name can be found from the Patient ID and the Slot ID can indicate the Total Cost.
So we should redesign the Patient Table:

| Patient table  |                  |
| -------------- | ---------------- |
| **Patient ID** | **Patient name** |
| P1             | Rami             |
| P2             | Kim              |
| P3             | Nora             |
| P4             | Kamel            |
| P5             | Sami             |
| P7             | Norma            |
| P8             | Rose<br>         |

![[SQL 2nd Normal rule.png]]

```sql
CREATE TABLE Patient (
PatientID VARCHAR(10) NOT NULL,
PatientName, VARCHAR(50), PRIMARY KEY (PatientID));

CREATE TABLE Appointments (AppointmentID INT NOT NULL,
SlotID, VARCHAR(10), 
TotalCost Decimal, PRIMARY KEY (AppointmentID));
```

### Third normal form (_transitive dependency_)
In the surgery table, the postcode and the council are non-key attributes, and the postcode depends on the council. Therefore, if you change the council value, you must also change the postcode. This is called transitive dependency, which is not allowed in the third normal form.

| Surgery number | Region      | Surgery council | Postcode |
| -------------- | ----------- | --------------- | -------- |
| 3              | West London | Harrow          | HA9SDE   |
| 4              | East London | Hackney         | E1 6AW   |
| 5              | West London | Harrow          | HA9SDE   |
In other words, changing the value of the council value in the above table has a direct impact on the postcode value, because each postcode in this example belongs to a specific council. This transitive dependency is not allowed in the third normal form. To fix it we can split this table into two tables: one for the region with the city and one for the surgery:
Location Table:

| Surgery number | Postcode |
| -------------- | -------- |
| 3              | HA9SDE   |
| 4              | E1 6AW   |
| 5              | HA862E   |
Council Table:

| Surgery council | Region      |
| --------------- | ----------- |
| Harrow          | West London |
| Hackney         | East London |
```sql
CREATE TABLE Location (
SurgeryNumber INT NOT NULL,
Postcode VARCHAR(10), PRIMARY KEY (SurgeryNumber));	

CREATE TABLE Council (Council VARCHAR(20) NOT NULL,
Region VARCHAR(20), PRIMARY KEY (Council));
```

> [!info] This ensures the database conforms to first, second, and third normal forms. The following diagram illustrates the stages through which the data moves from the unnormalized form to the first normal form, the second normal form, and finally to the third normal form.

![[SQL Data Normalisation.png]]

Functional Dependency:
The relationship between two attributes in a table.

Partial Dependency:
A table with a composite primary key.