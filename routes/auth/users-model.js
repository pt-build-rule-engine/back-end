const bcrypt = require('bcryptjs')
const db = require('../../data/dbConfig')

function findBy(filter) {
    return db('users')
        .where(filter)
        .select('id', 'username', 'password')
} 

function findById(id) {
    return db('users')
        .where({ id })
        .first('id', 'username')
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14)
    return db('users').insert(user).returning('*')
}

module.exports = {
    findBy,
    findById,
    add
}