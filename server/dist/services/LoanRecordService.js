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
exports.queryRecords = exports.findAllRecords = exports.modifyRecord = exports.generateRecord = void 0;
const LoanRecordDao_1 = __importDefault(require("../daos/LoanRecordDao"));
const BookServices_1 = require("./BookServices");
const libraryErrors_1 = require("../utils/libraryErrors");
function generateRecord(record) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let createdRecord = new LoanRecordDao_1.default(record);
            createdRecord = yield createdRecord.save();
            let book = yield (0, BookServices_1.findBookById)(record.item);
            let records = book.records;
            records = [createdRecord, ...records];
            book.records = records;
            yield (0, BookServices_1.modifyBook)(book);
            return createdRecord;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.generateRecord = generateRecord;
function modifyRecord(record) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let updatedRecord = yield LoanRecordDao_1.default.findOneAndUpdate({ _id: record._id }, record, { new: true });
            if (updatedRecord) {
                let book = yield (0, BookServices_1.findBookById)(record.item);
                let records = book.records;
                records[0] = updatedRecord;
                book.records = records;
                yield (0, BookServices_1.modifyBook)(book);
                return updatedRecord;
            }
            throw new libraryErrors_1.LoanRecordDoesNotExistError("The record does not exist");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.modifyRecord = modifyRecord;
function findAllRecords() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield LoanRecordDao_1.default.find();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.findAllRecords = findAllRecords;
function queryRecords(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield LoanRecordDao_1.default.find({ [params.property]: params.value }).populate("item").sort("-loanedDate");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.queryRecords = queryRecords;
