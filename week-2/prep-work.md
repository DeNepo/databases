# Prep Work Week 2

## Foreign Keys, Relationships

### Foreign Key

A [foreign key](https://en.wikipedia.org/wiki/Foreign_key) attribute is used to link two tables together. The values of the fields of this attirubte will be primary keys in another table. These references reflect relationships between entities in the database.

Extra resources:

- [Charlie Love - Linked Tables and keys](https://www.youtube.com/watch?v=ia4eCxPPc_o)

### Relationships

There are three specific types of [relations(hips)](https://en.wikipedia.org/wiki/Cardinality_(data_modeling)) that can exist between a pair of tables: one-to-one, one-to-many, and many-to-many. Let's look at them using our sample database ERD.

![Chinook Sample Database](chinook-erd.png)

#### One-to-One (1-1)

A pair of tables bears [a one-to-one relationship](https://en.wikipedia.org/wiki/One-to-one_(data_model)) when a single record in the first table is related to only one record in the second table, and a single record in the second table is related to only one record in the first table.

- Can you spot the one-to-one relationships in our sample database?

    Sorry, trick question! There is no one-to-one relationship in our sample database. But a good example could be the country-capital relationship mentioned in the previous link: a country has only one capital city, and a capital city is the capital of only one country.

#### Many-to-One (1-M)

[A one-to-many relationship](https://en.wikipedia.org/wiki/One-to-one_(data_model)) exists between two tables when a single record in the first table can be related to one or more records in the second table, but a single record in the second table can be related to only one record in the first table.

- Can you spot the many-to-one relationships in our sample database?

    There's nine! An example: one `Invoice` can have many `InvoiceLine`s. But an `InvoiceLine` can only be part of one `Invoice`. This relationship is implemented by putting by the foreign key `InvoiceId` attribute in `InvoiceLine` table.

#### Many-to-Many (M-M)

A pair of tables bears [a many-to-many relationship](https://en.wikipedia.org/wiki/Many-to-many_(data_model)) when a single record in the first table can be related to one or more records in the second table and a single record in the second table can be related to one or more records in the first table.

- Can you spot the many-to-many relationships in our sample database?

    There's one: a `Track` can be part of many `Playlist`s and vice versa a `Playlist` can consist of many `Track`s. This relationship is implemented using an extra join table `PlaylistTrack` which consists of two foreign key attributes: `PlaylistId` and `TrackId`.

Extra resources:

- [LinkedIn Learning - Defining table relationships](https://www.youtube.com/watch?v=V5DyvUfsboA)
- [Prescott Computer Guy - Relational Database Concepts](https://www.youtube.com/watch?v=NvrpuBAMddw)

## Joins in SQL

[An SQL JOIN clause](https://en.wikipedia.org/wiki/Join_(SQL)) combines attributes from one or more tables in a relational database. It creates a set that can be saved as a table or used as it is. There's different types of joins:

- INNER JOIN
- OUTER JOIN
    - LEFT (OUTER) JOIN
    - RIGHT (OUTER) JOIN
    - FULL (OUTER) JOIN
- CROSS JOIN
- Self-join

Note that [for SQLite](https://www.sqlite.org/omitted.html) LEFT OUTER JOIN is implemented, but not RIGHT OUTER JOIN or FULL OUTER JOIN.

Extra resources:

- [SQLite Tutorial - Join](https://www.sqlitetutorial.net/sqlite-join/)
- [James Vance - Understand SQL Joins in 10(ish) Minutes](https://www.youtube.com/watch?v=tvMGoxmQzgQ)

## Insert, Update and Delete Records in SQL

So far we've focussed on reading records using [the SQL SELECT statement](https://en.wikipedia.org/wiki/Select_(SQL)). But SQL can also be used to insert, update and delete data!

### Insert

[An SQL INSERT statement](https://en.wikipedia.org/wiki/Insert_(SQL)) adds one or more records to a single table.

Let's try it out with an example using the sample database (again you can use [the online SQLite viewer](https://inloop.github.io/sqlite-viewer/) and upload [our sample database file](./chinook.sqlite)).

<details><summary>Add an artist</summary>

```sql
INSERT INTO Artist (Name) VALUES ('John Doe');

SELECT
	*
FROM
	Artist
WHERE
	Name = 'John Doe';
```
</details>

Extra resources:

- [SQLite Tutorial - Insert](https://www.sqlitetutorial.net/sqlite-insert/)

### Update

[An SQL UPDATE statement](https://en.wikipedia.org/wiki/Update_(SQL)) changes the data of one or more records in a table. Either all the rows can be updated, or a subset may be chosen using a condition.

<details><summary>Update the artist's name to something more catchy</summary>

```sql
UPDATE
	Artist
SET
	Name = 'John Doe'
WHERE
	Name = 'DJ JD';

SELECT
	*
FROM
	Artist
WHERE
	Name = 'DJ JD';
```
</details>

Extra resources:

- [SQLite Tutorial - Update](https://www.sqlitetutorial.net/sqlite-update/)

### Delete

[An SQL DELETE statement](https://en.wikipedia.org/wiki/Delete_(SQL)) removes one or more records from a table.

<details><summary>Delete the artist again</summary>

```sql
DELETE FROM Artist
WHERE Name = 'DJ JD';

SELECT
	*
FROM
	Artist
WHERE
	Name = 'DJ JD';
```
</details>

Extra resources:

- [SQLite Tutorial - Delete](https://www.sqlitetutorial.net/sqlite-delete/)

## Create, Alter and Drop tables in SQL

Similar to records, using SQL you can also create, alter and drop tables.

### Create

Extra resources:

- [SQLite Tutorial - Create Table](https://www.sqlitetutorial.net/sqlite-create-table/)

### Alter

Extra resources:

- [SQLite Tutorial - Alter Table](https://www.sqlitetutorial.net/sqlite-alter-table/)

### Drop

Extra resources:

- [SQLite Tutorial - Drop Table](https://www.sqlitetutorial.net/sqlite-drop-table/)

## SQL Injection

Injection is considered the top web application security risk in 2020 by [the Open Web Application Security Project](https://owasp.org/www-project-top-ten/). [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) specifically is a code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker or drop the database). A very recent example serves as [a perfect anecdote](https://www-theregister-com.cdn.ampproject.org/c/s/www.theregister.com/AMP/2020/06/04/hibp_pwned_helpdesk_ticket_system_glpi/).

[The OWASP - SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) comes in handy to understand which actions can be taken to prevent SQL injection flaws. The principal technique to avoid this problem is the usage of [prepared statements or parameterized statements](https://en.wikipedia.org/wiki/Prepared_statement).

Extra resources:

- [OWASP - SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [Computerphile - Running an SQL Injection Attack](https://www.youtube.com/watch?v=ciNHn38EyRc)
- [Database Journal - A Guide to MySQL Prepared Statements and Parameterized Queries](https://www.databasejournal.com/features/mysql/a-guide-to-mysql-prepared-statements-and-parameterized-queries.html)
