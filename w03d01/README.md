# W03D01 - Web Servers 101

### To Do
- [x] Intro to Web Servers
- [x] Intro to Express
- [x] What is "Middleware?"
- [x] Custom Middleware
- [x] EJS

165.192.0.68 IPv4
http://www.google.com 
Domain Name Servers => map between google.com 192.168.44.87
localhost => 127.0.0.1 || 0.0.0.0

3 Pillars of Web Dev
Week 3 - Back End / Server-side
Week 4 - Client-side
Week 5 - Database

Client ==> Server

### Web Servers
* HTTP requests
* HTTP utilizes the TCP connection
* Request/response connection
* Ports!! http://www.google.com:1234
* 65,535 ports available for every internet connection
* SMTP 25, 3000 development, 50541 Snek, 80 HTTP, 443 HTTPS, 5432 Postgres
* 3000, 3001, 5432, 8080: Vagrantfile

### Request
* A unique combination of a verb and a path
* Verb describes what we want to do
* Path describes the resource we are interested in
* Verbs: GET and POST
* Path/url: http://www.google.com:8080/products ==> GET /products POST /products

### Response
* Status code: 200, 2xx, 404, 500
* Optionally respond with content: HTML, video, data from a database

### Middleware
* Middleware refers to code that sits between processes
* Express middleware sits between the request and the response
* middleware === functions

### EJS
* Embedded JS
* Embedding our JS inside an HTML template
* Templating engine












# 
