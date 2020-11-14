# Databases

> I literally have a massive database of cat sounds.
> - [El-P](https://www.imdb.com/name/nm1474803/)

## Contents

- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
- [Class Recordings](#class-recordings)
- [study.hackyourfuture.be](https://study.hackyourfuture.be)
- [home.hackyourfuture.be](https://home.hackyourfuture.be/)

---

## Learning Objectives

What can you expect to learn in this module?

### Programming Skills

- Learn what relational database management systems (RDBMS) are
- Learn about relational models, tables, columns, rows, primary keys, foreign keys and relationships
- Learn how to write structured query language (SQL)
- Familiarize some theoretical concepts: information systems, databases, RDMBs, relational models, tables, records, attributes, fields and keys
- Learn how to navigate a (SQLite) database
- Learn how to write basic SQL queries to read data using following statements: `SELECT`, `ORDER BY`, `SELECT DISTINCT`, `WHERE`, `LIMIT`, `BETWEEN`, `LIKE`, `GROUP BY`, `JOIN`
- Learn how to write basic SQL queries to create, update and delete records and tables using the following statements: `INSERT`, `UPDATE`, `DELETE`, `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`
- Learn about SQL injection

### Tooling

- [SQLite](https://www.sqlite.org/index.html) - a SQL database engine
- [node-sqlite3](https://github.com/mapbox/node-sqlite3)

### Module Projects

Projects in this module will use the same folder structure & boilerplate code you learned in [the previous `web-apps` module](https://github.com/hackyourfuturebelgium/web-apps), but with an SQLite database instead of a .json file.

[TOP](#databases)

---

## Suggested Study

#### SQL

- [sqlteaching](https://www.sqlteaching.com/)
- [SQL Murder Mystery](https://mystery.knightlab.com/)

#### Tooling

- [TablePlus](https://tableplus.com/) is a modern, native, and friendly GUI tool for several relational databases: SQLite, MySQL, PostgreSQL & more.
- [DB Browser for SQLite](https://sqlitebrowser.org/) is a high quality, visual, open source tool to create, design, and edit database files compatible with SQLite.
- [SQLite Viewer](https://inloop.github.io/sqlite-viewer/) is an online SQLite editor.
- [SQLite Editor by SQLite Tutorial](https://www.sqlitetutorial.net/tryit/) is also an online SQLite editor, specifically for the Chinook sample database.
- [vscode-sqlite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) is a VSCode extension to explore and query SQLite databases.

#### SQLite & Node.js

- [./node-query-scripts](./node-query-scripts) - practice querying an SQLite database from Node.js
- References
  - [SQLite Node.js Guide](https://www.sqlitetutorial.net/sqlite-nodejs/)
  - [node-sqlite3 has good docs](https://github.com/mapbox/node-sqlite3/wiki/)
  - [developerhowto tutorial article](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
  - PetsApp: [video tutorial (SQLite starts at #7)](https://www.youtube.com/watch?v=2PCaD0Y4MP4&list=PLzV58Zm8FuBIWu1zvGRUfn0Xh6HXRg9cG&index=7), [starter code & finished to study](https://github.com/pgbovine/COGS121)

[TOP](#databases)

---

## Week 1

- Familiarize some theoretical concepts: information systems, databases, RDMBs, relational models, tables, records, attributes, fields and keys
- Learn how to navigate a (SQLite) database
- Learn how to write basic SQL queries using the following statements: `SELECT`, `ORDER BY`, `SELECT DISTINCT`, `WHERE`, `LIMIT`, `BETWEEN`, `LIKE`, `GROUP BY`
- Learn how to communicate with SQLite databases in JavaScript
- Plan and scope projects around your data

### Before Class

The goal is to make this a very hands-on class. Nonetheless it's important to familiarize yourself with some theoretical concepts surrounding databases before diving in. Dive in here [here](./week-1/prep-work.md).

### During Class

#### Before Break

Check out this week's exercises [here](./week-1/sql-exercises.md).

#### After Break

Begin planning and scoping your 2-week project.

### After Class

#### Impress Yourselves

This module's project is a two-week group project.  Anything goes! The most important thing to keep in mind for this module's project is _scoping_, it's better to build something small that works than something big that doesn't.

Here's a [starter repository](https://github.com/HackYourFutureBelgium/restful-chinook) you can use, but you don't have to.

```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- Project Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] Deployed - [deployment link]()
  - [ ] A working frontend in the `/client` directory
  - [ ] Uses the SQLite Chinook database
  - [ ] A working `/api` to access the the database
```

[TOP](#databases)

---

## Week 2

- Learn about primary keys, foreign keys, relationships and SQL injection
- Learn how to write SQL queries to read data using following statements: `JOIN`
- Learn how to write basic SQL queries to create, update and delete records and tables using the following statements: `INSERT`, `UPDATE`, `DELETE`, `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`

### Before Class

Just as last week we want to focus on practice. But some preparation never hurts, right? Get a head start 
[here](./week-2/prep-work.md)


### During Class

#### Before Break

Check out this week's exercises [here](./week-2/sql-exercises.md).

#### After Break

Check in on project scoping and progress. Remember: small and working is better than big and broken!

### After Class

Finish working on your projects from last week.

[TOP](#databases)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes.  Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

### Class 7 & 8

> [Dimitri Roose](https://github.com/sjimi), [Stijn Wynants](https://stackoverflow.com/users/1499018/stijn-wynants)

1. [Week 1](https://vimeo.com/424516925)
2. Week 2
   - [Part 1](https://vimeo.com/426980670)
   - [Part 2](https://vimeo.com/426995522)
   - [Part 3](https://vimeo.com/427003854)
   - [Part 4](https://vimeo.com/427039078)


### Class 9 & 10
> [Dimitri Roose](https://github.com/sjimi), [Stijn Wynants](https://stackoverflow.com/users/1499018/stijn-wynants)

1. Week 1
2. Week 2
