import React, { useState } from 'react';
import './AddEvent.css'; // Create this CSS file

function AddEvent() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [coordinatorName, setCoordinatorName] = useState('');
  const [coordinatorDept, setCoordinatorDept] = useState('');
  const [coordinatorEmail, setCoordinatorEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form values to the console or handle them as needed
    console.log({ title, date, time, location, coordinatorName, coordinatorDept, coordinatorEmail });
    // Optionally clear the form after submission
    setTitle('');
    setDate('');
    setTime('');
    setLocation('');
    setCoordinatorName('');
    setCoordinatorDept('');
    setCoordinatorEmail('');
  };

  return (
    <div className="add-event-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Event</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Coordinator Name</label>
          <input
            type="text"
            value={coordinatorName}
            onChange={(e) => setCoordinatorName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Coordinator Department</label>
          <input
            type="text"
            value={coordinatorDept}
            onChange={(e) => setCoordinatorDept(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Coordinator Email</label>
          <input
            type="email"
            value={coordinatorEmail}
            onChange={(e) => setCoordinatorEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
