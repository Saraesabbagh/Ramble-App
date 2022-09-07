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
exports.validateUser = exports.getDetails = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * Login page.
 * @route GET /api/user/details
 */
const getDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.User.findOne({ email: req.body.id }, (err, user) => {
        if (err) {
            return next(err);
        }
        res.send(JSON.stringify(user));
    });
});
exports.getDetails = getDetails;
const validateUser = (req, res, next) => {
    user_1.User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return next(err);
        }
        bcrypt_1.default.compare(req.body.password, user.password, function (err, isMatch) {
            if (err) {
                return next(err);
            }
            if (isMatch) {
                return user;
                // check with frontend what is best to return
            }
            else {
                res.redirect("/session/new");
            }
        });
    });
};
exports.validateUser = validateUser;
//# sourceMappingURL=user.js.map