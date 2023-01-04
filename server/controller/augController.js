const augModel = require('../model/augModel')


module.exports.getStatus = async (req, res) => {
    const _color = await augModel.find({})
    if(_color) {
        return res.send({code: 200, message: 'success', color: _color})
    } else {
        return res.send({code: 500, message: 'Services error'})
    }
}


module.exports.addStatus = async (req, res) => {
    const color = req.body.color

    if (!color) {
        return res.send({ code: 200, message: 'Bad Request' })
    }

    const entry = new augModel({ color: color })
    const success = await entry.save()
    if (success) {
        return res.send({ code: 200, message: 'add success' })
    } else {
        return res.send({ code: 500, message: 'Services error' })
    }
}