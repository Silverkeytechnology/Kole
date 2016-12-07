[![Stories in Ready](https://badge.waffle.io/Silverkeytechnology/Kole.png?label=ready&title=Ready)](https://waffle.io/Silverkeytechnology/Kole)
# Kole
Kole is a Student Information Management System, managing information such as Student Registration Details, Student Payment Records, Student Accademic Records, e.t.c

# Table of content
* [Setup](#Setup)
* [Configure](#configure-the-application)
* Run
  * [Application](#running-the-application)
  * [Unit tests](#running-tests)
* [Troubleshooting](#troubleshooting)
* [Rest API](#rest-api)

# Setup
In order to setup this application,on your development machine, you need first to ensure that you have:
* ```NPM``` and ```npm bundler``` installed
* Node.JS version 6.9.1 or higher installed
* Git (a distributed version control system) installed

To get a copy of the application , run the following command:
```
git clone https://github.com/Silverkeytechnology/Kole.git
```

Inside the folder Kole, run the following command which will get all dependencies for the application to be installed:
```
npm install
```

At this point we have all the dependencies installed and we are ready to start

# Configure the application

Please create a .env file (if you don't have one already) and copy the contents from .env.sample. This is needed before running your application.

... We will need to fill this up with mongo db connection info

If you are unsure what this means just run the following command to make a copy of the .env: `cp .env.sample .env`


# Running the application

After the configuration is completed, we can start the application using the following command:

```
npm start
```

# Running tests

To run all the Chai/Mocha tests(Unit Tests for TDD) run the following command:

```
npm test
```

To run all the Cucumber tests(Feature Tests for BDD) run the following command:

```
npm run cucumber
```


# Troubleshooting

## Mocha not installed error

If you get this error try cleaning the cache using the following command:

```
npm cache clean
```

## ES6 Support

If you are experiencing errors like:

```
Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

Make sure that the version of Node is >= 6.9.1
Run the command below to check the version of Node installed:
```
node -v
```

# Adding REST routes

Top-level routing is now handled in the `toDo` file. For domain-level sub-routes please use an appropriate routing file in the domain folder.

Please see `toDo` and `toDO` for examples of how it is done.

# Rest API

Please see [API Documentation](./api.md) for details
