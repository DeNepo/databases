# Databases

[Main Page](../README.md) | [Week 2 >>](../week-2/README.md)

## Week 1

- [Learning Objectives](#learning-objectives)
- [Prep Work](#prep-work)
- [Lesson Plan](#lesson-plan)
  - [Isolate](#isolate)
  - [Integrate](#integrate)
- [Assignments](#assignments)
  - [Suggested Study](#suggested-study)
  - [Exercises](#exercises)
  - [Project](#project)

---

## Learning Objectives

- Familiarize some theoretical concepts: information systems, databases, RDMBs, relational models, tables, records, attributes, fields and keys
- Learn how to navigate a (SQLite) database
- Learn how to write basic SQL queries using following statements: `SELECT`, `ORDER BY`, `SELECT DISTINCT`, `WHERE`, `LIMIT`, `BETWEEN`, `LIKE`.
- Using the `sqlite3` module in your node apps

---

## Prep Work

> Before Sunday Class:
> - [Review the Weekly Assignments guide](https://home.hackyourfuture.be/students/weekly-assignments)
> - [Create your Homework Issue](https://home.hackyourfuture.be/students/homework-submission#homework-issues)

The goal is to make this a very hands-on class. Nonetheless it's important to familiarize yourself with some theoretical concepts surrounding databases before diving in.

- [PREPWORK.md](./PREPWORK.md)

Extra resources:

- [SQLite Tutorial - An Easy Way to Master SQLite Fast](https://www.sqlitetutorial.net/)
This is a very nice tutorial website which, surprise surprise, uses the same sample database as we use.
- [Learn basic SQL in 10 minutes - Janes Vance](https://www.youtube.com/watch?v=bEtnYWuo2Bw)
- [The Structured Query Language (SQL) - Dr. Daniel Soper](https://www.youtube.com/watch?v=kqUIoOM3WEs)

---

## Lesson Plan

> During Sunday Class
> - [Lesson Plan Slides](https://hackyourfuture.be/databases/week-1)

Today you'll learn how to interpret Database Schemas, to write SQL queries, and to use the `sqlite3` & `sqlite` node modules to query an sqlite database from Node.

### Isolate


### Integrate

You will be learning to use [sqlite3](https://github.com/mapbox/node-sqlite3/wiki/API) & [sqlite](https://github.com/kriasoft/node-sqlite) together.  `sqlite3` is the module that will be actually reading and writing to the database file, while `sqlite` will allow you to write your code with async/await.

- [CLI Query Scripts](../integrate/cli-query-scripts)

---
---

## Assignments

> After Sunday Class

### Suggested Study

#### SQL

- [sqlteaching](https://www.sqlteaching.com/)
- [SQL Murder Mystery](https://mystery.knightlab.com/)

#### SQLite

- [App for exploring SQLite databases](https://sqlitebrowser.org/)  ! highly recommended !
- [online SQLite sandbox](https://www.sqlitetutorial.net/tryit/)
- [Online SQL database explorer](https://inloop.github.io/sqlite-viewer/)
- [VSC Plugin for SQLite files](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

#### + Node

- [SQLite Node.js Guide](https://www.sqlitetutorial.net/sqlite-nodejs/)
    - This is written about the `sqlite3`.  Everything applies to the `sqlite` module, but you can use async/await instead
- [developerhowto tutorial](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
- [node-sqlite has good docs](https://github.com/kriasoft/node-sqlite)

---

### Exercises

- [Chinook Queries](https://github.com/HackYourFutureBelgium/chinook-queries)

---

### Project

