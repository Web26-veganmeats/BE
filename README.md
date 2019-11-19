# BE
The base URL for this project is:'https://veganmeets-buildweek.herokuapp.com'

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development env running

Install the dependancies that comes with the repo

```
npm i
```

Start the development local server, this git will use port 5000

```
npm run server
```

## Endpoints

## All Access Endpoints

**Everyone has access to all restaurant information and menu items ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants’**
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
```
Sample Return:
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
**This is what a fully seeded restaurant object will look like:**
```
Sample Body:
[
  {
    "id": 1,
    "name": "The Vegan Joint",
    "street_address": "10438 National Blvd #4664",
    "city": "Los Angeles",
    "state": "CA",
    "zip_code": "90034",
    "phone": "(310) 559-1357",
    "hours": "Monday - Sunday 9am - 9pm",
    "menuItems": [
      {
        "id": 1,
        "name": "BBQ Pulled Jackfruit Sandwich",
        "item_description": "Our vegan version of a classic pulled pork sandwich",
        "price": "$9.95",
        "restaurant_id": 1
      },
      {
        "id": 2,
        "name": "Lentil Burger",
        "item_description": "Lentil bean and brown rice patty with onion and red bell pepper on organic / non-GMO whole wheat bun.",
        "price": "$9.95",
        "restaurant_id": 1
      }
    ],
    "rating": "4.0000000000000000"
  },
  {
    "id": 2,
    "name": "Veggie Grill",
    "street_address": "2025 Wilshire Blvd",
    "city": "Santa Monica",
    "state": "CA",
    "zip_code": "90403",
    "phone": "(310) 829-1155",
    "hours": "Monday - Friday 10:30am - 11pm, Saturday - Sunday 11-11",
    "menuItems": [
      {
        "id": 3,
        "name": "VG Beyond Burger",
        "item_description": "burger by beyond meat, american \"cheese\", grilled onions, house made sauce, tomato, iceberg lettuce, sesame buns + crispy fries",
        "price": null,
        "restaurant_id": 2
      },
      {
        "id": 4,
        "name": "Turkey Dinner Sandwich",
        "item_description": "roasted \"turkey\", apple sausage stuffing, gravy & cranberry sauce + side of mashed yams",
        "price": null,
        "restaurant_id": 2
      }
    ],
    "rating": null
  },
  {
    "id": 3,
    "name": "Cafe Gratitute",
    "street_address": "512 Rose Ave",
    "city": "Venice",
    "state": "CA",
    "zip_code": "90291",
    "phone": "(424) 231-8000",
    "hours": "Monday - Sunday 8am - 10pm",
    "menuItems": [
      {
        "id": 5,
        "name": "Pure / Asian Kale & Seaweed Salad",
        "item_description": "avocado, cucumber, carrots, nori, toasted tamari almonds, sprouts, garlic tahini wasabi dressing",
        "price": "$9.00",
        "restaurant_id": 3
      },
      {
        "id": 6,
        "name": "Elevated / Chicken-fried Mushroom",
        "item_description": "roasted cauliflower mash, leek & broccoli rabe confit, sundried tomato pesto, maple tamari glaze",
        "price": "$20.00",
        "restaurant_id": 3
      }
    ],
    "rating": null
  }
]
```
**Everyone has access to individual estaurant information and menu items ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/:id’**
```
Sample Return:
{
  "id": 1,
  "name": "The Vegan Joint",
  "street_address": "10438 National Blvd #4664",
  "city": "Los Angeles",
  "state": "CA",
  "zip_code": "90034",
  "phone": "(310) 559-1357",
  "hours": "Monday - Sunday 9am - 9pm",
  "menuItems": [
    {
      "id": 1,
      "name": "BBQ Pulled Jackfruit Sandwich",
      "item_description": "Our vegan version of a classic pulled pork sandwich",
      "price": "$9.95",
      "restaurant_id": 1
    },
    {
      "id": 2,
      "name": "Lentil Burger",
      "item_description": "Lentil bean and brown rice patty with onion and red bell pepper on organic / non-GMO whole wheat bun.",
      "price": "$9.95",
      "restaurant_id": 1
    }
  ],
  "rating": "3.0000000000000000"
}
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

**Add/POST New Restaurant ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/new’**
A logged in user can add a new restaurant using this sample object:
```
Sample Body:
{
	"name": "The Vegan Joint",
	"street_address": "123 Main",
	"city": "Los Angeles",
	"state": "CA",
	"zip_code": "90064",
	"phone": "867/5309",
	"hours": "8-5 Monday- Friday"
}
```

after the restaurant is created the body will return this restaurant object:

```
Sample Return:
{
  "id": 2,
  "name": "The Vegan Joint",
  "street_address": "123 Main",
  "city": "Los Angeles",
  "state": "CA",
  "zip_code": "90064",
  "phone": "867/5309",
  "hours": "8-5 Monday- Friday"
}
```

**Update/PUT Restaurant ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/update/:id’**
A logged in user can update a restaurant using this sample object:
```
Sample Body:
{
	"name": "The Vegan Joint",
	"street_address": "123 Main",
	"city": "Los Angeles",
	"state": "CA",
	"zip_code": "90064",
	"phone": "867/5309",
	"hours": "8-5 Monday- Friday"
}
```

after the restaurant is updated the body will return this restaurant object:

```
Sample Return:
{
  "id": 2,
  "name": "The Vegan Joint, No Meat",
  "street_address": "123 Main",
  "city": "Los Angeles",
  "state": "CA",
  "zip_code": "90064",
  "phone": "867/5309",
  "hours": "8-5 Monday- Friday"
}
```
**DELETE Restaurant ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/delete/:id’**
The registered user is able to delete a restaurant if they desire, due to closing or no vegan options. No body is required in the field. Once the user has deleted the restaurant the return wil look like this:
```Return Sample:
{
  "message": "This restaurant has been deleted."
}
```

**Add/POST Ratings ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/;id/rating/new’**
The registered user is able to add an integer rating between 1-5 to the restaurant_id, which will then average out the ratings. This will show as an integer in the GET all restaurants, NOT as an object.
```
Sample Body:
{
   "rating": 3
}
```
Once the rating is added, the body will look like this:
```
Sample Return:
{
  "id": 4,
  "rating": 3,
  "restaurant_id": 2
}
```

**Add/POST New Menu Items ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/:id/menu/new’**
Here the user can add the menu item object only to the specific restaurant id:
```
Sample Body:
{
	"name": "Chik'n Nachos",
	"item_description": "Soy based chicken nachos",
	"price": "$15.00"
}
```
will return this Menu Item object:
```
Sample Return
{
  "id": 1,
  "name": "Chik'n Nachos",
  "item_description": "Soy based chicken nachos",
  "price": "$15.00",
  "restaurant_id": 1
}
```
**Update/PUT Menu Item ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/menu/update/:id’**
The registered user can update a menu item for the restaurant
```
Sample body:
{
	"name": "Chik'n Nachos",
	"item_description": "Soy based chicken nachos",
	"price": "$10.00"
}
```
After the user saves the changes, this is what the body should look like:
```
Sample Return:
{
  "id": 1,
  "name": "Chik'n Nachos",
  "item_description": "Soy based chicken nachos",
  "price": "$10.00",
  "restaurant_id": 1
}
```

**DELETE Menu Items ‘https://veganmeets-buildweek.herokuapp.com/api/restaurants/menu/:id/delete’**
The registered user is able to delete a restaurant if they desire, due to closing or no vegan options. No body is required in the field. Once the user has deleted the restaurant the return wil look like this:
```Return Sample:
{
  "message": "This menu item has been deleted."
}
```
