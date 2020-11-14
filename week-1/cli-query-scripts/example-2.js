'use strict';

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', '..', 'chinook-database', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
  keyword: process.argv[2],
};

// MIN, MAX, SUM, AVG, ...
const queryString = `
  SELECT ${userInput.keyword}(Total)
  FROM invoice;`;

db.all(queryString, (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }

  db.close();
});

