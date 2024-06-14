import React from "react";

import './UpcomingEvents.css';
import { AutoAwesome } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export const UpcomingEvents:React.FC = () => {
    return(
        <div className="upcoming-events">
            <div className="upcoming-events-header-group">
                <AutoAwesome sx = {{
                        fontSize: "2.5rem",
                        color: "#d90429"
                    }} />
                    <h2>UpcomingEvents </h2>
                    <AutoAwesome sx = {{
                        fontSize: "2.5rem",
                        color: "#d90429"
                    }} />
            </div>
            <h3>This Summer</h3>
            <h4>Tuesday's: 10:00 Am - Noon</h4>
            <ul className="upcoming-events-event">
                <li>
                    <p>Who: Children to 6th grade</p>
                </li>
                <li>
                    <p>Activities: Logic Puzzels, Scratch Programming</p>
                </li>
            </ul>
            <h4>Wednesday's: 10:00AM -Noon</h4>
            <ul className="upcoming-events-event">
                <li>
                    <p>Who: Adults(19+)</p>
                </li>
                <li>
                    <p>Activities: Craft and Sip - come enjoy a nice beverage and craft</p>
                </li>
            </ul>
            <h4>Thursday's: 10:00 Am - Noon</h4>
            <ul className="upcoming-events-event">
                <li>
                    <p>Who: Teens(7th to 12th grade)</p>
                </li>
                <li>
                    <p>Activities: webproggraming course learn MERN stack </p>
                </li>
            </ul>
        </div>
    )
}