const supertest = require('supertest')
const server = require('../../api/server')
const db = require('../../data/dbConfig')

beforeEach(async () => {
    await db('contacts').truncate()
})

test('add contact route', async () => {
    const res = await supertest(server)
        .post('/api/contacts')
        .send({
            name: 'Ian',
            company: 'Lambda',
            email: 'Ian@email.com'
        })
    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body).toBeTruthy()
})

// test('get contacts route', async () => {
//     // await supertest(server)
//     //     .post('/api/contacts')
//     //     .send({
//     //         name: 'Ian',
//     //         company: 'Lambda',
//     //         email: 'Ian@email.com'
//     //     })

//     const res = await supertest(server)
//         .get('/api/contacts')

//     expect(res.status).toBe(201)
//     expect(res.type).toBe('application/json')
//     expect(res.body).toBeTruthy()
// })
