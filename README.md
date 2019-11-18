# BE

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development env running

Install the dependancies that comes with the repo

```
npm i
```

Start the development local server, this git will use port 3300

```
npm run server
```

## Endpoints

**Register/POST New User ‘https://veganmeets-buildweek.herokuapp.com/api/auth/register’**
```
Sample Body:
{
	"username": "user",
	"password": "pass"
}
```
Returns a newly registered user object.
```
Sample Return:
{
  "id": 1,
  "username": "lmnop",
  "password": "$2a$10$7K.1dWLvDa5PLCKy/uMTcOhRrCf7jp4CEkw.3YdSX5Uk26gEqsB9C"
}
```
Does not log the user in, only registers them.

**Log in/POST Registered User ‘https://veganmeets-buildweek.herokuapp.com/api/auth/login’**
