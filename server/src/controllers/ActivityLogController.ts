import { Request, Response } from 'express';
import { fetchUserLogs, logActivity } from '../services/ActivityLogService'; 
import { IActivityLog } from '../models/ActivityLog'; 

export const getUserLogs = async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const filters = req.query;

    try {
        const logs = await fetchUserLogs(user_id, filters); 
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs' });
    }
};


export const createUserLog = async (req: Request, res: Response) => {
    const { user_id } = req.params;  
    const { activity_type, description } = req.body;  

    
    if (!activity_type || !description) {
        return res.status(400).json({ message: 'Activity type and description are required.' });
    }

    try {
        
        const newLog: IActivityLog = {
            user_id,
            timestamp: new Date(),  
            activity_type,
            description,
        };

        
        const createdLog = await logActivity(newLog);
        
        
        res.status(201).json(createdLog);
    } catch (error) {
        
        res.status(500).json({ message: 'Error creating activity log.' });
    }
};