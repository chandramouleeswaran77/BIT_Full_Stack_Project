import React from 'react';
import './ExpertList.css';

function ExpertList() {
  const experts = [
    { 
      id: 1, 
      name: 'Sameer', 
      expertise: 'Data Science', 
      company: 'TechCorp', 
      email: 'expert1@techcorp.com', 
      phone: '123-456-7890', 
      address: '123 Main St, Cityville', 
      eventName: 'Tech Summit', 
      coordinatorName: 'bharath', 
      coordinatorDepartment: 'CSE', 
      coordinatorEmail: 'bharath@gmail.com' 
    },
    { 
      id: 2, 
      name: 'varun', 
      expertise: 'Cybersecurity', 
      company: 'Zoho', 
      email: 'expert2@zoho.com', 
      phone: '987-654-3210', 
      address: '456 Oak Ave, Townsville', 
      eventName: 'Security Expo', 
      coordinatorName: 'bala', 
      coordinatorDepartment: 'AIML', 
      coordinatorEmail: 'bala@gmail.com' 
    },
    { 
      id: 3, 
      name: 'saravana', 
      expertise: 'AI & Machine Learning', 
      company: 'TCS', 
      email: 'expert3@tcs.com', 
      phone: '555-123-4567', 
      address: '789 Pine Blvd, Metropolis', 
      eventName: 'AI Conference', 
      coordinatorName: 'Johnson', 
      coordinatorDepartment: 'EEE', 
      coordinatorEmail: 'johnson@gmail.com' 
    },
    { 
      id: 4, 
      name: 'Ilamaran', 
      expertise: 'Blockchain', 
      company: 'BlockNet', 
      email: 'expert4@blocknet.com', 
      phone: '444-987-6543', 
      address: '321 Cedar Rd, Capital City', 
      eventName: 'Blockchain Meetup', 
      coordinatorName: 'Bob', 
      coordinatorDepartment: 'ECE', 
      coordinatorEmail: 'bob@gmail.com' 
    },
  ];

  return (
    <div className="expert-list-container">
      <div className="headb">
      <h2>Industry Expert List</h2>
      <button className="filter-button">Filter</button>
      </div>
       
      <div className="table-container">
        {/* Filter Button */}
        <div className="scrollable-table">
          <table className="expert-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Expertise</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Event Name</th>
                <th>Coordinator Name</th>
                <th>Coordinator Department</th>
                <th>Coordinator Email</th>
                <th>Edit</th> {/* Add Edit Column */}
              </tr>
            </thead>
            <tbody>
              {experts.map(expert => (
                <tr key={expert.id}>
                  <td>{expert.name}</td>
                  <td>{expert.expertise}</td>
                  <td>{expert.company}</td>
                  <td>{expert.email}</td>
                  <td>{expert.phone}</td>
                  <td>{expert.address}</td>
                  <td>{expert.eventName}</td>
                  <td>{expert.coordinatorName}</td>
                  <td>{expert.coordinatorDepartment}</td>
                  <td>{expert.coordinatorEmail}</td>
                  <td>
                    <button className="edit-button">Edit</button> {/* Edit Button */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ExpertList;
