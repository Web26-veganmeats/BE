
exports.seed = function(knex) {
  
  return knex('menu_items').insert([
    {name: 'BBQ Pulled Jackfruit Sandwich', item_description: 'Our vegan version of a classic pulled pork sandwich', price: '$9.95', restaurant_id: 1},
    {name: 'Lentil Burger', item_description: 'Lentil bean and brown rice patty with onion and red bell pepper on organic / non-GMO whole wheat bun.', price: '$9.95', restaurant_id: 1},
    {name: 'VG Beyond Burger', item_description: 'burger by beyond meat, american "cheese", grilled onions, house made sauce, tomato, iceberg lettuce, sesame buns + crispy fries', restaurant_id: 2},
    {name: 'Turkey Dinner Sandwich', item_description: 'roasted "turkey", apple sausage stuffing, gravy & cranberry sauce + side of mashed yams', restaurant_id: 2},
    {name: 'Pure / Asian Kale & Seaweed Salad', item_description: 'avocado, cucumber, carrots, nori, toasted tamari almonds, sprouts, garlic tahini wasabi dressing', price: '$9.00', restaurant_id: 3},
    {name: 'Elevated / Chicken-fried Mushroom', item_description: 'roasted cauliflower mash, leek & broccoli rabe confit, sundried tomato pesto, maple tamari glaze', price: '$20.00', restaurant_id: 3}

  ]);
   
};
