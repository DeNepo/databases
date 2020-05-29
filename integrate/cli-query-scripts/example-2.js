const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const userInput = {
  keyword: process.argv[2],
};

// MIN, MAX, SUM, AVG, ...
const queryString = `
  SELECT ${userInput.keyword}(total)
  FROM invoices;`;

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
