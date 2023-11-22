import React from "react";
import { Button } from "@mui/material";
import { ttData } from "../data/tt-data.jsx";
import { timeData } from "../data/table-data.jsx";

function tableLayout() {
  return (
    <>
      <div className="flex justify-evenly m-4 px-40">
        <Button variant="contained">Edit Time</Button>
        <Button variant="contained">Edit TimeTable</Button>
        <Button variant="contained" color="error">
          Reset All
        </Button>
      </div>
      <div className="flex justify-center my-5 w-full">
        <table className="table-auto justify-evenly border border-spacing-2">
          <thead className="border border-separate">
            <tr className="border">
              <th className="px-4 py-2 border">Day</th>
              {timeData.map((item) => {
                return (
                  <th className="px-4 py-2 border">
                    {item.id}
                    <br />
                    {item.time}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {ttData.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="px-4 py-2 border font-bold">{item.day}</td>
                  <td className="px-4 py-2 border">{item.first}</td>
                  <td className="px-4 py-2 border">{item.second}</td>
                  <td className="px-4 py-2 border">{item.third}</td>
                  <td className="px-4 py-2 border">{item.fourth}</td>
                  <td className="px-4 py-2 border">{item.fifth}</td>
                  <td className="px-4 py-2 border">{item.sixth}</td>
                  <td className="px-4 py-2 border">{item.seventh}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default tableLayout;
