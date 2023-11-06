import React from "react";

function Timetable() {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>9:00 AM</th>
          <td>Math</td>
          <td>Science</td>
          <td>English</td>
          <td>History</td>
          <td>Art</td>
        </tr>
        <tr>
          <th>10:00 AM</th>
          <td>Science</td>
          <td>Math</td>
          <td>History</td>
          <td>English</td>
          <td>PE</td>
        </tr>
        <tr>
          <th>11:00 AM</th>
          <td>English</td>
          <td>History</td>
          <td>Math</td>
          <td>Science</td>
          <td>Music</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Timetable;
