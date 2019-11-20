const request = require('supertest');
const restaurantModel = require('./restaurantModel');

describe('Restaurant model', () => {

  it('should return all restaurants in DB', async () => {
    const restaurants = await restaurantModel.find()
    expect(restaurants).toHaveLength(3)

    const restaurant1 = restaurants[0];
    expect(restaurant1.name).toEqual('The Vegan Joint');

    const restaurant2 = restaurants[1];
    expect(restaurant2.name).toEqual('Veggie Grill');

    const restaurant3 = restaurants[2];
    expect(restaurant3.name).toEqual('Cafe Gratitute');

    expect(restaurants[0].name).toBe('The Vegan Joint');
    expect(restaurants[1].name).toBe('Veggie Grill');
    expect(restaurants[2].name).toBe('Cafe Gratitute');
  })
  describe('Checking restaurant 1 object', () => {

    it('should return Vegan Joint with id 1', async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.name).toEqual('The Vegan Joint');
    })

    it('should return the street address of "10438 National Blvd #4664" for Vegan Joint' , async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.street_address).toEqual('10438 National Blvd #4664');
    })

    it('should return the City of "Los Angeles" for Vegan Joint', async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.city).toEqual('Los Angeles');
    })

    it('should return the state for restaurant 1', async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.state).toEqual('CA');
    })

    it('should return the zip code for restaurant 1', async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.zip_code).toBe('90034');
    })

    it('should return the phone number for restaurant 1', async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.phone).toEqual('(310) 559-1357');
    })

    it('should return hours for restaurant 1', async () => {
      const restaurant = await restaurantModel.findById(1);
      expect(restaurant.hours).toEqual('Monday - Sunday 9am - 9pm');
    })
  })
  
  describe('Checking restaurant 2 object', () => {

    it('should return Veggie Grill with id 2', async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.name).toEqual('Veggie Grill');
    })

    it('should return the street address for restaurant 2' , async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.street_address).toEqual('2025 Wilshire Blvd');
    })

    it('should return the City for restaurant 2', async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.city).toEqual('Santa Monica');
    })

    it('should return the state for restaurant 2', async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.state).toEqual('CA');
    })

    it('should return the zip code for restaurant 2', async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.zip_code).toBe('90403');
    })

    it('should return the phone number for restaurant 2', async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.phone).toEqual('(310) 829-1155');
    })

    it('should return hours for restaurant 2', async () => {
      const restaurant = await restaurantModel.findById(2);
      expect(restaurant.hours).toEqual('Monday - Friday 10:30am - 11pm, Saturday - Sunday 11-11');
    })
  })

  describe('Checking restaurant 3 object', () => {

    it('should return Cafe Gratitute with id 3', async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.name).toEqual('Cafe Gratitute');
    })

    it('should return the street address for restaurant 3' , async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.street_address).toEqual('512 Rose Ave');
    })

    it('should return the City for restaurant 3', async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.city).toEqual('Venice');
    })

    it('should return the state for restaurant 3', async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.state).toEqual('CA');
    })

    it('should return the zip code for restaurant 3', async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.zip_code).toBe('90291');
    })

    it('should return the phone number for restaurant 3', async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.phone).toEqual('(424) 231-8000');
    })

    it('should return hours for restaurant 3', async () => {
      const restaurant = await restaurantModel.findById(3);
      expect(restaurant.hours).toEqual('Monday - Sunday 8am - 10pm');
    })
  })
})