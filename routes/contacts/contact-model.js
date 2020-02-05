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

function update(changes, id) {
    return db('contacts')
        .where({ id })
        .update(changes)
        .then(id => {
            if (id > 0) {
                findById(id)
            } else {
                return null
            }
        })
}

function remove(id) {
    return db('contacts')
        .where({ id })
        .del()
}

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}