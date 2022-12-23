const janModel = require('../model/janModel')

module.exports.addStatus = async (req, res) => {
    const color = req.body.color

    if (!color) {
        return res.send({ code: 200, message: 'Bad Request' })
    }

    const entry = new janModel({ color: color })
    const success = await entry.save()
    if (success) {
        return res.send({ code: 200, message: 'add success' })
    } else {
        return res.send({ code: 500, message: 'Services error' })
    }
}