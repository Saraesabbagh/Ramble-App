"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.signIn = exports.signUp = void 0;
const auth_config_1 = require("../config/auth.config");
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp = (req, res) => {
    const user = new user_1.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "User was registered successfully!" });
    });
};
exports.signUp = signUp;
const signIn = (req, res) => {
    user_1.User.findOne({
        email: req.body.email,
    }, (err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }
        const validPassword = bcrypt_1.default.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Password!" });
        }
        jsonwebtoken_1.default.sign({ id: user.id }, auth_config_1.config.secret, {
            expiresIn: 86400,
        }, (err, token) => {
            req.session.token = token;
        });
        console.log(req.session);
        res.status(200).send({
            message: 'Signin Successful',
            user: user,
        });
    });
};
exports.signIn = signIn;
const signOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    }
    catch (err) {
        next(err);
    }
});
exports.signOut = signOut;
//# sourceMappingURL=auth.js.map