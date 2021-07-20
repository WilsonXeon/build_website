const mysql = require('mysql2');

// const hostname = '127.0.0.1';
// const port = 3000;

var config =
{
    host: '52.171.57.192',
    user: 'user',
    password: 'password',
    database: 'SQL_shop',
    port: 3306,
    ssl : {
      rejectUnauthorized: false
   }
};

const conn = new mysql.createConnection(config);

conn.connect(
  function (err) { 
  if (err) { 
      console.log("!!! Cannot connect !!! Error:");
      throw err;
  }
  else
  {
     console.log("Connection established.");
         queryDatabase();
  }
});

function readData(){
  conn.query('SELECT * FROM inventory', 
      function (err, results, fields) {
          if (err) throw err;
          else console.log('Selected ' + results.length + ' row(s).');
          for (i = 0; i < results.length; i++) {
              console.log('Row: ' + JSON.stringify(results[i]));
          }
          console.log('Done.');
      })
  conn.end(
      function (err) { 
          if (err) throw err;
          else  console.log('Closing connection.') 
  });
};



