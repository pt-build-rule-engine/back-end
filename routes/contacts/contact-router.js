const router = require('express').Router()
const ContactModel = require('./contact-model')

router.get('/contacts', async (req, res, next) => {
    try {
        const contacts = await ContactModel.find()

        res.status(201).json(contacts)
    } catch (err) {
        next(err)
    }
})

router.get('/contacts/:id', async (req, res, next) => {
    try {
        const contact = await ContactModel.findById(req.params.id)

        res.status(201).json(contact)
    } catch (err) {
        next(err)
    }
})

router.delete('/contacts/:id', async (req, res, next) => {
    try {
        const deleted = await ContactModel.remove(req.params.id)

        res.status(201).json(deleted)
    } catch (err) {
        next(err)
    }
})

module.exports = router