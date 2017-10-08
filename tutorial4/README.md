# Exercise 4: Getting started with NodeJS and RESTful service

**Task:** create a simple restful service using NodeJS (ES6) and [ExpressJS](https://expressjs.com/)

**Endpoint:**
- `http://localhost:3000/`: will display `Hello World` text on the browser
- `http://localhost:3000/json`: will display a **JSON** string `[{"message" : "good", "status": 200}, {"message": "bad", "status": 500}]` on the browser

**Hint:**
- Use ExpressJS as the library to run the service
- Create a JS file called `server.js`
- Config the server to be run by simply typing `npm start` on the command line. This command will automatically run `node server.js`
