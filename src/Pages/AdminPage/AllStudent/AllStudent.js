import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import StudentInfoTable from './StudentInfoTable';
import { toast } from 'react-hot-toast';
import DisplaySpinner from '../../Shared/Spinners/DisplaySpinner';
import Navbar from '../../Shared/Navbar/Navbar';

const AllStudent = () => {
    const [students, setStudents] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allStudents, setAllStudents] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [className, setClassName] = useState('');
    const [sectionElement, setSectionElement] = useState({});
    const [sectionName, setSectionName] = useState('');
    const [shiftName, setShiftName] = useState('');
    const [allClasses, setAllClasses] = useState([]);
    const [sections, setSections] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [classInfo, setClassInfo] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false)


    const { currentSchoolCode, user } = useContext(AuthContext);

    console.log(currentSchoolCode)
    function getAllYears(startYear) {
        const currentYear = new Date().getFullYear();
        const years = [];

        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }

        return years;
    }
    const years = getAllYears(2020);


    useEffect(() => {
        const fetchStudents = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/students/${currentSchoolCode}`, {
                    params: { year } // Send date as a query parameter
                });
                setAllStudents(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching applications:', error);
                setLoading(false);
            }
        };
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/schoolUser/${user?.email}`, {
                    params: { year } // Send date as a query parameter
                });
                setCurrentUser(response.data);
                console.log(currentUser)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching applications:', error);
                setLoading(false);
            }
        };

        fetchStudents();
        fetchUser();
    }, [currentSchoolCode, user, year]);


    const handleNameSearch = (event) => {
        setName(event.target.value);
    };

    const handleDelete = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this student?');
            if (confirmed) {
                await axios.delete(`https://zuss-school-management-system-server-site.vercel.app/api/students/${id}`);
                setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
                alert('Student deleted successfully!');
            }
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };

    const handleOpenModal = (student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedStudent(null);
        setIsModalOpen(false);
    };

    const handleToDelete = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this student?');
            if (confirmed) {
                // Send a DELETE request to the backend
                await axios.delete(`https://zuss-school-management-system-server-site.vercel.app/api/students/${id}`);

                // Remove the student from the current list on the frontend
                setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
                setAllStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));

                // Alert user about successful deletion
                toast.success('Student deleted successfully!');
            }
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };

    const handleUpdateStudent = async (e) => {
        e.preventDefault();

        // Create a formData object with updated values,
        const formData = {
            name: e.target.elements.name.value,
            schoolName: e.target.elements.schoolName.value,
            schoolCode: selectedStudent.schoolCode,
            classRoll: e.target.elements.classRoll.value,
            className: e.target.elements.className.value,
            section: e.target.elements.section.value,
            shift: e.target.elements.shift.value,
            designation: e.target.elements.designation.value,
            phone: e.target.elements.phone.value,
            email: e.target.elements.email.value,
            district: e.target.elements.district.value,
            division: e.target.elements.division.value,
            address: e.target.elements.address.value,
        };

        try {
            // Send the update request to the server
            await axios.put(`https://zuss-school-management-system-server-site.vercel.app/api/students/update/${selectedStudent._id}`, formData);

            // Update the student in the frontend students array
            setStudents((prevStudents) =>
                prevStudents.map((student) =>
                    student._id === selectedStudent._id ? { ...student, ...formData } : student
                )
            );

            // Update the student in the frontend allStudents array
            setAllStudents((prevAllStudents) =>
                prevAllStudents.map((student) =>
                    student._id === selectedStudent._id ? { ...student, ...formData } : student
                )
            );

            // Close the modal
            handleCloseModal();

            // Show a success message
            toast.success('Student updated successfully!');
        } catch (error) {
            console.error('Failed to update student:', error);
            // Show an error message
            toast.error('Failed to update student.');
        }
    };



    const groupStudentsByClass = () => {
        const groupedStudents = {};
        students.forEach((student) => {
            const key = `${student.className}-${student.section}-${student.shift}`;
            if (groupedStudents[key]) {
                groupedStudents[key].push(student);
            } else {
                groupedStudents[key] = [student];
            }
        });
        return groupedStudents;
    };

    const renderStudentGroups = () => {
        const groupedStudents = groupStudentsByClass();

        return Object.keys(groupedStudents).map((key) => {
            const studentsInGroup = groupedStudents[key];
            return (
                <div key={key}>
                    <h3>Class: {studentsInGroup[0].className}</h3>
                    <h4>Section: {studentsInGroup[0].section}</h4>
                    <h4>Shift: {studentsInGroup[0].shift}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>School Name</th>
                                <th>Class Roll</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsInGroup
                                .filter((student) => student && student.classRoll && student.classRoll.toString().includes(searchTerm))
                                .map((student) => (
                                    <tr key={student._id}>
                                        <td>{student.name}</td>
                                        <td>{student.schoolName}</td>
                                        <td>{student.classRoll}</td>
                                        <td>
                                            <button onClick={() => handleOpenModal(student)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(student._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>
            );
        });
    };

    useEffect(() => {
        // Fetch class information based on schoolCode
        const fetchClassInfo = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/classes/${currentSchoolCode}`);
                const classInfoData = response.data?.classInfo;
                setClassInfo(classInfoData)
                if (classInfoData) {
                    const classNames = classInfoData.map((element) => element?.name);
                    // setClassInfo(classInfoData?.classInfo)
                    setAllClasses(classNames);
                    setLoading(false);
                }

            } catch (error) {
                console.error('Error fetching classInfo:', error);
            }
        };


        fetchClassInfo();
    }, [currentSchoolCode]);


    const handleToSelectClassName = (e) => {
        classInfo?.map(info => {
            if (info.name === className) {
                setSections(info.sections);
                setSectionElement(info);
            }
        })


    }

    const handleToShiftName = (e) => {
        className && sectionName && (sectionElement?.sections)?.map(info => {
            if (info.name === sectionName) {
                setShifts(info.shifts);
            }
        })

    }

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    return (
        <div>
            <Navbar></Navbar>
            {
                loading ? <DisplaySpinner></DisplaySpinner> :
                    <div className="text-white  bg-gradient-to-l min-h-screen from-blue-900 via-slate-900 to-black py-10">
                        <h1 className="text-2xl font-bold text-lime-300 mb-8 mt-10">
                            Available Students In {' '}
                            <span className="bg-black">
                                <select className="bg-black px-2" value={year} onChange={(e) => setYear(e.target.value)}>
                                    {years.map((year, index) => (
                                        <option key={index} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </h1>
                        <div className="md:flex items-center justify-center mb-5 text-black">
                            <select
                                id="className"
                                value={className}
                                onChange={(e) => setClassName(e.target.value)}
                                className="bg-yellow-100 text-sm px-3 py-1 rounded-lg mr-3 mb-2 md:mb-0"
                            >
                                <option className="text-sm" value="">Select a class</option>
                                {allClasses.map((classItem, index) => (
                                    <option key={index} value={classItem}>{classItem}</option>
                                ))}
                            </select>
                            <select
                                id="sectionList"
                                value={sectionName}
                                onChange={(e) => setSectionName(e.target.value)}
                                onClick={handleToSelectClassName}
                                className="bg-yellow-100 text-sm px-3 py-1 rounded-lg mr-3 mb-2 md:mb-0"
                            >
                                <option className="text-sm" value="">Please Select Section</option>
                                {className && (sections?.map((sectionItem, index) => (
                                    <option key={index} value={sectionItem?.name}>
                                        {sectionItem?.name}
                                    </option>
                                )))}
                            </select>
                            <select
                                id="shift"
                                onChange={(e) => setShiftName(e.target.value)}
                                onClick={handleToShiftName}
                                className="bg-yellow-100 text-sm px-3 py-1 rounded-lg mr-3 mb-2 md:mb-0"
                            >
                                <option className="text-sm" value="">Please Select Shift</option>
                                {className && sectionName && shifts.map((shiftItem, index) => (
                                    <option key={index} value={shiftItem}>
                                        {shiftItem}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                className="bg-yellow-100 text-sm px-3 py-1 rounded-lg mb-2 md:mb-0"
                                placeholder="Search by name"
                                value={name}
                                onChange={handleNameSearch}
                            />
                        </div>
                        {renderStudentGroups()}
                        {
                            <StudentInfoTable
                                allStudents={allStudents}
                                classInfoData={classInfo}
                                handleOpenModal={handleOpenModal}
                                handleToDelete={handleToDelete}
                                className={className}
                                sectionName={sectionName}
                                shiftName={shiftName}
                                name={name}
                            ></StudentInfoTable>
                        }



                    </div>
            }


        </div>
    );
};

export default AllStudent;
