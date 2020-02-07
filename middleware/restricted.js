const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

module.exports = () => {
    return (req, res, next) => {
        try {
            console.log(req)
            const token = req.headers.token
            const decoded = jwt.verify(token, secrets.jwt)

            req.userId = decoded.subject
            next()
        } catch (err) {
            return res.status(401).json({
                message: 'Invalid credentials',
            })
        }
    }
}