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
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const bluebird_1 = __importDefault(require("bluebird"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
// Middleware Functions
const verifySignUp_1 = require("./middlewares/verifySignUp");
// Controller
const authController = __importStar(require("./controllers/auth"));
const userController = __importStar(require("./controllers/user"));
const APIController = __importStar(require("./controllers/map_box_api"));
const routeController = __importStar(require("./controllers/route"));
const app = (0, express_1.default)();
const port = 3001;
const corsOptions = {
    origin: 'http://localhost:3001',
};
app.use((0, cookie_session_1.default)({
    name: 'ramble-session',
    secret: process.env.SESSION_SECRET,
    httpOnly: true,
}));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'react-frontend/build')));
const mongoDbUrl = 'mongodb://0.0.0.0/Ramble';
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default
    .connect(mongoDbUrl)
    .then(() => {
    console.log('Database connection worked ');
})
    .catch((err) => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
/**
 * API Routes.
 */
// app.post("/api/signup", userController.saveUser);
app.post('/api/save_route', APIController.getMap);
app.get('/api/user/details', userController.getDetails);
app.get('/api/profile/:_id', userController.getDetails);
app.post('/api/signup', verifySignUp_1.checkDuplicateEmail, authController.signUp);
app.post('/api/signin', authController.signIn);
app.post('/api/signOut', authController.signOut);
app.post('/api/routes', routeController.saveRoute);
app.post('/api/addParticipant', routeController.addParticipant);
app.get('/api/all_routes', routeController.getRoutes);
/**
 * Handles all other routes
 */
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'react-frontend/public/index.html'));
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map