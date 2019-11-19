const request = require('supertest');
const server = require('./server');

it('has process.env.DB_ENV as testing', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('GET /', () => {

  it('should return 200 OK', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200)
      })
  })

  it ('should return JSON formatted code', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toMatch(/json/i)
      })
  })

  it('should return the API property "running inside the body', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.body).toEqual({api: 'Ready to start working'})
        expect(res.body.api).toBe('Ready to start working')
      })
  })
})

describe('Post /api/auth/', () => {
  
  it('should return 400, not passing user info in for REGISTER ', async () => {
    const res = await request(server).post('/api/auth/register')
    expect(res.status).toBe(400)
  })

  it('should return 400, not passing user info in for LOGIN', async () => {
    const res = await request(server).post('/api/auth/login')
    expect(res.status).toBe(400)
  })
})

describe('/api/restaurants', () => {
  it('should return 200 OK for restaurants', async () => {
    const res = await request(server).get('/api/restaurants')
    expect(res.status).toBe(200)
  })
})