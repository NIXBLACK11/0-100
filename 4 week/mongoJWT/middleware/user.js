const { User } = require("../db/index")
const jwt = require("jsonwebtoken")
const secret = require("../index")

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;

    const jwtToken = token.split(" ")[1];

    const decodedValue = jwt.verify(jwtToken, secret);

    if(decodedValue.username) {
        next();
    } else {
        res.status(403).json({
            msg: "Invalid user"
        });
    }
}

module.exports = userMiddleware;