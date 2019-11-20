request = require('supertest');

const menuModel = require('./menuModel');

describe('Menu Model', () => {

  describe('Menu Items object with the menu item id 1', () => {

    it('should return the name of Menu_item 1', async () =>{
      const menuItems = await menuModel.findById(1)
      expect(menuItems.name).toEqual('BBQ Pulled Jackfruit Sandwich')
    })

    it('should return the item_description of Menu_item 1', async () =>{
      const menuItems = await menuModel.findById(1)
      expect(menuItems.item_description).toEqual('Our vegan version of a classic pulled pork sandwich')
    })

    it('should return the price of Menu_item 1', async () =>{
      const menuItems = await menuModel.findById(1)
      expect(menuItems.price).toEqual('$9.95')
    })
  })
  
  describe('Menu Items object with the menu item id 2', () => {

    it('should return the name of Menu_item 2', async () =>{
      const menuItems = await menuModel.findById(2)
      expect(menuItems.name).toEqual('Lentil Burger')
    })

    it('should return the item_description of Menu_item 2', async () =>{
      const menuItems = await menuModel.findById(2)
      expect(menuItems.item_description).toEqual('Lentil bean and brown rice patty with onion and red bell pepper on organic / non-GMO whole wheat bun.')
    })

    it('should return the price of Menu_item 2', async () =>{
      const menuItems = await menuModel.findById(2)
      expect(menuItems.price).toEqual('$9.95')
    })
  })

  describe('Menu Items object with the menu item id 3', () => {

    it('should return the name of Menu_item 3', async () =>{
      const menuItems = await menuModel.findById(3)
      expect(menuItems.name).toEqual('VG Beyond Burger')
    })

    it('should return the item_description of Menu_item 3', async () =>{
      const menuItems = await menuModel.findById(3)
      expect(menuItems.item_description).toEqual('burger by beyond meat, american "cheese", grilled onions, house made sauce, tomato, iceberg lettuce, sesame buns + crispy fries')
    })

    it('should return the price of Menu_item 3', async () =>{
      const menuItems = await menuModel.findById(3)
      expect(menuItems.price).toBe(null)
    })
  })

  describe('Menu Items object with the menu item id 4', () => {

    it('should return the name of Menu_item 4', async () =>{
      const menuItems = await menuModel.findById(4)
      expect(menuItems.name).toEqual('Turkey Dinner Sandwich')
    })

    it('should return the item_description of Menu_item 4', async () =>{
      const menuItems = await menuModel.findById(4)
      expect(menuItems.item_description).toEqual('roasted "turkey", apple sausage stuffing, gravy & cranberry sauce + side of mashed yams')
    })

    it('should return the price of Menu_item 4', async () =>{
      const menuItems = await menuModel.findById(4)
      expect(menuItems.price).toBe(null)
    })
  })

  describe('Menu Items object with the menu item id 5', () => {

    it('should return the name of Menu_item 5', async () =>{
      const menuItems = await menuModel.findById(5)
      expect(menuItems.name).toEqual('Pure / Asian Kale & Seaweed Salad')
    })

    it('should return the item_description of Menu_item 5', async () =>{
      const menuItems = await menuModel.findById(5)
      expect(menuItems.item_description).toEqual('avocado, cucumber, carrots, nori, toasted tamari almonds, sprouts, garlic tahini wasabi dressing')
    })

    it('should return the price of Menu_item 5', async () =>{
      const menuItems = await menuModel.findById(5)
      expect(menuItems.price).toBe('$9.00')
    })
  })

  describe('Menu Items object with the menu item id 6', () => {

    it('should return the name of Menu_item 6', async () =>{
      const menuItems = await menuModel.findById(6)
      expect(menuItems.name).toEqual('Elevated / Chicken-fried Mushroom')
    })

    it('should return the item_description of Menu_item 6', async () =>{
      const menuItems = await menuModel.findById(6)
      expect(menuItems.item_description).toEqual('roasted cauliflower mash, leek & broccoli rabe confit, sundried tomato pesto, maple tamari glaze')
    })

    it('should return the price of Menu_item 6', async () =>{
      const menuItems = await menuModel.findById(6)
      expect(menuItems.price).toBe('$20.00')
    })
  })
})