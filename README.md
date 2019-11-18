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

## All Access Endpoints

**Anyone has access to all restaurant information and menu items ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants’**
```
Sample Body:
[
  {
    "id": 1,
    "name": "Vegas",
    "street_address": "123 Main",
    "city": "Los Angeles",
    "state": "CA",
    "zip_code": "90064",
    "phone": "867/5309",
    "hours": "8-5 Monday- Friday",
    "menuItems": [
      {
        "id": 1,
        "name": "Chik'n Nachos",
        "item_description": "Soy based chicken nachos",
        "price": "$15.00",
        "restaurant_id": 1
      }
    ]
  }
]
```
This returns an array of a restaurant object that includes the restaurant information and menu items if entered.

If no menu has been entered they vistor will get this returned:
```[
  {
    "id": 1,
    "name": "Vegas",
    "street_address": "123 Main",
    "city": "Los Angeles",
    "state": "CA",
    "zip_code": "90064",
    "phone": "867/5309",
    "hours": "8-5 Monday- Friday",
    "menuItems": [
      {
        "id": 1,
        "name": "Chik'n Nachos",
        "item_description": "Soy based chicken nachos",
        "price": "$15.00",
        "restaurant_id": 1
      }
    ]
  },
  {
    "id": 2,
    "name": "The Vegan Joint",
    "street_address": "123 Main",
    "city": "Los Angeles",
    "state": "CA",
    "zip_code": "90064",
    "phone": "867/5309",
    "hours": "8-5 Monday- Friday",
    "menuItems": []
  }
]
```

## Restricted Access

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
  "username": "user",
  "password": "$2a$10$7K.1dWLvDa5PLCKy/uMTcOhRrCf7jp4CEkw.3YdSX5Uk26gEqsB9C"
}
```
Does not log the user in, only registers them.

**Log in/POST Registered User ‘https://veganmeets-buildweek.herokuapp.com/api/auth/login’**
```
Sample Body:
{
	"username": "user",
	"password": "pass"
}
```
Returns a hashed password and a token.
```
Sample Return:
{
  "message": "Welcome user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Imxtbm9wIiwiaWF0IjoxNTc0MDMwMjU4LCJleHAiOjE1NzQxMTY2NTh9.6PY6vxaU2o0xfp03JGelkPveslGxE1IE60wWfouBnXs"
}
```

**Log in/POST Registered User ‘https://veganmeets-buildweek.herokuapp.com/api/auth/login’**
