// DetailsPage.js
import React from 'react';
import notes from "../../data/notes";
import Header from '../Header/Header';

const DetailsPage = () => {
  return (
    <div className="details-container">
        <Header/>
      <h2>Details Page</h2>
      {notes.map((item) => (
        <div key={item.id}> {/* Assuming each item in the notes array has a unique "id" property */}
          <div>
            <strong>Name:</strong> {item.title}
          </div>
          <div>
            <strong>Division:</strong> {item.category}
          </div>
          <div>
            <strong>Phone Number:</strong> {item.phoneNumber}
          </div>
          <div>
            <strong>Email:</strong> {item.email}
          </div>
          <div>
            <strong>Address:</strong> {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
