const supertest = require('supertest')
const server = require('./api/server')
const db = require('./data/dbConfig')

beforeEach(async () => {
    await db('users').truncate()
})

test('register route', async () => {
    const res = await supertest(server)
        .post('/api/auth/register')
        .send({
            name: 'Ian', 
            password: '123',
            company: 'Lambda',
            email: 'Ian@email.com',
            phoneNumber: '987654321'
        })
    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body).toBeTruthy()
})

test('login route', async () => {
    await supertest(server)
    .post('/api/auth/register')
    .send({
        name: 'Ian', 
        password: '123',
        company: 'Lambda',
        email: 'Ian@email.com',
        phoneNumber: '987654321'
    })

    const res = await supertest(server)
        .post('/api/auth/login')
        .send({ email: 'Ian@email.com', password: '123'})
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.token).toBeTruthy()
})