const  Trock= require('../shemas/trock')

module.exports.HELLO = (req, res) => {
    res.send('Hello word !')
}

module.exports.SEND_DATA = (req, res) => {
    console.log(req.body)
    res.send('OK!')
}

module.exports.ADD_TROCK = (req, res) => {
    console.log(req.body)
    if (!req.body.title) {
        return res.send({error: true, msg: 'title required'})
    }
    if (!req.body.description) {
        return res.send({error: true, msg: 'description required'})
    }
    if (!req.body.rating) {
        return res.send({error: true, msg: 'rating required'})
    }
    if (req.body.rating > 5 || req.body.rating < 0 || !Number(req.body.rating)) {
        return res.send({error: true, msg: 'rating invalid'})
    }
    if (!req.body.poster) {
        return res.send({error: true, msg: 'poster required'})
    }
    const trock = new Trock(req.body)
    trock.save()
        .then(ok => {
            res.send({error: false, msg: 'Trock Added'})
        })
        .catch(err => {
            console.log(err)
            res.send({error: true, msg: 'Trock not added !'})
        })
}
module.exports.ALL_TROCK = (req, res) => {
    Trock.find()
        .then(trocks => {
            res.send(trocks)
        })
        .catch(err => {
            res.send('NOT OK')
        })
}
module.exports.EDIT_TROCK = (req, res) => {
    const id = req.body._id
    if (!id) return res.send('NO ID')
    trock.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        poster: req.body.poster
    })
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('NOt OK')
        })
}
module.exports.DELETE_TROCK = (req, res) => {
    const id = req.body._id
    if (!id) return res.send('NO ID')
    Trock.findByIdAndDelete(id)
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('NOt OK')
        })
}