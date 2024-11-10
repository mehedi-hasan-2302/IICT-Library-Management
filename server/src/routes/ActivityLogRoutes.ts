import express from 'express';
import { createUserLog, getUserLogs } from '../controllers/ActivityLogController';

const router = express.Router();


router.post('/user/:user_id/logs', createUserLog);
router.get('/user/:user_id', getUserLogs);


export = router;