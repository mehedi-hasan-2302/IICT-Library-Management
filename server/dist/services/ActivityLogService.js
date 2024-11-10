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
exports.fetchUserLogs = exports.logActivity = void 0;
const ActivityLogDao_1 = __importDefault(require("../daos/ActivityLogDao"));
const logActivity = (activity) => __awaiter(void 0, void 0, void 0, function* () {
    const newLog = new ActivityLogDao_1.default(activity);
    return yield newLog.save();
});
exports.logActivity = logActivity;
const fetchUserLogs = (user_id_1, ...args_1) => __awaiter(void 0, [user_id_1, ...args_1], void 0, function* (user_id, filters = {}) {
    return yield ActivityLogDao_1.default.find(Object.assign({ user_id }, filters)).sort({ timestamp: -1 });
});
exports.fetchUserLogs = fetchUserLogs;
