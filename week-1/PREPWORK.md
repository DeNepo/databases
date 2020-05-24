# Prep Work
The goal is to make this a very hands-on class. Nonetheless it's important to familiarize yourself with some theoretical concepts surrounding databases before diving in.
## Information Systems and Databases
[Databases](https://en.wikipedia.org/wiki/Database) are a type of [(computer) information systems](https://en.wikipedia.org/wiki/Information_system). They organize collections of data, stored and accessed a computer system.

Imagine the following piece of information: Evan Cole was walking down the Cantersteen in Bruxelles at 9:30 on Sunday May 31st 2020. This sole sentence holds a lot of information but for a computer system this sentence isn't the optimal organisation of data.

Instead of storing the sentence, it's would be easier for a computer system if the information would be stored in a more structured way. Something like this:
- activity `walking`
- address.street `Cantersteen`
- address.city `Bruxelles`
- subject.full_name `Evan Cole`
- datetime `2020-05-31T09:30:00+01:00` (this is a specific format that is used to store datetimes: [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))

And it's exactly this kind of organized collection of data that a database allows you to store and access. The database will allow us to answer questions such as "Who was walking down Canterstee on May 31st 2020?" and "In which city was Evan Cole walking  on May 31st 2020?". The software systems that enables users to define, create, maintain and control access to the database are called [database management systems (DBMS)](https://en.wikipedia.org/wiki/Database#Database_management_system).

DBMSs come in all shapes and sizes. There are two big categories:
1. [Relational databases](https://en.wikipedia.org/wiki/Relational_database), most of them using [structured query language (SQL)](https://en.wikipedia.org/wiki/SQL) for storing and accessing data. Examples are [MySQL](https://www.mysql.com/), [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/) and [SQLite](https://www.sqlite.org/index.html).
2. [NoSQL or non-relational databases](https://en.wikipedia.org/wiki/NoSQL) different query languages. Examples are [MongoDB](https://www.mongodb.com/) and [Apache Cassandra](https://cassandra.apache.org/).

In this module we will be working with one specific relational DBMS: [SQLite](https://www.sqlite.org/index.html).

Extra resources:

- [What is an information system - Charlie Love](https://www.youtube.com/watch?v=Qujsd4vkqFI)
- [What is a database - Charlie Love](https://www.youtube.com/watch?v=t8jgX1f8kc4)
- [What is Database & SQL? - Guru99](https://www.youtube.com/watch?v=FR4QIeZaPeM)
- [What are databases? - LinkedIn Learning](https://www.youtube.com/watch?v=Ls_LzOZ7x0c)

## Chinook Sample Database
Before we continue let's familiarize ourselves with a concrete, sample database. In this module we'll be using the [Chinook](https://github.com/lerocha/chinook-database) database. It models data to represent a digital media store: artists, albums, media tracks, invoices and customers. [The database schema](https://en.wikipedia.org/wiki/Database_schema) for this database looks like this: 

![Chinook Sample Database](chinook-schema.png)

## Entities, attributes and relationships

You abstract (generalize) to make sense of the world. You do it everywhere, all the time. Even without thinking about it.
As Zachery Tellman states: "To abstract is to treat things which are different as equivalent".
You speak of a dog called Bello, and since it's a dog you also know that Bello is an animal and a pet.
This is not something that Bello will tell you, humans made all this up.
Dog, animal, pet, humans, all these are abstractions.

One way of abstracting is to think of entities and their relationships.
An entity is an abstraction. It represents a certain category of things, like:
humans, women, men, animals, pets, broken bicycles, chairs, music, teachers, chewing gum, and planets.
You can think of a **pet** as an entity that has a relationship to another entity **human**, its owner.
More formally you can say a **human** owns **zero or more** **pets**.

When creating an application you need to think of all the entities and their relationships
that are relevant to our application, you call this the application's **domain**.
Together these entities and relationships form the **domain model** for your application.

## 6. What are data types (as applied to databases)?

When you store data in MySQL, each datum (singular of the word data) needs to be associated with its type.

For example numbers like 42, 1636 or -345 are all associated with the type `int`.

The following is a list of the most frequently used data types.

| Type       | Description                                   | Example Value           |
| ---------- | --------------------------------------------- | ----------------------- |
| int        | Numbers                                       | 42                      |
| float      | Decimal numbers                               | 3.14                    |
| varchar(N) | String with variable maximum of N characters  | "Dragon"                |
| text       | String with fixed maximum of 65535 characters | "Positive"              |
| datetime   | Store date and time without timezone          | 2019-01-01 22:10:23     |
| timestamp  | Store date with timezone (e.g. last login)    | 2019-01-01 22:10:23 UTC |
| BLOB       | Store binary files                            | an image                |

There are many more data types. You can read about them [here](https://www.w3resource.com/mysql/mysql-data-types.php).

Extra resources:

- [Mendix Introduction Course - Entities vs. The Database - Mendix Community](https://www.youtube.com/watch?v=hBu2pdphYaA)
- [Entities, Attributes, and Relationships](https://www.youtube.com/watch?v=hveVlCHZtsI)

## 5. What is Structured Query Language (SQL)?

SQL (Structured Query Language) is a programming language used for managing the data that is stored in a DBMS (DataBase Management System). The `Query` part in SQL refers to the act of "asking a database" for a certain type of information; you are `querying the database`.

There are several implementations (software) of DBMS. Each software provides its own query language. For this course, you will learn [MySQL](https://www.mysql.com/).

To learn more, check out the following:

- [The Structured Query Language (SQL)](https://www.youtube.com/watch?v=kqUIoOM3WEs)


## 7. How to use SQL to Create, Read, Update and Delete (CRUD)

With the knowledge of all the datatypes, you can now create tables that contain the data with these datatypes.

Tables contain columns and columns have datatypes. For example, in a column with names of students,
you cannot have numbers.

- MySQL provides a `CREATE TABLE` statement that creates a table with columns. You can choose the table name, column names but you have to choose the pre-defined datatypes supported by MySQL. For example, a column `Registration number` cannot have the data type number. It must use `int` because it represents the numeric datatype.

- MySQL provides `SELECT` statement which reads (columns and rows) from a table with or without filtration.

- MySQL provides `UPDATE` statement which changes the contents of (columns and rows of) a table.

- MySQL provides `DELETE` statement which can delete rows of tables. In order to delete columns, you need to use `ALTER` and `DROP` statements.

Check out the following to learn more about how to apply SQL:

- [Learn basic SQL in 10 minutes](https://www.youtube.com/watch?v=bEtnYWuo2Bw)
- [Learn Basic SQL Commands](https://www.youtube.com/watch?v=OlT3FispsMU)
