/*
  user input: name of table, name of column, search string
  logged data: all entries in the table who's column matches the search
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const userInput = {};

// hint:  `... LIKE '%${userInput.searchString}%'`
const queryString = ``;

(async () => {
  try {
    // open the database
    const db = await sqlite.open({
      filename: DB_PATH,
      driver: sqlite3.Database
    });

    const result = await db.all(queryString);

    console.log(result)

  } catch (err) {
    console.error(err)
  }
})();
