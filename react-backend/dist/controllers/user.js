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
const express_validator_1 = require("express-validator");
/**
 * Login page.
 * @route POST /api/signup
 */
const saveUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validation checks
    yield (0, express_validator_1.check)("email", "Email is not valid").isEmail().run(req);
    yield (0, express_validator_1.check)("password", "Password must be at least 4 characters long").isLength({ min: 4 }).run(req);
    const errors = (0, express_validator_1.validationResult)(req);
    // If authentication fails
    if (!errors.isEmpty()) {
        res.redirect("/user/new");
    }
    const user = new user_1.User(req.body);
    user_1.User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return next(err);
        }
        if (user) {
            res.status(500);
        }
    });
    try {
        yield user.save();
        res.status(200);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.redirect("/user/new");
    }
});
exports.saveUser = saveUser;
//# sourceMappingURL=user.js.map