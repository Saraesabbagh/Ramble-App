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
exports.getDetails = void 0;
const user_1 = require("../models/user");
const getDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.User.findOne({ _id: req.params._id }, (err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(user);
    });
});
exports.getDetails = getDetails;
//# sourceMappingURL=user.js.map