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

module.exports = router