const db  = require('../../data/dbConfig')

function add(contact) {
    return db('contacts')
        .insert(contact)
        .returning('*')
}

function find() {
    return db('contacts')
}

function findById(id) {
    return db('contacts')
        .where({ id })
        .returning('*')
}

function update() {

}

function remove() {

}

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}