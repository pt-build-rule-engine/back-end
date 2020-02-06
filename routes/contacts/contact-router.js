const router = require('express').Router()
const ContactModel = require('./contact-model')
const restricted = require('../../middleware/restricted')

router.get('/', restricted(), async (req, res, next) => {
    try {
        const contacts = await ContactModel.find()

        res.status(201).json(contacts)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', restricted(), async (req, res, next) => {
    try {
        const contact = await ContactModel.findById(req.params.id)

        res.status(201).json(contact)
    } catch (err) {
        next(err)
    }
})

router.post('/', restricted(), async (req, res, next) => {
    try {
        const contact = await ContactModel.add(req.body)

        res.status(201).json(contact)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', restricted(), async (req, res, next) => {
    const { id } = req.params
    const changes = req.body

    await ContactModel.findById(id)
        .then(contact => {
            if (contact) {
                ContactModel.update(changes, id)
                    .then(updatedContact => {
                        res.json(updatedContact)
                    })
            } else {
                res.status(404).json({ message: 'there is no contact with that id' })
            }
        })
        .catch (err => {
            next(err)
        })
})

router.delete('/:id', restricted(), async (req, res, next) => {
    try {
        const deleted = await ContactModel.remove(req.params.id)

        res.status(201).json(deleted)
    } catch (err) {
        next(err)
    }
})

module.exports = router