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
- Learn how to write basic SQL queries using the following statements: `SELECT`, `ORDER BY`, `SELECT DISTINCT`, `WHERE`, `LIMIT`, `BETWEEN`, `LIKE`, `GROUP BY`
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
Check out this week's exercises [here](../isolate/week-1/EXERCISES.md).

### Integrate

You will be learning to use [sqlite3](https://github.com/mapbox/node-sqlite3/wiki/API), a module that allows you to query your SQLite database file.

- [CLI Query Scripts](../integrate/cli-query-scripts-week-1) (week 1)

---
---

## Assignments

> After Sunday Class

### Suggested Study

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

- [SQLite Node.js Guide](https://www.sqlitetutorial.net/sqlite-nodejs/)
- [node-sqlite3 has good docs](https://github.com/mapbox/node-sqlite3/wiki/)
- [developerhowto tutorial article](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)
- PetsApp: [video tutorial (SQLite starts at #7)](https://www.youtube.com/watch?v=2PCaD0Y4MP4&list=PLzV58Zm8FuBIWu1zvGRUfn0Xh6HXRg9cG&index=7), [starter code & finished to study](https://github.com/pgbovine/COGS121)

---

### Exercises

Plenty to do in the Suggested Study.  Enjoy a week off from exercises!

---

### Project

#### Checklist

```md
- [ ] [repo](https://github.com/user-name/project-name)
- [ ] [live demo](heroku-url)
- [ ] A `development-strategy.md`
- [ ] One branch per step in your `development-strategy.md`
- [ ] A complete README.md
- [ ] A working API in the `/api` directory
- [ ] (challenge) A frontend for you API in the `/client` folder
```

#### `restful-chinook`

Build a RESTful API with CRUD access to all of the musical tables in the `chinook.sqlite` database. Starting with the [restful-chinook](https://github.com/HackYourFutureBelgium/restful-chinook), fill in the controller files in `/api` to create a fully-functioning API.

If you have finished the API and are looking for a challenge, write a frontend!  No suggestions from us, impress yourself :)

#### Deployment

This is a nice first project to try out fullstack deployment.

__Directly from GitHub__

- [FCC Article](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
- [Heroku CI](https://www.heroku.com/continuous-integration)

__From Terminal__

- [Heroku Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Scotch Tutorial](https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku)
- [Heroku devhints](https://devhints.io/heroku)
- [Heroku DevCenter: Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Heroku DevCenter: Advanced Automation](https://devcenter.heroku.com/articles/multiple-environments#advanced-linking-local-branches-to-remote-apps)
