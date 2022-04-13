const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const Profile = require("../database/models/profile");

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if(!token) {
        return res.status(403).send({message: "No token provided!"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({message: "Unauthorized!", error: err});
        }
        req.profileId = decoded.id;
    });
    next();
};

module.exports = {verifyToken};