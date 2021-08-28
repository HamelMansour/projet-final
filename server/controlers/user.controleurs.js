const User = require('../shemas/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports.REGISTER = async (req, res) => {
    const pwdHashed = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = pwdHashed;
    const user = new User (req.body)
    user.save()
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('ERR')
        })
}
module.exports.LOGIN = async (req, res) => {
    console.log(req.body)
    if (!req.body.email) {
        return res.send({error: true, msg: 'email required'})
    }
    if (!req.body.password) {
        return res.send({error: true, msg: 'password required'})
    }
    const user = await User.findOne({email: req.body.email}).exec()
    if (!user) return res.send({error: true, msg: 'email invalid'})
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) return res.send({error: true, msg: 'passorwd invalid'})
    res.send({error: false, msg: 'OK', data: user})
}
module.exports.ALLUSERS = (req, res) => {
    User.find()
        .then(u => {
            res.send(u)
        })
        .catch(err => {
            res.send('ERR')
        })
}