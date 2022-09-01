"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const bluebird_1 = __importDefault(require("bluebird"));
const express_flash_1 = __importDefault(require("express-flash"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Controller (route Handlers)
const userController = __importStar(require("./controllers/user"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1200000,
    }
}));
app.use((0, express_flash_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "/react-frontend")));
const mongoDbUrl = "mongodb://0.0.0.0/Ramble";
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default.connect(mongoDbUrl).then(() => { console.log("Database connection worked "); }).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});
/**
 * API Routes.
 */
app.post("/api/signup", userController.saveUser);
/**
* Handles all other routes
*/
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "react-frontend/public/index.html"));
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map