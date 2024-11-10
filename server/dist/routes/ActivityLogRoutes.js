"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ActivityLogController_1 = require("../controllers/ActivityLogController");
const router = express_1.default.Router();
router.post('/user/:user_id/logs', ActivityLogController_1.createUserLog);
router.get('/user/:user_id', ActivityLogController_1.getUserLogs);
module.exports = router;
