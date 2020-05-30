/*
  user input: column name, table name
  logged data: return all unique values for the given column in the given table
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const userInput = {};

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
