import React, { useState } from "react";
import Modal from "react-modal";
import html2pdf from "html2pdf.js";

import StudentInfoForAtd from "../../../StudentsPage/StudentDashboard/StudentAttendance/StudentInfoForAtd";

const stdList = [
    {
        name: "John Doe",
        class: "10A",
        rollNo: "123",
        email: "johndoe@example.com",
        phone: "555-555-5555",
        image: "https://ibb.co/Wnx2kNz",
        attendance: [
            { date: "2023-05-01", isPresent: true },
            { date: "2023-05-02", isPresent: false },
            { date: "2023-05-03", isPresent: true },
        ]
    },
    {
        name: "hayan ali",
        class: "12",
        rollNo: "122323",
        email: "jhayer@example.com",
        phone: "555-555-5555",
        image: "https://ibb.co/Wnx2kNz",
        attendance: [
            { date: "2023-05-01", isPresent: true },
            { date: "2023-05-02", isPresent: false },
            { date: "2023-05-03", isPresent: true },
        ]
    },
    {
        name: "hayan ali",
        class: "12",
        rollNo: "122323",
        email: "jhayer@example.com",
        phone: "555-555-5555",
        image: "https://ibb.co/Wnx2kNz",
        attendance: [
            { date: "2023-05-01", isPresent: true },
            { date: "2023-05-02", isPresent: false },
            { date: "2023-05-03", isPresent: true },
        ]
    },
    {
        name: "hayan ali",
        class: "12",
        rollNo: "122323",
        email: "jhayer@example.com",
        phone: "555-555-5555",
        image: "https://ibb.co/Wnx2kNz",
        attendance: [
            { date: "2023-05-01", isPresent: false },
            { date: "2023-05-02", isPresent: false },
            { date: "2023-05-03", isPresent: true },
        ]
    },
    {
        name: "hayan ali",
        class: "12",
        rollNo: "122323",
        email: "jhayer@example.com",
        phone: "555-555-5555",
        image: "https://ibb.co/Wnx2kNz",
        attendance: [
            { date: "2023-05-01", isPresent: true },
            { date: "2023-05-02", isPresent: false },
            { date: "2023-05-03", isPresent: false },
        ]
    },
]


const Tcr_Atd_Sheet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const handleStudentClick = (student) => {
        setSelectedTeacher(student);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setSelectedTeacher(null);
        setIsModalOpen(false);
    };

    function generatePDF(divId) {
        const btnElement = document.getElementById("btnId");
        const closeElement = document.getElementById("closeId");
        btnElement.classList.add("hidden")
        closeElement.classList.add("hidden")
        const element = document.getElementById(divId);

        const opt = {
            margin: 0.5,
            filename: "result.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().set(opt).from(element).save();

    }


    return (
        <div className="container w-11/12 mx-auto ">
            <h1 className="text-3xl font-bold text-white text-center my-4">Staff Attendance List</h1>
            <div className=" ">
                {/* Replace this with code that maps over your student data */}
                {
                    stdList.map(element => {
                        return <StudentInfoForAtd
                            key={element?.rollNo}
                            studentInfo={element}
                            onClick={() => handleStudentClick(element)}

                        />
                    })
                }
            </div>
            <Modal className="w-2/5 bg-lime-200 mx-auto px-10 text-center rounded-2xl mt-20 py-3" isOpen={isModalOpen} onRequestClose={handleModalClose}>

                {selectedTeacher && (
                    <div id="stdAtd">
                        <h2 className="text-xl font-bold text-center my-4 ">
                            {selectedTeacher.name} Attendance
                        </h2>
                        <table className="table-auto w-full mb-5">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Present</th>
                                    <th>Absent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedTeacher.attendance.map((entry) => (
                                    <tr
                                        key={entry.date}
                                    // className={entry.isPresent ? "bg-green-500" : "bg-red-500"}
                                    >
                                        <td className="text-center">{entry.date}</td>
                                        <td className="text-center">{entry.isPresent ? "✅" : ""}</td>
                                        <td className="text-center">{!entry.isPresent ? "❌" : ""} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            id="closeId" className=" bg-gray-500  hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleModalClose}
                        >
                            Close
                        </button>
                        <button className="bg-red-300 py-1 px-3 rounded-lg ml-10" id="btnId" onClick={() => generatePDF("stdAtd")}>Download PDF</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};
export default Tcr_Atd_Sheet;
