const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../../config/secrets')
const UserModel = require('./users-model')
const router = require('express').Router()

router.post('/register', async (req, res, next) => {
  try {
    const saved = await UserModel.add(req.body)

    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.findBy({ email }).first()

    const passwordValid = await bcrypt.compare(password, user.password)

    if (user && passwordValid) {
      const token = jwt.sign({
        subject: user.id,
        email: user.email
      }, secrets.jwt, {
        expiresIn: '7d'
      })

      res.status(200).json({
        message: `login successful`,
        token
      })
    } else {
      res.status(401).json({
        message: 'invalid credentials'
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router