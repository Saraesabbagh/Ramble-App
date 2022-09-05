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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUser = void 0;
const user_1 = require("../models/user");
/**
 * Login page.
 * @route POST /api/signup
 */
const saveUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const user = new user_1.User(req.body);
    user_1.User.findOne({ email: req.body.email }, (err, users) => {
        if (err) {
            return next(err);
        }
        if (users) {
            console.log("Email exists already");
            res.send(JSON.stringify({ message: "Email exists already" }));
        }
        else {
            user.save((err) => {
                if (err) {
                    return next(err);
                }
                res.send(JSON.stringify({ message: "User saved" }));
            });
        }
    });
});
exports.saveUser = saveUser;
//# sourceMappingURL=user.js.map