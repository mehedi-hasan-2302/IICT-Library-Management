import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import './ProfileActivityLog.css';
import { RootState } from "../../../../redux/ReduxStore";
import { LoanRecord } from "../../../../models/LoanRecord";


export const ProfileActivityLog:React.FC = () => {
    const user = useSelector((state:RootState) => state.authentication.profileUser);
    const [records, setRecords] = useState<LoanRecord[]>([]);

    return(
        <div className="profile-activity-log">
            <h3 className="profile-activity-header"> {user?.firstName}'s Activity Log: </h3>
            <h5>User Id : </h5>
            <h5>Time Stamp: </h5>
            <h5> Activity Type: </h5>
            <h5> Description: </h5>
        </div>
    )
}