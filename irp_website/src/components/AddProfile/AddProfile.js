import React, { useState } from 'react';
import './AddProfile.css';

function AddProfile() {
  const [name, setName] = useState('');
  const [expertise, setExpertise] = useState('');
  const [company, setCompany] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState(''); // For contact email
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [eventName, setEventName] = useState('');
  const [coordinatorName, setCoordinatorName] = useState('');
  const [coordinatorDepartment, setCoordinatorDepartment] = useState('');
  const [coordinatorEmail, setCoordinatorEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log all form values to the console
    console.log({
      name, expertise, company, bio, email, phone, address, eventName,
      coordinatorName, coordinatorDepartment, coordinatorEmail
    });
  };

  return (
    <div className="add-profile-container">
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expertise</label>
          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
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
            value={coordinatorDepartment}
            onChange={(e) => setCoordinatorDepartment(e.target.value)}
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
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default AddProfile;
