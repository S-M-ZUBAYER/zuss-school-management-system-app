import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import axios from 'axios';
import { useEffect } from 'react';
import StudentOverView from './StudentOverView';
import StudentBtnShow from './StudentBtnShow';
import ShowAttendance from './ShowAttendance';
import ResultAddPage from './ResultAddPage';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Navbar from '../../Shared/Navbar/Navbar';


const StudentsDetailsPage = () => {
    const [activeButton, setActiveButton] = useState('Attendance');
    const [student, setStudent] = useState({});
    const [StudentAttendance, setStudentAttendance] = useState([]);
    const [attendanceList, setAttendanceList] = useState([]);
    const [stdList, setStdList] = useState([]);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const { user, currentSchoolCode, schoolName } = useContext(AuthContext);

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const lastPart = parts[parts.length - 1]

    const studentId = lastPart;

    useEffect(() => {
        // Fetch student details
        axios
            .get(`https://zuss-school-management-system-server-site.vercel.app/api/students/details/${studentId}?schoolCode=${currentSchoolCode}`)
            .then((response) => {
                setStudent(response.data[0]);

            })
            .catch((error) => {
                console.error(error);
            });

        // Fetch student attendance
        console.log(currentSchoolCode, studentId)
        axios
            .get(`https://zuss-school-management-system-server-site.vercel.app/api/stdAttendances/${currentSchoolCode}?studentId=${studentId}`)
            .then((response) => {
                setStudentAttendance(response.data);
                console.log(StudentAttendance);
                setAttendanceList(response.data?.map(atd => atd.attendance));
                setStdList(response.data?.map(atd => atd.attendance)
                    .flatMap(innerArray => innerArray) // Flatten the array of arrays into a single array of objects
                    .filter(object => object.id === studentId))
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(stdList);

    return (
        <div>
            <Navbar></Navbar>

            <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black py-10">
                <div className="text-start ml-3">

                    <Link to={`/`}><button ><AiOutlineArrowLeft className="text-3xl font-bold text-green-500"></AiOutlineArrowLeft></button></Link>
                </div>
                <StudentOverView
                    student={student}
                ></StudentOverView>

                <StudentBtnShow
                    handleButtonClick={handleButtonClick}
                    activeButton={activeButton}
                ></StudentBtnShow>

                {
                    activeButton === 'Attendance' &&

                    <ShowAttendance
                        student={student}
                        stdList={stdList}
                    ></ShowAttendance>


                }
                {
                    activeButton === 'Result' && <ResultAddPage
                        student={student}
                    ></ResultAddPage>
                }
            </div>
        </div>
    );
};

export default StudentsDetailsPage;