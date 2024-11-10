import ActivityLogDao, { IActivityLogModel } from '../daos/ActivityLogDao';
import { IActivityLog } from '../models/ActivityLog';


export const logActivity = async (activity: IActivityLog): Promise<IActivityLogModel> => {
    const newLog = new ActivityLogDao(activity);
    return await newLog.save();
};


export const fetchUserLogs = async (user_id: string, filters = {}): Promise<IActivityLogModel[]> => {
    return await ActivityLogDao.find({ user_id, ...filters }).sort({ timestamp: -1 });
};