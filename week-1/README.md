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
- Learn how to write basic SQL queries using following statements: `SELECT`, `ORDER BY`, `WHERE`, `GROUP BY` and more
- Learn how to communicate with SQLite databases in JavaScript

---

## Prep Work

> Before Sunday Class:
> - [Review the Weekly Assignments guide](https://home.hackyourfuture.be/students/weekly-assignments)
> - [Create your Homework Issue](https://home.hackyourfuture.be/students/homework-submission#homework-issues)

The goal is to make this a very hands-on class. Nonetheless it's important to familiarize yourself with some theoretical concepts surrounding databases before diving in. Dive in [here](./PREPWORK.md).

---

## Lesson Plan

> During Sunday Class
> - [Lesson Plan Slides](https://hackyourfuture.be/databases/week-1)

### Isolate
Check out this week's exercises [here](../isolate/week-1/EXERCISES.md).  You can study them in the [SQLite Tutorial Sandbox](https://www.sqlitetutorial.net/tryit/)

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

#### Tools

- [TablePlus](https://tableplus.com/) is a modern, native, and friendly GUI tool for several relational databases: SQLite, MySQL, PostgreSQL & more.
- [DB Browser for SQLite](https://sqlitebrowser.org/) is a high quality, visual, open source tool to create, design, and edit database files compatible with SQLite.
- [SQLite Viewer](https://inloop.github.io/sqlite-viewer/) is an online SQLite editor.
- [SQLite Editor by SQLite Tutorial](https://www.sqlitetutorial.net/tryit/) is also an online SQLite editor, specifically for the Chinook sample database.
- [vscode-sqlite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) is a VSCode extension to explore and query SQLite databases.

#### SQLite & Node.js

- [SQLite Node.js Guide](https://www.sqlitetutorial.net/sqlite-nodejs/)
    - This is written about the `sqlite3`.  Everything applies to the `sqlite` module, but you can use async/await instead
- [developerhowto tutorial](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
- [node-sqlite has good docs](https://github.com/kriasoft/node-sqlite)

---

### Exercises

- [Chinook Queries](https://github.com/HackYourFutureBelgium/chinook-queries)

---

### Project

