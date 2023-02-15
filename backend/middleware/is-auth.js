const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader) {
        console.log('auth = false 1')
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    console.log(token)
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secretKey')
    } catch(err) {
        console.log('err', err);
        req.isAuth = false;
        return next();
    }
    if(!decodedToken) {
        console.log('auth = false 3')
        req.isAuth = false;
        return next();
    }
    req.userId = decodedToken.userId;
    console.log('auth = true')
    req.isAuth = true;
    next();
}