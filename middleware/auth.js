
function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next()
    } else {
        res.send('No Auth')
    }
}


module.exports = auth;
