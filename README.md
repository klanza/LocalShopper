## MVP List
A search form that accesses a database
Search results page listing products
...
...
...

=======
# LocalShopper

Local Shopper is a web application designed to solve the problem of needing a specific product on the same day, but are unsure of where to purchase it. As fast as Amazon is, it is not as fast as driving to a local store and purchasing the product. In addition to speed of purchase, there are no shipping charges. In addition to competing with Amazon and other online retailers for marketshare, Local Shopper opens up the world of eCommerce to small, locally owned businesses by allowing them to upload store inventory in a CSV file format, making the process quick and painless.

## Getting Started

In order to get this program running on a local system for development or testing, you will need to follow several steps. If you would like to view an already working model, the application is hosted at http://localshopper.herokuapp.com/

* Clone the repository and run the schema.sql file located in the 'db' folder. This will set up the initial database necessary for the SQL tables. You will need a SQL command line or program to do this such as SQLPro or MySQL.
* Make sure to change the 'config.json' inside the 'config' folder to the information corresponding to your local SQL database.
* Execute the 'npm install' command when inside the cloned repository in order to install the necessary node packages.
* Run the server.js file to allow the sequelize ORM to setup the tables and their relations.
* Rune the command "$ node_modules/.bin/sequelize db:seed:all" in order to run the datbase seeds
	* Use the command "heroku run sequelize db:seed:all --env production --app 'HEROKU-APP-NAME' to deploy the seeds for the database to the heroku server.

## Deployment

http://localshopper.herokuapp.com/

## Built With

* [Node.js](https://nodejs.org/en/) - Command line interface and data manipulation
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Materialize](http://materializecss.com/) - A modern responsive front-end framework based on Material Design
* [Heroku](https://www.heroku.com/) - Server and database hosting for running application
* [Express](https://expressjs.com) - Web application and server structure framework
* [BCrypt](https://www.npmjs.com/package/bcrypt) - A password hashing function
* [Passport](http://www.passportjs.org/) - Authentication middleware for Node.js
* [MongoDB](https://www.mongodb.com) -  A free and open-source cross-platform document-oriented database program
* [NekoDB](https://www.npmjs.com/package/nekodb) - Tiny ODM for MongoDB
* [CSV to JSON](https://www.npmjs.com/package/csvtojson) - Nodejs csv parser to convert csv to json or column arrays
* [BusBoy](https://github.com/mscdex/busboy) - A streaming parser for HTML form data for node.js
* [Express-File Upload](https://www.npmjs.com/package/express-fileupload) - Simple express file upload middleware that wraps around Busboy

## Authors

* **Anindya Gupta** - ** - [anindya1234](https://github.com/anindya1234)
* **Christopher Clark** - ** - [christopheryc94](https://github.com/christopheryc94)
* **Darwood Martin** - ** - [ddmartin3](https://github.com/ddmartin3)
* **Luke Stewart** - ** - [linkadinkadoo](https://github.com/luke-stewart)
* **Kenneth Lanza** - ** - [klanza](https://github.com/klanza)

## License

* MIT

## Acknowledgments

* **Jan Jorgenson** - ** - [ramblinjan](https://github.com/ramblinjan)
* **Peter Fesz-Nguyen** - ** - [cutejs](https://github.com/cutejs)
* **Joel Bojorquez** - ** - [eyesore-](https://github.com/eyesore-)
* **Nicholas Green** - ** - [nicholasgreen94](https://github.com/nicholasgreen94)

* Thanks to The Coding Bootcamp for the support and education