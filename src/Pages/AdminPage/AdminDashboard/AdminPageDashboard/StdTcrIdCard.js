import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
// import TeacherIdCard1 from '../TeacherIdCardShare/TeacherIdCard1';
// import TeacherIdCard2 from '../TeacherIdCardShare/TeacherIdCard2';
// import TeacherIdCard3 from '../TeacherIdCardShare/TeacherIdCard3';
// import TeacherIdCard4 from '../TeacherIdCardShare/TeacherIdCard4';
import StdIdCard1 from '../StudentIdCardShared/StdIdCard1';
import StdIdCard2 from '../StudentIdCardShared/StdIdCard2';
import StdIdCard3 from '../StudentIdCardShared/StdIdCard3';
import StdIdCard4 from '../StudentIdCardShared/StdIdCard4';
import StaffIdCard1 from '../StaffDashboard/StaffIdCard1';
import StaffIdCard2 from '../StaffDashboard/StaffIdCard2';
import StaffIdCard3 from '../StaffDashboard/StaffIdCard3';
import StaffIdCard4 from '../StaffDashboard/StaffIdCard4';
import TeacherIdCard4 from '../TeacherIdCardShare/TeacherIdCard4';
import TeacherIdCard3 from '../TeacherIdCardShare/TeacherIdCard3';
import TeacherIdCard2 from '../TeacherIdCardShare/TeacherIdCard2';
import TeacherIdCard1 from '../TeacherIdCardShare/TeacherIdCard1';


const StdTcrIdCard = () => {



    //Student from part

    const { schoolName } = useContext(AuthContext);
    const [stdId, setStdId] = useState('');
    const [stdEmail, setStdEmail] = useState('');
    const [stdPhone, setStdPhone] = useState('');
    const [stdName, setStdName] = useState('');
    const [stdClass, setStdClass] = useState('');
    const [stdGender, setStdGender] = useState('');
    const [stdCardIssue, setStdCardIssue] = useState('');
    const [stdDateBirth, setStdDateBirth] = useState('');
    const [stdCardExpire, setStdCardExpire] = useState('');
    const [stdImg, setStdImg] = useState("")


    //Teacher from part
    const [teacherId, setTeacherId] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [teacherGender, setTeacherGender] = useState('');
    const [teacherCardIssue, setTeacherCardIssue] = useState('');
    const [teacherDateBirth, setTeacherDateBirth] = useState('');
    const [teacherCardExpire, setTeacherCardExpire] = useState('');
    const [teacherImg, setTeacherImg] = useState("");
    const [teacherDesignation, setTeacherDesignation] = useState("");


    //Staff from part
    const [staffId, setStaffId] = useState('');
    const [staffEmail, setStaffEmail] = useState('');
    const [staffName, setStaffName] = useState('');
    const [staffGender, setStaffGender] = useState('');
    const [staffCardIssue, setStaffCardIssue] = useState('');
    const [staffDateBirth, setStaffDateBirth] = useState('');
    const [staffCardExpire, setStaffCardExpire] = useState('');
    const [staffImg, setStaffImg] = useState("");
    const [staffDesignation, setStaffDesignation] = useState("");

    const handleSubmitStudent = (e) => {
        e.preventDefault();
        console.log(schoolName, stdImg, stdName, teacherEmail, stdId, stdClass, stdDateBirth, stdCardIssue, stdCardExpire, stdGender,)

        // code to generate the ID card using the input values
    };

    const handleToStdImg = (event) => {
        setStdImg(event.target.value)
    }

    const handleToStdId = (event) => {
        setStdId(event.target.value)
    }

    const handleToStdName = (event) => {
        setStdName(event.target.value)
    }
    const handleToStdEmail = (event) => {
        setStdEmail(event.target.value)
    }

    const handleToStdPhone = (event) => {
        setStdPhone(event.target.value)
    }
    const handleToStdClass = (event) => {
        setStdClass(event.target.value)
    }
    const handleToStdGender = (event) => {
        setStdGender(event.target.value)
    }
    const handleToStdCardIssue = (event) => {
        setStdCardIssue(event.target.value)
    }
    const handleToStdCardExpire = (event) => {
        setStdCardExpire(event.target.value)
    }
    const handleToStdDateBirth = (event) => {
        setStdDateBirth(event.target.value)
    }



    //Teacher from part

    const handleSubmitTeacher = (e) => {
        e.preventDefault();
        console.log(schoolName, teacherImg, teacherName, teacherEmail, teacherId, teacherDateBirth, teacherCardIssue, teacherCardExpire, teacherGender, teacherDesignation)

        // code to generate the ID card using the input values
    };

    const handleToTeacherImg = (event) => {
        setTeacherImg(event.target.value)
    }

    const handleToTeacherId = (event) => {
        setTeacherId(event.target.value)
    }

    const handleToTeacherName = (event) => {
        setTeacherName(event.target.value)
    }
    const handleToTeacherEmail = (event) => {
        setTeacherEmail(event.target.value)
    }

    const handleToTeacherGender = (event) => {
        setTeacherGender(event.target.value)
    }
    const handleToTeacherDesignation = (event) => {
        setTeacherDesignation(event.target.value)
    }
    const handleToTeacherCardIssue = (event) => {
        setTeacherCardIssue(event.target.value)
    }
    const handleToTeacherCardExpire = (event) => {
        setTeacherCardExpire(event.target.value)
    }
    const handleToTeacherDateBirth = (event) => {
        setTeacherDateBirth(event.target.value)
    }


    //staff from part

    const handleSubmitStaff = (e) => {
        e.preventDefault();
        console.log(schoolName, staffImg, staffName, staffEmail, staffId, staffDateBirth, staffCardIssue, staffCardExpire, staffGender, staffDesignation)

        // code to generate the ID card using the input values
    };

    const handleToStaffImg = (event) => {
        setStaffImg(event.target.value)
    }

    const handleToStaffId = (event) => {
        setStaffId(event.target.value)
    }

    const handleToStaffName = (event) => {
        setStaffName(event.target.value)
    }
    const handleToStaffEmail = (event) => {
        setStaffEmail(event.target.value)
    }

    const handleToStaffGender = (event) => {
        setStaffGender(event.target.value)
    }
    const handleToStaffDesignation = (event) => {
        setStaffDesignation(event.target.value)
    }
    const handleToStaffCardIssue = (event) => {
        setStaffCardIssue(event.target.value)
    }
    const handleToStaffCardExpire = (event) => {
        setStaffCardExpire(event.target.value)
    }
    const handleToStaffDateBirth = (event) => {
        setStaffDateBirth(event.target.value)
    }

    return (
        <div>
            {/* ************************** This is the section for Student to generate the Student ID card ********************************** */}

            <h1 className="text-2xl text-lime-200 font-bold my-5 mt-10">
                Student Id Card Section
            </h1>
            <div className="grid gri  lg:grid-cols-3 text-white my-20 mb-10">
                <div>
                    <div>
                        <h1 className="text-xl font-bold text-yellow-200 mb-3">
                            Student ID Card
                        </h1>
                        <h1>
                            Please provide student information to generate Student id card
                        </h1>
                    </div>



                    {/* ************************** This is the form section to input student information to generate the student ID card ********************************** */}

                    <div>
                        <h1>
                            Student Information
                        </h1>
                        <div className="mx-3 my-5">
                            <form onSubmit={handleSubmitStudent}>
                                <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide Student image url" id="StdImg" value={stdImg} onChange={handleToStdImg} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide Student Full name" id="StdName" value={stdName} onChange={handleToStdName} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide Student ID" id="StdId" value={stdId} onChange={handleToStdId} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide student Email ID" id="StdEmail" value={stdEmail} onChange={handleToStdEmail} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide student Email ID" id="stdPhone" value={stdPhone} onChange={handleToStdPhone} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide student Class" id="stdClass" value={stdClass} onChange={handleToStdClass} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Birth</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" id="StdDateOfBirth" value={stdDateBirth} onChange={handleToStdDateBirth} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Card Issue</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" id="StdCardIssue" value={stdCardIssue} onChange={handleToStdCardIssue} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Card Expire</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" id="StdCardExpire" value={stdCardExpire} onChange={handleToStdCardExpire} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide student Gender" id="StdGender" value={stdGender} onChange={handleToStdGender} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                            </form>
                        </div>

                    </div>


                </div>

                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-3 mx-auto">
                    <StdIdCard1
                        schoolName={schoolName}
                        name={stdName}
                        img={stdImg}
                        stdClass={stdClass}
                        email={stdEmail}
                        phone={stdPhone}
                        id={stdId}
                        dateOfBirth={stdDateBirth}
                        cardIssue={stdCardIssue}
                        expire={stdCardExpire}
                        gender={stdGender}
                    ></StdIdCard1>


                    <StdIdCard2
                        schoolName={schoolName}
                        name={stdName}
                        img={stdImg}
                        stdClass={stdClass}
                        email={stdEmail}
                        phone={stdPhone}
                        id={stdId}
                        dateOfBirth={stdDateBirth}
                        cardIssue={stdCardIssue}
                        expire={stdCardExpire}
                        gender={stdGender}
                    ></StdIdCard2>
                    <StdIdCard3
                        schoolName={schoolName}
                        name={stdName}
                        img={stdImg}
                        stdClass={stdClass}
                        email={stdEmail}
                        phone={stdPhone}
                        id={stdId}
                        dateOfBirth={stdDateBirth}
                        cardIssue={stdCardIssue}
                        expire={stdCardExpire}
                        gender={stdGender}
                    ></StdIdCard3>
                    <StdIdCard4
                        schoolName={schoolName}
                        name={stdName}
                        img={stdImg}
                        stdClass={stdClass}
                        email={stdEmail}
                        phone={stdPhone}
                        id={stdId}
                        dateOfBirth={stdDateBirth}
                        cardIssue={stdCardIssue}
                        expire={stdCardExpire}
                        gender={stdGender}
                    ></StdIdCard4>
                </div>
            </div>

            {/* ************************** This is the section for teacher to generate the Teacher ID card ********************************** */}

            <h1 className="text-2xl text-lime-800 font-bold my-5 mt-20">
                Teacher Id Card Section
            </h1>
            <div className="grid grid-cols-3 text-white my-20">
                <div>
                    <div>
                        <h1 className="text-xl font-bold text-yellow-200 mb-3">
                            Teacher ID Card
                        </h1>
                        <h1>
                            Please provide student information to generate Teacher id card
                        </h1>
                    </div>

                    <div>
                        <div>
                            <h1>
                                Student Information
                            </h1>


                            {/* ************************** This is the section for teacher to generate the Teacher ID card input information form ********************************** */}
                            <div className="mx-3 my-5">
                                <form onSubmit={handleSubmitTeacher}>
                                    <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide Teacher image url" id="TeacherImg" value={teacherImg} onChange={handleToTeacherImg} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide Teacher name" id="TeacherName" value={teacherName} onChange={handleToTeacherName} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide Teacher ID" id="TeacherId" value={teacherId} onChange={handleToTeacherId} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherEmail" value={teacherEmail} onChange={handleToTeacherEmail} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Birth</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherDateOfBirth" value={teacherDateBirth} onChange={handleToTeacherDateBirth} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Issue</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherCardIssue" value={teacherCardIssue} onChange={handleToTeacherCardIssue} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Expire</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherCardExpire" value={teacherCardExpire} onChange={handleToTeacherCardExpire} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your Gender" id="TeacherGender" value={teacherGender} onChange={handleToTeacherGender} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide teacher designation" id="TeacherDesignation" value={teacherDesignation} onChange={handleToTeacherDesignation} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-span-2 grid grid-cols-2 mx-auto">
                    <TeacherIdCard1
                        schoolName={schoolName}
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                        designation={teacherDesignation}
                    ></TeacherIdCard1>
                    <TeacherIdCard2
                        schoolName={schoolName}
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                        designation={teacherDesignation}
                    ></TeacherIdCard2>
                    <TeacherIdCard3
                        schoolName={schoolName}
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                        designation={teacherDesignation}
                    ></TeacherIdCard3>
                    <TeacherIdCard4
                        schoolName={schoolName}
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                        designation={teacherDesignation}
                    ></TeacherIdCard4>
                </div>
            </div>

            {/* Staff */}

            <h1 className="text-2xl text-lime-800 font-bold my-5 mt-20">
                Staff Id Card Section
            </h1>
            <div className="grid grid-cols-3 text-white my-20">
                <div>
                    <div>
                        <h1 className="text-xl font-bold text-yellow-200 mb-3">
                            Staff ID Card
                        </h1>
                        <h1>
                            Please provide student information to generate staff id card
                        </h1>
                    </div>

                    <div>
                        <div>
                            <h1>
                                Staff Information
                            </h1>


                            {/* ************************** This is the section for teacher to generate the Teacher ID card input information form ********************************** */}
                            <div className="mx-3 my-5">
                                <form onSubmit={handleSubmitStaff}>
                                    <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide Staff image url" id="StaffImg" value={staffImg} onChange={handleToStaffImg} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide Staff name" id="StaffName" value={staffName} onChange={handleToStaffName} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide Staff ID" id="StaffId" value={staffId} onChange={handleToStaffId} />
                                    < hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="StaffEmail" value={staffEmail} onChange={handleToStaffEmail} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Birth</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="StaffDateOfBirth" value={staffDateBirth} onChange={handleToStaffDateBirth} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Issue</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="StaffCardIssue" value={staffCardIssue} onChange={handleToStaffCardIssue} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Expire</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="StaffCardExpire" value={staffCardExpire} onChange={handleToStaffCardExpire} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your Gender" id="StaffGender" value={staffGender} onChange={handleToStaffGender} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide teacher designation" id="StaffDesignation" value={staffDesignation} onChange={handleToStaffDesignation} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-span-2 grid grid-cols-2 mx-auto">
                    <StaffIdCard1
                        schoolName={schoolName}
                        name={staffName}
                        img={staffImg}
                        email={staffEmail}
                        id={staffId}
                        dateOfBirth={staffDateBirth}
                        cardIssue={staffCardIssue}
                        expire={staffCardExpire}
                        gender={staffGender}
                        designation={staffDesignation}
                    ></StaffIdCard1>
                    <StaffIdCard2
                        schoolName={schoolName}
                        name={staffName}
                        img={staffImg}
                        email={staffEmail}
                        id={staffId}
                        dateOfBirth={staffDateBirth}
                        cardIssue={staffCardIssue}
                        expire={staffCardExpire}
                        gender={staffGender}
                        designation={staffDesignation}
                    ></StaffIdCard2>
                    <StaffIdCard3
                        schoolName={schoolName}
                        name={staffName}
                        img={staffImg}
                        email={staffEmail}
                        id={staffId}
                        dateOfBirth={staffDateBirth}
                        cardIssue={staffCardIssue}
                        expire={staffCardExpire}
                        gender={staffGender}
                        designation={staffDesignation}
                    ></StaffIdCard3>
                    <StaffIdCard4
                        schoolName={schoolName}
                        name={staffName}
                        img={staffImg}
                        email={staffEmail}
                        id={staffId}
                        dateOfBirth={staffDateBirth}
                        cardIssue={staffCardIssue}
                        expire={staffCardExpire}
                        gender={staffGender}
                        designation={staffDesignation}
                    ></StaffIdCard4>
                </div>
            </div>


        </div>
    );
};

export default StdTcrIdCard;