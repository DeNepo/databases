const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const userInput = {
  column: process.argv[2],
  table: process.argv[3]
};

const queryString = `
  SELECT ${userInput.column}
  FROM ${userInput.table}`;

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
