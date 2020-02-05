# API for Rule-Engine

Deployed to Heroku at https://bw-rule-engine.herokuapp.com

Method | URL | Description 
------ | --- | -----------
POST | /api/auth/register | creates a user using the data inside the request body, returns the id associated with the user
POST | /api/auth/login | login user, returns an object { message, token }
GET | /api/contacts | returns array with all contacts in the database
GET | /api/contacts/:id | returns contact by id
DELETE | /api/contacts/:id | deletes contact by id