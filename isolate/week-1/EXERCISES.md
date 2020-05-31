# Isolate
## Week 1
In these exercises we focus solely on writing SQL. Use [the online SQLite viewer](https://inloop.github.io/sqlite-viewer/), upload [our sample database file](chinook.sqlite) and start writing those queries!
###  Select
<details><summary>Show all artists</summary>

```sql
SELECT
    *
FROM
    Artist;
```
</details>
<details><summary>Show all artists' names</summary>

```sql
SELECT
    Name
FROM
    Artist;
```
</details>
<details><summary>Show all tracks</summary>

```sql
SELECT
    *
FROM
    Track;
```
</details>
<details><summary>Show all tracks' name and price</summary>

```sql
SELECT
    Name,
    UnitPrice
FROM
    Track;
```
</details>

### Count
<details><summary>Show the number of artists</summary>

```sql
SELECT count(*)
FROM Artist;
```
</details>

### Order by
<details><summary>Show all tracks' name and duration, sorted from longest to shortest duration</summary>

```sql
SELECT
    Name,
    Milliseconds
FROM
    Track
ORDER BY
    Milliseconds DESC;
```
</details>
<details><summary>Show all tracks' name and duration in minutes, sorted from longest to shortest duration</summary>

```sql
SELECT
    Name,
    Milliseconds / 1000 / 60 AS Minutes
FROM
    Track
ORDER BY
    Milliseconds DESC;
```
</details>
<details><summary>Show all invoices' id and total, sorted from lowest to highest total</summary>

```sql
SELECT
    InvoiceId,
    Total
FROM
    Invoice
ORDER BY
    Total;
```
</details>

### Select distinct
<details><summary>Show all unique track composers' names</summary>

```sql
SELECT DISTINCT
    Composer
FROM
    Track;
```
</details>
<details><summary>Show all unique unit prices of tracks</summary>

```sql
SELECT DISTINCT
    UnitPrice
FROM
    Track;
```
</details>
<details><summary>Show the number of unique track composers</summary>

```sql
SELECT
    count(DISTINCT Composer)
FROM
    Track;
```
</details>

### Select limit
<details><summary>Show the id and total of the ten highest totalling invoices</summary>

```sql
SELECT
    InvoiceId,
    Total
FROM
    Invoice
ORDER BY
    Total DESC
LIMIT 10;
```
</details>

### Where
<details><summary>Show all tracks where Philip Glass is the composer</summary>

```sql
SELECT
    *
FROM
    Track
WHERE Composer = 'Philip Glass'
```
</details>
<details><summary>Show all customers' first name and country who live not in USA</summary>

```sql
SELECT
    FirstName,
    Country
FROM
    Customer
WHERE
    Country != 'USA';

-- OR

SELECT
    FirstName,
    Country
FROM
    Customer
WHERE
    Country IS NOT 'USA';
```
</details>
<details><summary>Show the customer's first name for whom we do not have the phone number</summary>

```sql
SELECT
    FirstName
FROM
    Customer
WHERE
    Phone IS NULL;
```
</details>
<details><summary>Show all employees' first name, last name and title whose title is IT Staff</summary>

```sql
SELECT
    FirstName,
    LastName,
    Title
FROM
    Employee
WHERE
    Title = 'IT Staff';
```
</details>
<details><summary>Show all invoices' id and total with a total bigger than 20</summary>

```sql
SELECT
    InvoiceId,
    Total
FROM
    Invoice
WHERE
    Total > 20;
```
</details>
<details><summary>Show the number of tracks where the unit price is not 0.99</summary>

```sql
SELECT count(*)
FROM
    Track
where UnitPrice != '0.99';
```
</details>
<details><summary>Show all tracks' name and size in megabytes, of which the size is smaller than 1 megabyte</summary>

```sql
SELECT
    Name,
    Bytes / 1000 / 1000 AS Megabytes
FROM
    Track
WHERE
    Bytes / 1000 / 1000 <= 1;
```
</details>

### Where like
<details><summary>Show all employees' first name, last name and title whose title mentions IT</summary>

```sql
SELECT
    FirstName,
    LastName,
    Title
FROM
    Employee
WHERE
    Title LIKE '%IT%';
```
</details>
<details><summary>Show all customers' full name and email, whose email address is of the gmail.com domain</summary>

```sql
-- The || operator is "concatenate" - it joins together the two strings of its operands.
SELECT
    FirstName || ' ' || LastName as FullName,
  Email
FROM
    Customer
WHERE
    Email LIKE '%gmail.com';
```
</details>

### Where and
<details><summary>Show all employees' first name, last name, title and city whose title mentions IT and that live in the city of Calgary</summary>

```sql
SELECT
    FirstName,
    LastName,
    Title,
    City
FROM
    Employee
WHERE
    Title LIKE '%IT%'
    AND City = 'Calgary';
```
</details>

### Where or
<details><summary>Show all employees' first name, last name, title and city whose title mentions IT and that live in the city of Calgary or Lethbridge</summary>

```sql
SELECT
    FirstName,
    LastName,
    Title,
    City
FROM
    Employee
WHERE
    Title LIKE '%IT%'
    AND(City = 'Calgary'
        OR City = 'Lethbridge');
```
</details>

### Where between
<details><summary>Show all invoices' id and invoice date that got invoiced in the first quarter of 2009</summary>

```sql
SELECT
    InvoiceId,
    InvoiceDate
FROM
    Invoice
WHERE
    InvoiceDate BETWEEN '2009-01-01' AND '2009-03-31';
```

</details>

### Where in
<details><summary>Show the number of customers who live in Argentina, Brazil, Canada, Chile and USA</summary>

```sql
SELECT
    count(*)
FROM
    Customer
WHERE
    Country IN('Argentina', 'Brazil', 'Canada', 'Chile', 'USA');
```
</details>
<details><summary>Show the number of customers who do not live in Argentina, Brazil, Canada, Chile and USA</summary>

```sql
SELECT
    count(*)
FROM
    Customer
WHERE
    Country NOT IN('Argentina', 'Brazil', 'Canada', 'Chile', 'USA');
```
</details>

### Min, sum, max, avg
<details><summary>Show the minimum duration of all tracks</summary>

```sql
SELECT
    min(Milliseconds) AS MinimumDuration
FROM
    Track;
```
</details>
<details><summary>Show the sum of all invoice totals</summary>

```sql
SELECT
    sum(Total)
FROM
    Invoice;
```
</details>
<details><summary>Show the maximum size of all tracks in megabytes</summary>

```sql
SELECT
    max(Bytes / 1000 / 1000) AS MaximumInMegabytes
FROM
    Track;
```
</details>
<details><summary>Show the average track duration in minutes</summary>

```sql
SELECT
    avg(Milliseconds / 1000 / 60) AS AverageInMinutes
FROM
    Track;
```
</details>
<details><summary>Show the rounded average invoice total (rounded to 2 digits to the right of the decimal point)</summary>

```sql
SELECT
    round(avg(Total), 2) AS AverageTotal
FROM
    Invoice;
```
</details>

### Group by
<details><summary>Show the number of tracks per playlist</summary>

```sql
SELECT
    PlaylistId,
    count(*)
FROM
    PlaylistTrack
GROUP BY
    PlaylistId;
```
</details>
<details><summary>Show the number of invoice lines per invoice</summary>

```sql
SELECT
    InvoiceId,
    count(*)
FROM
    InvoiceLine
GROUP BY
    InvoiceId;
```
</details>
<details><summary>Show the sum of all line items' total per invoice</summary>

```sql
SELECT
    InvoiceId,
    sum(UnitPrice * Quantity) AS AverageLineItemTotal
FROM
    InvoiceLine
GROUP BY
    InvoiceId;
```
</details>
<details><summary>Show the average line item total per invoice</summary>

```sql
SELECT
    InvoiceId,
    avg(UnitPrice * Quantity) AS AverageLineItemTotal
FROM
    InvoiceLine
GROUP BY
    InvoiceId;
```
</details>
<details><summary>Show the rounded average duration in minutes of tracks per composer</summary>

```sql
SELECT
    Composer,
    round(avg(Milliseconds / 1000 / 60), 2) AS AverageDurationInMinutes
FROM
    Track
WHERE
    Composer IS NOT NULL
GROUP BY
    Composer;
```
</details>
