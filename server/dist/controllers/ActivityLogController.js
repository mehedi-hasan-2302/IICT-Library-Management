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
exports.createUserLog = exports.getUserLogs = void 0;
const ActivityLogService_1 = require("../services/ActivityLogService");
const getUserLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const filters = req.query;
    try {
        const logs = yield (0, ActivityLogService_1.fetchUserLogs)(user_id, filters);
        res.status(200).json(logs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs' });
    }
});
exports.getUserLogs = getUserLogs;
const createUserLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { activity_type, description } = req.body;
    if (!activity_type || !description) {
        return res.status(400).json({ message: 'Activity type and description are required.' });
    }
    try {
        const newLog = {
            user_id,
            timestamp: new Date(),
            activity_type,
            description,
        };
        const createdLog = yield (0, ActivityLogService_1.logActivity)(newLog);
        res.status(201).json(createdLog);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating activity log.' });
    }
});
exports.createUserLog = createUserLog;
