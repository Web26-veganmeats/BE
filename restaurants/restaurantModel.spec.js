const request = require('supertest');
const restaurantModel = require('./restaurantModel');

describe('Restaurant model', () => {
  it('should return all restaurants in DB', async () => {
    const restaurants = await restaurantModel.find()
    expect(restaurants).toHaveLength(3)

    const restaurant1 = restaurants[0];
    expect(restaurant1.name).toEqual('The Vegan Joint');
  })

  it('should return 1 restaurant', async () => {
    const restaurant = await restaurantModel.findById(1);

    expect(restaurant.name).toEqual('The Vegan Joint');
  })


})