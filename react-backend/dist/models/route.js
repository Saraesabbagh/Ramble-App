"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RouteSchema = new mongoose_1.default.Schema({
    host_id: { type: String, required: true },
    discipline: { type: String, required: true },
    duration: { type: String, required: true },
    distance: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    startTime: { type: String, required: true },
    startPoint: { type: String, required: true },
    endPoint: { type: String, required: true },
    img: { type: String, required: true },
    participants: [
        {
            userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
        },
    ],
});
exports.Route = mongoose_1.default.model("Route", RouteSchema);
//# sourceMappingURL=route.js.map