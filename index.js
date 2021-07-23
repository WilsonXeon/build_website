const http = require('http');
const mysql = require('mysql2');
const express = require('express');
let app = express();
app.use(express.json());
//畚箕
const hostname = '127.0.0.1';
const port = 3306;

let config =
{
    host: '52.171.57.192',
    user: 'user',
    password: 'POMELO',
    database: 'SQL',
    port: 3306,
    ssl : {
      rejectUnauthorized: false
   }
};
//http server

const server = http.createServer((req, res) => {

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // Send the response body "Hello World"
    res.end('Hello World');
 });

 server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });


// 連線資料庫
const conn = new mysql.createConnection(config);

conn.connect(
  function (err) { 
  if (err) { 
      console.log("!!! Cannot connect !!! Error:");
      throw err;
  }
  else
  {
     console.log("成功連線資料庫");
         queryDatabase();
         updateData();
         deleteData()
  }
});

// 查詢資料庫 queryDatabase();
function queryDatabase(){
  conn.query('SELECT * FROM member', 
      function (err, results, fields) {
          if (err) throw err;
          else console.log('Selected ' + results.length + ' row(s).');
          for (i = 0; i < results.length; i++) {
              console.log('Row: ' + JSON.stringify(results[i]));
          }
          console.log('Done.');
      })
  
};

//更新資料 updateData();
function updateData(){
       conn.query('UPDATE member SET tel = ? WHERE member_ID = 513134', ['0919038666'], 
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Updated ' + results.affectedRows + ' row(s).');
           })
    //    conn.end(
    //        function (err) { 
    //             if (err) throw err;
    //             else  console.log('Done.') 
    //     });
};
//刪除資料 deleteData()
function deleteData(){
    conn.query('DELETE FROM member WHERE member_ID = 513134',
         function (err, results, fields) {
             if (err) throw err;
             else console.log('Deleted ' + results.affectedRows + ' row(s).');
        })
    conn.end(
        function (err) { 
             if (err) throw err;
             else  console.log('Done.') 
     });
};
//以上是mysql
//以下是EXP
app.get('/',(req, res)=>{

    res.send(user_edit.html);

});

app.listen(port,()=>console.log(`${port}`));

app.post("/123",function(req, res){//當使用者連線到伺服器的根目錄後的/sign.html時，做出該頁回應
    res.send(user_edit.html);
});

// app.put();

// app.delete();


