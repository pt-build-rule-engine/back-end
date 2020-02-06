const router = require('express').Router()
const ContactModel = require('./contact-model')

router.get('/', async (req, res, next) => {
    try {
        const contacts = await ContactModel.find()

        res.status(201).json(contacts)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const contact = await ContactModel.findById(req.params.id)

        res.status(201).json(contact)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const contact = await ContactModel.add(req.body)

        res.status(201).json(contact)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
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

router.delete('/:id', async (req, res, next) => {
    try {
        const deleted = await ContactModel.remove(req.params.id)

        res.status(201).json(deleted)
    } catch (err) {
        next(err)
    }
})

module.exports = router