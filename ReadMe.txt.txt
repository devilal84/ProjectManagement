
PROJECT MANAGEMENT APPLICATION:
===============================

Project Management application is a Single Page Application (SPA) to keep track of 
projects, their respective tasks, their status, users and priorities.

This application is developed using MEAN stack such as Angular 6, Node JS(10.x), Express JS and Mongo DB(5.x).


This project contains following folders.

1. ProjectManagement-Client - Front end SPA developed uing Angular 6, Angular CLI, HTML 5, BootStrap

2. ProjectManagement-Server - Rest APIs developed using Node JS, Express and MongoDB with Mongoose driver

Installation and Run steps:
===========================

1. Install the following softwares,
	Node JS
	MongoDB
	
	Do the MongoDB setup as per the instructions given in the MongoDB official site.
	
Note: Keep the mongodb up and running, by using the following command,

"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath C:\data
 -where "C:\data" is the PATH where your Database files will be created.

2. Open ProjectManagement-Server folder, run these steps in terminal -

	=>	npm install
	=> nodemon server.js

Note: PORT was set to 3000, make sure the port 3000 was free to use.

Rest API should be connected to MongoDB and listening on port 3000.

3. Open ProjectManagement-Client folder, run these steps in terminal -
 
	=> npm install
	=> ng build
	=> ng server --open
 
 Note: PORT was set to 4300, make sure the port 4300 was free to use.
 
 
