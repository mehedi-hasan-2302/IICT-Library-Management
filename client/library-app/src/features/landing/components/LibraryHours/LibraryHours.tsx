import React from "react";

import './LibraryHours.css';

export const LibraryHours: React.FC = () => {
    return (
        <div className="library-hours">
            <h3>Library Hours </h3>
            <table className="library-hours-table" id = "hours">
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>10 Am - 6 Pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>11 Am - 8 Pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>10 Am - 6 Pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>11 Am - 8 Pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>10 Am - 6 Pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>10 Am - 5 Pm</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}