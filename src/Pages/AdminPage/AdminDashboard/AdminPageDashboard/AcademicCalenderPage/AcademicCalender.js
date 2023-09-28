import React from 'react';
import ImageUpload from './ImageUploadForCalender/ImageUpload';
import Calendar from './GenerateCalender/GenerateCalender';
import { useState } from 'react';

const AcademicCalender = () => {
    const [calendarImg, setCalenderImg] = useState(null)
    return (
        <div>
            <ImageUpload
                setCalenderImg={setCalenderImg}
            ></ImageUpload>
            <Calendar
                calendarImg={calendarImg}
            ></Calendar>
        </div>
    );
};

export default AcademicCalender;