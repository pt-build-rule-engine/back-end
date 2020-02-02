const db  = require('../../data/dbConfig')

function add(contact) {
    return db('contacts')
        .insert(contact)
        .returning('*')
}

function find() {
    return db('contacts')
}

function update() {

}

function remove() {

}

module.exports = {
    add,
    find,
    update,
    remove
}