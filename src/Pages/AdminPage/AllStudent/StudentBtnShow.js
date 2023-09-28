import React from 'react';

const StudentBtnShow = ({ handleButtonClick, activeButton }) => {
    return (
        <div className="flex justify-center items-center mt-10">
            <button
                className={`${activeButton === 'Attendance'
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black'
                    } py-2 px-4 rounded-l-3xl focus:outline-none`}
                onClick={() => handleButtonClick('Attendance')}
            >
                Attendance
            </button>

            <button
                className={`${activeButton === 'Result' ? 'bg-green-500 text-white' : 'bg-white text-black'
                    } py-2 px-8 rounded-r-3xl focus:outline-none`}
                onClick={() => handleButtonClick('Result')}
            >
                Result
            </button>
        </div>
    );
};

export default StudentBtnShow;