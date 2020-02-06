const bcrypt = require('bcryptjs')
const db = require('../../data/dbConfig')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .where(filter)
        .select('id', 'name', 'password')
} 

function findById(id) {
    return db('users')
        .where({ id })
        .first('id', 'name')
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14)
    return db('users').insert(user).returning('*')
}

module.exports = {
    find,
    findBy,
    findById,
    add
}