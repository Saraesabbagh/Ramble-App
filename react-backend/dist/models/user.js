"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    password: { type: String, required: true },
    preferences: {
        walk: { type: Boolean, required: true, default: false },
        run: { type: Boolean, required: true, default: false },
        cycle: { type: Boolean, required: true, default: false },
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    followers: [
        {
            userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
        },
    ],
    following: [
        {
            userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
        },
    ],
});
UserSchema.pre('save', function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt_1.default.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError);
            }
            else {
                bcrypt_1.default.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError);
                    }
                    user.password = hash;
                    next();
                });
            }
        });
    }
    else {
        return next();
    }
});
exports.User = mongoose_1.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map