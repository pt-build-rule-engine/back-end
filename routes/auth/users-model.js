const bcrypt = require('bcryptjs')
const db = require('../../data/dbConfig')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .where(filter)
        .select('id', 'email', 'password')
} 

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14)
    return db('users').insert(user).returning('*')
}

module.exports = {
    find,
    findBy,
    add
}