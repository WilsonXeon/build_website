
const { response } = require('express');
const http = require('http');
//+
const fs = require("fs");
const qs = require("querystring");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("Hello World");
});

//亂加
const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./html/${filename}`, (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.setHeader("Content-Type", "text/plain");
        response.end("Sorry, internal error");
      } else {
        response.statusCode = statusCode;
        response.setHeader("Content-Type", "text/html");
        response.end(data);
      }
    });
  };
  
  const server = http.createServer((request, response) => {
    const method = request.method;
    let url = request.url;
  
    if (method === "GET") {
      const requestUrl = new URL(url, `http://${ip}:${port}`);
      url = requestUrl.pathname;
      const lang = requestUrl.searchParams.get("lang");
      let selector;
  
      if (lang === null || lang === "en") {
        selector = "";
      } else if (lang === "zh") {
        selector = "-zh";
      } else {
        selector = "";
      }
      
if (url === "/") {
    sendResponse(`index${selector}.html`, 200, response);
  } else if (url === "/home.html") {
    sendResponse(`home${selector}.html`, 200, response);
  } else if (url === "/login.html") {
    sendResponse(`login${selector}.html`, 200, response);
  } else if (url === "/login-success.html") {
    sendResponse(`login-success${selector}.html`, 200, response);
  } else if (url === "/login-fail.html") {
    sendResponse(`login-fail${selector}.html`, 200, response);
  } else {
    sendResponse(`404${selector}.html`, 404, response);
  }
} else {
  if (url === "/process-login") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      body = qs.parse(body);
      console.log(body);

      if (body.username === "aiya" && body.password === "861202") {
        response.statusCode = 301;
        response.setHeader("Location", "/login-success.html");
      } else {
        response.statusCode = 301;
        response.setHeader("Location", "/login-fail.html");
      }

      response.end();
    });
  }
}
});

//原有
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



document.addEventListener('DOMContentLoaded', function () {

  /* create an axios client to the SQL API */
  var API_KEY = 'whatever-with-public/link-datasets',
      USER_NAME = 'cartojs-test',
      SQL_CLIENT = axios.create({
          method: 'get',
          url: 'https://' + USER_NAME + '.carto.com/api/v2/sql?',
          params: {
              api_key: API_KEY
          }
      });

  /* make a request and put callbacks for success and error events */
  SQL_CLIENT.request({
          params: {
              q: "SELECT COUNT(*) FROM ne_10m_populated_places_simple"
          },
      })
      .then(function (response) {
          if (response && response.data) {
              console.log(response.data);
              var el = document.getElementById('count');
              el.innerHTML = response.data.rows[0]['count'];
          } else {
              alert('Check the console, something happened');
          }
      })
      .catch(function (error) {
          alert('Check the console, something happened');
          console.log(error);
      });
});