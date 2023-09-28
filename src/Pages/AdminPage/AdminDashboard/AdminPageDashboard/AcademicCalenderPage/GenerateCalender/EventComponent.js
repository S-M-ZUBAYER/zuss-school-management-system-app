import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../../../context/UserContext';
import { toast } from 'react-hot-toast';

const EventComponent = ({ calendarData }) => {
    const { calendarImg, year, startMonth, endMonth, events } = calendarData;
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedEvent, setEditedEvent] = useState(null);
    const [editedCalendarData, setEditedCalendarData] = useState(calendarData);

    const { schoolName, currentSchoolCode } = useContext(AuthContext)

    const handleEditEvent = (event) => {
        setSelectedEvent(event);
        setEditedEvent({ ...event });
        setIsEditModalOpen(true);
    };

    const handleDeleteEvent = (eventId) => {
        // Send delete request to the backend API using eventId
        // Perform necessary update in the frontend
    };

    const handleUpdateEvent = () => {
        // Send update request to the backend API using editedEvent object
        // Perform necessary update in the frontend
        setIsEditModalOpen(false);
    };

    const handleCancelEdit = () => {
        setIsEditModalOpen(false);
    };

    const handleUpdateCalendar = () => {
        fetch(`https://zuss-school-management-system-server-site.vercel.app/api/calendar/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ calendarImg, year, schoolName, currentSchoolCode, startMonth, endMonth, events }),
        })
            .then((response) => response.json())
            .then((updatedData) => {
                // Handle the updated data as needed
                console.log('Calendar updated:', updatedData);
                toast.success("Calender Updated successfully")
            })
            .catch((error) => {
                console.error('Error updating calendar:', error);
                toast.error("Calender Updated failed")
            });

    };

    return (
        <div className="text-white">
            <img src={calendarImg} alt="Calendar" />
            <p>Start Month:{startMonth}</p>
            <p>End Month:{endMonth}</p>
            <p>Year:{year}</p>
            <h2>Events:</h2>
            <div className="border-2 mb-2">
                {events.map((event) => (
                    <div key={event.id}>
                        <p>Date: {event.date}</p>
                        <p>Name: {event.name}</p>
                        <p>Color: {event.color}</p>

                        <button onClick={() => handleEditEvent(event)}>Edit</button>
                        <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    </div>
                ))}
            </div>

            <div>
                <img src={editedCalendarData.CalenderImg} alt="Calendar" />

                <h2>Events:</h2>
                <div>
                    {editedCalendarData.events.map((event) => (
                        <div key={event.id}>
                            <p>Date: {event.date}</p>
                            <p>Name: {event.name}</p>
                            <p>Color: {event.color}</p>
                        </div>
                    ))}
                </div>

                <button className="bg bg-green-400 px-3 py-1 font-semibold my-5" onClick={handleUpdateCalendar}>Update Calendar</button>
            </div>


            {isEditModalOpen && (
                <div>
                    <h2>Edit Event</h2>
                    <form>
                        <label>Date:</label>
                        <input
                            type="text"
                            value={editedEvent.date}
                            onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
                        />
                        <label>Name:</label>
                        <input
                            type="text"
                            value={editedEvent.name}
                            onChange={(e) => setEditedEvent({ ...editedEvent, name: e.target.value })}
                        />
                        <label>Color:</label>
                        <input
                            type="text"
                            value={editedEvent.color}
                            onChange={(e) => setEditedEvent({ ...editedEvent, color: e.target.value })}
                        />
                        <button onClick={handleUpdateEvent}>Update</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EventComponent;
