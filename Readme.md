This is a basic starter project for node.js tempalte , which anyone can use as it has been prepared by keeping some of the important code principle and best practices in mind and project management recommedations. Feel free to change the code as you wish.


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests .(You might to separate the tests from the source code in the future)

--`src/config` -> Inside the config folder all the configuration files will reside rgarding any configurations or setups of a libray or module will be done. for example setting up the `dotenv` module to load the environment variables from the `.env` file so that we can use the environment variables in our code anywhere in a cleaner fashion, this is done in the `server-config.js` file. One more example is the `logger-config.js` file which is used to setup the logger for the project.

--`src/routes` -> Inside the folder, we register a route and the corresponding middlewares and controllers to it.

--`src/middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc..

--`src/controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

--`src/repositories` ->  this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here

--`src/services` -> this folder contains all the business logic which will be used by the controllers to execute the business logic and interacts with repositories to get the data from the DB.

--`src/utils` -> this folder contains all the utility functions which will be used by the controllers to execute the business logic and interacts with repositories to get the data from the DB i.e helpers functions, methods, error classes etc.





`Setup the project`

--Download this template from github and open it in your favourite text editor.

--Go inside the folder path and execute the following command:
npm install

--In the root directory create a .env file and add the following env variables

   ` PORT=<port number of your choice>`
ex:   `PORT=3000`


--go inside the src folder and execute the following command:

 `npx sequelize init`


--By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

--If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

--If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

To run the server execute

`npm run dev`


-- Inside the `src/config` folder you have to create a `config.json` file and add the following env variables
```
{
  "development": {
    "username": "root",
    "password": your_password,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

--
Go inside the `src` folder and run `npx sequelize init` to create the migrations and seeders folder along with a config.json inside the config folder.

-- if you are setting up a development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
-- if you are setting up test or prod environment, make sure you also replace the host with the hosted db url.

