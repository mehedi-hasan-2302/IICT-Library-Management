import mongoose, { Schema, Document } from 'mongoose';
import { IActivityLog } from '../models/ActivityLog';

export interface IActivityLogModel extends IActivityLog, Document {}

const ActivityLogSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, required: true },
    activity_type: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.model<IActivityLogModel>('ActivityLog', ActivityLogSchema);