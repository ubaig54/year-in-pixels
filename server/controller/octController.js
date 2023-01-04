const octModel = require('../model/octModel')


module.exports.getStatus = async (req, res) => {
    const _color = await octModel.find({})
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

    const entry = new octModel({ color: color })
    const success = await entry.save()
    if (success) {
        return res.send({ code: 200, message: 'add success' })
    } else {
        return res.send({ code: 500, message: 'Services error' })
    }
}