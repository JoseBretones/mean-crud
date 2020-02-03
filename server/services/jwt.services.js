const jwt = require('jwt-simple');
const moment = require('moment');

var secret = 'clase_secreta_app';

const jwtService = {};

jwtService.createToken = (user) => {
    var payload = {
        sub: user._id,
        name: user.name,
        subname: user.subname,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix()
    };
    return jwt.encode(payload,secret);
};




module.exports = jwtService;