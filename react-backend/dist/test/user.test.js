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
const user_1 = require("../models/user");
const ava_1 = __importDefault(require("ava"));
const mongoose_1 = __importDefault(require("mongoose"));
(0, ava_1.default)('User', (t) => {
    const user = new user_1.User({
        firstName: 'Someone',
        lastName: 'Surname',
        email: 'example@email.com',
        password: 'mypassword',
        preferences: {
            walk: true,
            run: true,
            cycle: true,
        },
    });
    t.is(user.firstName, 'Someone');
    t.is(user.lastName, 'Surname');
    t.is(user.email, 'example@email.com');
    t.is(user.password, 'mypassword');
    t.is(user.preferences.walk, true);
    t.is(user.preferences.run, true);
    t.is(user.preferences.cycle, true);
});
(0, ava_1.default)('User is saved', (t) => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.connect('mongodb://0.0.0.0/Ramble');
    yield mongoose_1.default.connection.collections.users.drop();
    const user = new user_1.User({
        firstName: 'Someone',
        lastName: 'Surname',
        email: 'example@email.com',
        password: 'mypassword',
        preferences: {
            walk: true,
            run: true,
            cycle: true,
        },
    });
    yield user.save();
    const users = yield user_1.User.find({});
    t.is(users[0].firstName, 'Someone');
    t.is(users.length, 1);
    mongoose_1.default.connection.close(true, () => {
        console.log('Connection Closed');
    });
}));
//# sourceMappingURL=user.test.js.map