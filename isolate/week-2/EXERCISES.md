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
	LEFT JOIN Artist ON Artist.ArtistId = Album.ArtistId;
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

<details><summary>5. Show all employees' full name, title and their superior's full name and title</summary>

```sql
SELECT
	Employee.FirstName || ' ' || Employee.LastName AS EmployeeFullName,
	Employee.Title AS EmployeeTitle,
	Superior.FirstName || ' ' || Superior.LastName AS SuperiorFullName,
	Superior.Title AS SuperiorTitle
FROM
	Employee
	LEFT JOIN Employee AS Superior ON Superior.EmployeeId = Employee.ReportsTo;
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

<details><summary>9. Show the total per customer; show customers' full name and total</summary>

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

<details><summary>11. Show the invoice total per employee; show employee full name and total</summary>

```sql
SELECT
	Employee.FirstName || ' ' || Employee.LastName AS EmployeeFullName,
	round(sum(Total), 2) AS Total
FROM
	Invoice
	JOIN Customer ON Customer.CustomerId = Invoice.CustomerId
	JOIN Employee ON Employee.EmployeeId = Customer.SupportRepId
GROUP BY
	EmployeeId;
```
</details>

<details><summary>12. Show all invoices for which the total is not equal to the total of all invoice lines' total; show invoices' id, invoices' total, invoice lines' total</summary>

```sql
SELECT
	Invoice.InvoiceId,
	Invoice.Total,
	round(sum(UnitPrice*Quantity), 2) AS InvoiceLinesTotal,
	Total == round(sum(UnitPrice*Quantity), 2) AS IsEqual
FROM
	InvoiceLine
	JOIN Invoice ON Invoice.InvoiceId = invoiceline.InvoiceId
GROUP BY
	Invoice.InvoiceId
HAVING IsEqual = FALSE;

--there are no records because all invoices fortunately add up
```
</details>

## Insert, Update, Delete
<details><summary>13. Add an employee with name Jane Doe</summary>

```sql
INSERT INTO Employee (FirstName, LastName)
		VALUES('Jane', 'Doe');
```
</details>

<details><summary>14. Update employee Jane Doe's title, birth date, hire date, city and country to be Sales Support Agent, 2000-06-07 00:00:00, 2020-06-07 00:00:00, Lethbridge and Canada respectively</summary>

```sql
UPDATE
	Employee
SET
	Title = 'Sales Support Agent',
	BirthDate = '2000-06-07 00:00:00',
	HireDate = '2020-06-07 00:00:00',
	City = 'Lethbridge',
	Country = 'Canada'
WHERE
	FirstName = 'Jane' AND LastName ='Doe';
```
</details>

<details><summary>15. Update the support rep id of all customers with country Canada to Jane Doe; then run the query of exercise 14 again</summary>

```sql
UPDATE
	Customer
SET
	SupportRepId = 9 --fill in the SupportRepId accordingly
WHERE
	Country = 'Canada';

--Jane Doe now has a total too
```
</details>

<details><summary>16. Add an invoice line for invoice with id 1 with track id, unit price and quantity to be 2, 0.99 and 2 respectively; then run the query of exercise 12 again</summary>

```sql
INSERT INTO InvoiceLine (InvoiceId, TrackId, UnitPrice, Quantity)
	VALUES('1', '2', '0.99', '2');

--there should now be one invoices for which the total is not equal to the total of all the invoice lines' total
```
</details>

<details><summary>17. Update the invoice total of invoice 1 accordingly; run the query of exercise 11 again</summary>

```sql
UPDATE
	Invoice
SET
	Total = 3.96
WHERE
	InvoiceId = 1;

--all invoices should add up again
```
</details>

<details><summary>18. Delete the previously added invoice line; then run the query of exercise 12 again</summary>

```sql
DELETE FROM InvoiceLine
WHERE Quantity = '2';

--OR use the InvoiceLineId instead

DELETE FROM InvoiceLine
WHERE InvoiceLine.InvoiceLineId = '2241'; --fill in the InvoiceLineId accordingly

--there should now be one invoice for which the total is not equal to the total of all the invoice lines' total
```
</details>

<details><summary>19. Again, update the invoice total of invoice 1 accordingly; then run the query of exercise 12 again</summary>

```sql
UPDATE
	Invoice
SET
	Total = 1.98
WHERE
	InvoiceId = 1;

--all invoices should add up again
```
</details>
