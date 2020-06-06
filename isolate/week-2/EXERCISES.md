# Week 2
In these exercises we focus solely on writing SQL. You can use the [the online SQLite viewer](https://inloop.github.io/sqlite-viewer/) again or use one of the tools suggested in the previous class. 
## Joins
<details><summary>1. Show all albums' title and artist name</summary>

```sql
SELECT
	title AS AlbumTitle,
	Artist.Name AS ArtistName
FROM
	Album
	JOIN Artist ON Artist.ArtistId = Album.ArtistId;
```
</details>

<details><summary>2. Show all tracks' name, composer and genre name</summary>

```sql
SELECT
	Track.Name AS TrackName,
	Composer,
	Genre.Name AS GenreName
FROM
	Track
	LEFT JOIN Genre ON Genre.GenreId = Track.GenreId;
```
</details>

<details><summary>3. Show all tracks' name, composer, album name, media type name and genre name</summary>

```sql
SELECT
	Track.Name AS TrackName,
	Composer,
	Album.Title AS AlbumTitle,
	MediaType.Name AS MediaTypeName,
	Genre.Name AS GenreName
FROM
	Track
	LEFT JOIN Genre ON Genre.GenreId = Track.GenreId
	LEFT JOIN Album ON Album.AlbumId = Track.AlbumId
	LEFT JOIN MediaType ON MediaType.MediaTypeId = Track.MediaTypeId;
```
</details>

<details><summary>4. Show all albums' title and track names</summary>

```sql
SELECT
	title AS AlbumTitle,
	Track.Name AS TrackName
FROM
	Album
	JOIN Track ON Track.AlbumId = Album.AlbumId;
```
</details>

<details><summary>5. Show all artists</summary>

```sql
SELECT
	title AS AlbumTitle,
	Track.Name AS TrackName,
	Artist.Name AS ArtistName
FROM
	Album
	JOIN Track ON Track.AlbumId = Album.AlbumId
	JOIN Artist ON Artist.ArtistId = Album.ArtistId;
```
</details>

<details><summary>6. Show all employees' full name, title and their superior's full name and title only if they have a superior</summary>

```sql
SELECT
	Employee.FirstName || ' ' || Employee.LastName AS EmployeeFullName,
	Employee.Title AS EmployeeTitle,
	Superior.FirstName || ' ' || Superior.LastName AS SuperiorFullName,
	Superior.Title AS SuperiorTitle
FROM
	Employee
	INNER JOIN Employee AS Superior ON Superior.EmployeeId = Employee.ReportsTo;
```
</details>

<details><summary>7. Show the number of invoice lines' per invoice billing country</summary>

```sql
SELECT
	BillingCountry,
	count(*) AS NumberOfInvoiceLines
FROM
	Invoice
	JOIN InvoiceLine ON InvoiceLine.InvoiceId = Invoice.InvoiceId
GROUP BY
	BillingCountry;
```
</details>

<details><summary>8. Show the number of invoices per customer; show customers' full name</summary>

```sql
SELECT
	Customer.FirstName || ' ' || Customer.LastName AS CustomerFullName,
	count(*) AS NumberOfInvoices
FROM
	Invoice
	JOIN Customer ON Customer.CustomerId = Invoice.CustomerId
GROUP BY
	Invoice.CustomerId;
```
</details>

<details><summary>9. Show the total per customer; show customers' full name</summary>

```sql
SELECT
	Customer.FirstName || ' ' || Customer.LastName AS CustomerFullName,
	sum(Total) AS Total
FROM
	Invoice
	JOIN Customer ON Customer.CustomerId = Invoice.CustomerId
GROUP BY
	Invoice.CustomerId;
```
</details>

<details><summary>10. Show the full name of the customer with the highest total</summary>

```sql
SELECT
	Customer.FirstName || ' ' || Customer.LastName AS CustomerFullName,
	sum(Total) AS Total
FROM
	Invoice
	JOIN Customer ON Customer.CustomerId = Invoice.CustomerId
GROUP BY
	Invoice.CustomerId
ORDER BY Total DESC
LIMIT 1;
```
</details>

<details><summary>11. Show all invoices for which the total is not equal to the total of all invoice lines' total; show invoices' id, invoices' total, invoice lines' total</summary>

```sql
SELECT
	Invoice.InvoiceId,
	Invoice.Total,
	round(sum(UnitPrice), 2) AS InvoiceLinesTotal,
	Total == round(sum(UnitPrice), 2) AS IsEqual
FROM
	InvoiceLine
	JOIN Invoice ON Invoice.InvoiceId = invoiceline.InvoiceId
GROUP BY
	Invoice.InvoiceId
HAVING IsEqual = FALSE;
```
</details>

<details><summary>X. Show all artists</summary>

```sql
```
</details>

<details><summary>X. Show all artists</summary>

```sql
```
</details>

<details><summary>X. Show all artists</summary>

```sql
```
</details>

<details><summary>X. Show all artists</summary>

```sql
```
</details>
