import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Hackathon",
      date: "2024-09-15",
      time: "09:00 AM",
      location: "SF 1 SEMINAR HALL",
      coordinatorName: "bala",
      coordinatorDept: "Computer Science",
      coordinatorEmail: "bala@gmail.com"
    },
    {
      id: 2,
      title: "Paper Presentation",
      date: "2024-10-05",
      time: "10:00 AM",
      location: "AS BLOCK",
      coordinatorName: "sanjit",
      coordinatorDept: "Information Technology",
      coordinatorEmail: "sanjit@gmail.com"
    },
    {
      id: 3,
      title: "Project Presentation",
      date: "2024-11-10",
      time: "01:00 PM",
      location: "SF",
      coordinatorName: "Sam",
      coordinatorDept: "Electronics",
      coordinatorEmail: "sam@gmail.com"
    }
  ];

  return (
    <div className="upcoming-events-container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        {/* Add Button */}
        <Link to="/add-event" className="add-button">
          Add
        </Link>
      </div>
      <table className="events-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date of Event</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Coordinator Name</th>
            <th>Coordinator Dept</th>
            <th>Coordinator Email</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>{event.coordinatorName}</td>
              <td>{event.coordinatorDept}</td>
              <td>{event.coordinatorEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingEvents;
