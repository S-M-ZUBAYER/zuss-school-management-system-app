import React from 'react';

const ShowAttendance = ({ student, stdList }) => {
    return (

        <div id="tcrAtd" className="text-white">
            <h2 className="text-lg font-bold text-center my-4">
                {student?.name} Attendance
            </h2>
            <table className="table-auto w-11/12  md:w-7/12  mx-auto mb-10">
                <thead>
                    <tr className="bg-emerald-500 border">
                        <th className="py-1">Date</th>
                        <th>Present</th>
                        <th>Absent</th>
                    </tr>
                </thead>
                <tbody>
                    {stdList.map((entry) => (
                        <tr
                            key={entry.date}
                            className="border"
                        // className={entry.present ? "bg-green-500" : "bg-red-500"}
                        >
                            <td>{entry.date}</td>
                            <td>{entry.present ? "✅" : ""}</td>
                            <td>{!entry.present ? "❌" : ""} </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <button className="bg-red-300 py-1 px-3 rounded-lg ml-10" id="btnId" onClick={() => generatePDF("tcrAtd")}>Download PDF</button> */}
        </div>

    );
};

export default ShowAttendance;