import React, { useState } from 'react';

const AllResultSheet = () => {

    const studentsData = [
        {
            name: "John Doe",
            class: "10",
            rollNo: "101",
            email: "johndoe@example.com",
            marks: [
                { subject: "Maths", marks: 80 },
                { subject: "Science", marks: 75 },
                { subject: "English", marks: 90 },
                { subject: "Social Science", marks: 85 },
            ],
            averageNumber: 87,
            grade: "A+"
        },
        {
            name: "Jane Smith",
            class: "10",
            rollNo: "102",
            email: "janesmith@example.com",
            marks: [
                { subject: "Maths", marks: 85 },
                { subject: "Science", marks: 90 },
                { subject: "English", marks: 80 },
                { subject: "Social Science", marks: 70 },
            ],
            averageNumber: 83,
            grade: "A+"
        },
        {
            name: "Mike Johnson",
            class: "10",
            rollNo: "103",
            email: "mikejohnson@example.com",
            marks: [
                { subject: "Maths", marks: 70 },
                { subject: "Science", marks: 80 },
                { subject: "English", marks: 75 },
                { subject: "Social Science", marks: 85 },
            ],
            averageNumber: 77,
            grade: "A"
        },
    ];


    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleStudentClick = (student) => {
        setSelectedStudent(student);
    }

    return (
        <div>
            <h1 className="text-green-400 font-bold text-3xl mt-3 mb-10">Student Result List</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="border-separate bg-white font-semibold">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Class</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Roll No.</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Average Number</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Grade</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">Details</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {studentsData.map((student) => (
                        <tr key={student.rollNo} className={selectedStudent === student ? 'bg-gray-100' : ''} onClick={() => handleStudentClick(student)}>
                            <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.class}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.rollNo}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.averageNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.grade}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleStudentClick(student)}>Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedStudent && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:p-6 my-8 align-middle sm:align-middle sm:max-w-lg sm:w-full">
                            <div>
                                <div className="mt-5">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        <span className="font-bold">Student Name:</span> {selectedStudent.name}
                                    </h3>
                                    <div className="mt-2">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="font-medium">Class:</p>
                                                <p>{selectedStudent.class}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Roll No.:</p>
                                                <p>{selectedStudent.rollNo}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Email:</p>
                                                <p>{selectedStudent.email}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Average Number:</p>
                                                <p>{selectedStudent.averageNumber}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Grade:</p>
                                                <p>{selectedStudent.grade}</p>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <h4 className="text-lg leading-6 font-medium text-gray-900">
                                                Marks in each subject
                                            </h4>
                                            <table className="mt-2 w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {selectedStudent.marks.map((mark) => (
                                                        <tr key={mark.subject}>
                                                            <td className="px-6 py-4 whitespace-nowrap">{mark.subject}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap">{mark.marks}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" onClick={() => setSelectedStudent(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllResultSheet;
