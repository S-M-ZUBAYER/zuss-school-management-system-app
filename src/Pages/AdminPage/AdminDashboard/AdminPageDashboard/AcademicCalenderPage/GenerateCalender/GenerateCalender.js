
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../../../context/UserContext';
import EventComponent from './EventComponent';

const Calendar = ({ calendarImg }) => {
    const { year, setYear, startMonth, setStartMonth, endMonth, setEndMonth, events, setEvents, eventColor, setEventColor, showModal, setShowModal, selectedDate, setSelectedDate, eventName, setEventName } = useContext(AuthContext)
    const schoolCode = 'yourSchoolCode'; // Replace with the actual school code

    fetch(`/api/calendar/${schoolCode}`)
        .then(response => response.json())
        .then(data => {
            // Handle the data retrieved from the API
            console.log(data);
            // Process the data as needed
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error(error);
        });


    console.log(calendarImg, startMonth, endMonth, events, eventColor, selectedDate, eventName)

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];






    const generateCalendar = () => {
        const calendar = [];

        for (let month = startMonth; month <= endMonth; month++) {
            const daysInMonth = new Date(year, month, 0).getDate();

            const monthName = months[month - 1];

            calendar.push(
                <div key={monthName} className="text-center font-bold mt-4 text-black bg-lime-300 text-3xl border-2 flex items-center rounded-tl-lg rounded-br-lg">
                    {monthName}
                </div>
            );

            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month - 1, day);
                const formattedDate = date.toISOString().split('T')[0];
                const dayEvents = events.filter((event) => event.date === formattedDate);

                const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                const isFriday = dayName === 'Fri';
                const dayStyle = isFriday ? 'bg-red-500' : '';

                calendar.push(
                    <div
                        key={formattedDate}
                        className={`relative border border-gray-300 p-2 text-sm text-white ${dayStyle}`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                {dayName}, {day}
                            </div>
                            <button className="text-blue-500" onClick={() => handleAddEvent(date)}>
                                Add Event
                            </button>
                        </div>
                        {dayEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gray-200 p-1 mt-1 rounded"
                                style={{ backgroundColor: event.color }}
                            >
                                {event.name}
                            </div>
                        ))}
                    </div>
                );
            }
        }

        return calendar;
    };


    const handleAddEvent = (date) => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const handleSaveEvent = () => {
        if (eventName.trim() === '') return;

        const newEvent = {
            id: Date.now(),
            date: selectedDate.toISOString().split('T')[0],
            name: eventName,
            color: eventColor
        };

        setEvents([...events, newEvent]);
        setShowModal(false);
        setSelectedDate(null);
        setEventName('');
        setEventColor('#ff0000');
    };

    const calendarData = { calendarImg, year, startMonth, endMonth, events }

    return (
        <div className="text-white mt-10">
            <h2 className="text-2xl font-bold text-green-400">Generate Calendar</h2>

            <div className="my-4">
                <label htmlFor="year">Year:</label>
                <select
                    id="year"
                    className="ml-2 p-1 border border-gray-300 text-black rounded"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                >
                    {/* Generate options for years */}
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={year + i}>{year + i}</option>
                    ))}
                </select>
            </div>

            <div className="my-4">
                <label htmlFor="startMonth">Start Month:</label>
                <select
                    id="startMonth"
                    className="ml-2 p-1 border text-black border-gray-300 rounded"
                    value={startMonth}
                    onChange={(e) => setStartMonth(parseInt(e.target.value))}
                >
                    {/* Generate options for months */}
                    {months.map((month, index) => (
                        <option key={index} value={index + 1}>{month}</option>
                    ))}
                </select>
            </div>

            <div className="my-4">
                <label htmlFor="endMonth">End Month:</label>
                <select
                    id="endMonth"
                    className="ml-2 p-1 border text-black border-gray-300 rounded"
                    value={endMonth}
                    onChange={(e) => setEndMonth(parseInt(e.target.value))}
                >
                    {/* Generate options for months */}
                    {months.map((month, index) => (
                        <option key={index} value={index + 1}>{month}</option>
                    ))}
                </select>
            </div>

            <div className="my-4 grid grid-cols-7 gap-4 mx-5 mb-32">
                {generateCalendar()}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded">
                        <h3>Add Event</h3>
                        <div className="my-2">
                            <label htmlFor="eventName">Event Name:</label>
                            <input
                                id="eventName"
                                type="text"
                                className="ml-2 p-1 border border-gray-300 rounded"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </div>
                        <div className="my-2">
                            <label htmlFor="eventColor">Event Color:</label>
                            <input
                                id="eventColor"
                                type="color"
                                className="ml-2 p-1 border border-gray-300 rounded"
                                value={eventColor}
                                onChange={(e) => setEventColor(e.target.value)}
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                className="px-4 py-1 bg-blue-500 text-white rounded"
                                onClick={handleSaveEvent}
                            >
                                Save
                            </button>
                            <button
                                className="ml-2 px-4 py-1 bg-gray-500 text-white rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <EventComponent
                calendarData={calendarData}
            ></EventComponent>

        </div>
    );
};

export default Calendar;

