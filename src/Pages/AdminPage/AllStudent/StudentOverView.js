import React from 'react';

const StudentOverView = ({ student }) => {
    return (
        <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl">
            <h1 className=" text-lime-500 font-bold text-xl">{student.name}</h1>
            <h1 className=" text-lime-200 font-bold text-xl mb-5">{student.schoolName}</h1>
            <div className="">
                <div className="md:flex-shrink-0">
                    <div className="class=" text-white pt-12 pb-5>
                        <img className="h-32 w-32 rounded-full border-8 border-x-fuchsia-500 border-yellow-300 mx-auto aos-init aos-animate" src={student.image}
                            alt={`${student.name}'s photo`} ></img>
                    </div>

                </div>
                <div className="p-8 md:flex justify-evenly items-center">
                    <div className="text-white text-start">
                        <p className="text-base">Student ID: {student.studentId}</p>
                        <p className="text-base">Class: {student.className}</p>
                        <p className="text-base">Section: {student.section}</p>
                        <p className="text-base">Shift: {student.shift}</p>
                        <p className="text-base">Class Roll: {student.classRoll}</p>
                        <p className="text-base">Gender: {student.gender}</p>
                        <p className="text-base">Year: {student.year}</p>
                    </div>

                    <div className="text-white text-start">
                        <p className="text-base">Email: {student.email}</p>
                        <p className="text-base">Phone: {student.phone}</p>
                        <p className="text-base">Address: {student.address}</p>
                        <p className="text-base">District: {student.district}</p>
                        <p className="text-base">Division: {student.division}</p>
                        <p className="text-base">Father's Name: {student.fatherName}</p>
                        <p className="text-base">Mother's Name: {student.motherName}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudentOverView;