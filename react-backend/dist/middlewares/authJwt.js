"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_config_1 = require("../config/auth.config");
const verifyToken = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }
    jsonwebtoken_1.default.verify(token, auth_config_1.config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        req.userId = decoded.id;
        next();
    });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=authJwt.js.map