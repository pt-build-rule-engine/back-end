# API for Rule-Engine

Deployed to Heroku at https://bw-rule-engine.herokuapp.com

Auth Routes

Method | URL | Description 
------ | --- | -----------
POST | /api/auth/register | creates a user using the data inside the request body, returns the id associated with the user.  Request body must have user schema: { name, email, password, company, phoneNumber }
POST | /api/auth/login | login user with request body format: { email, password }. returns an object { message, token }

Contacts Routes 

Method | URL | Description 
------ | --- | -----------
POST | /api/contacts | adds contact to database and returns the id
GET | /api/contacts | returns array with all contacts in the database
GET | /api/contacts/:id | returns contact by id
PUT | /api/contacts/:id | updates contact
DELETE | /api/contacts/:id | deletes contact by id