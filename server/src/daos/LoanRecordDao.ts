import mongoose, {Document, Schema} from 'mongoose';

import { ILoanRecord } from '../models/LoanRecord';

export interface ILoanRecordModel extends ILoanRecord, Document {};

export const LoanRecordSchema:Schema = new Schema (
    {
        status: {type:String, required:true},
        loanedDate: {type:Date, required:true},
        dueDate: {type:Date, required:true},
        returnedDate: {type:Date, required:false},
        student: {type: Schema.Types.ObjectId, required:true},
        employeeOut: {type: Schema.Types.ObjectId, required:true},
        employeeIn: {type: Schema.Types.ObjectId, required:false},
        item: {type: Schema.Types.ObjectId, required:true, ref:'Book'}
    },
    {
        timestamps: true
    }
)

export default mongoose.model<ILoanRecordModel>('LoanRecord',LoanRecordSchema);