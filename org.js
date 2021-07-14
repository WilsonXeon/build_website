
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World');
});

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