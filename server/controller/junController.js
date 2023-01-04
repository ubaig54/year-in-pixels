const junModel = require('../model/junModel')


module.exports.getStatus = async (req, res) => {
    const _color = await junModel.find({})
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

    const entry = new junModel({ color: color })
    const success = await entry.save()
    if (success) {
        return res.send({ code: 200, message: 'add success' })
    } else {
        return res.send({ code: 500, message: 'Services error' })
    }
}