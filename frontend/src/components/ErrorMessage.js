import React from 'react';

const ErrorMessage = ({ message }) => {
  const errorMessageStyle = {
    color: 'white',
    fontSize: '16px',
    width: "300px",
borderRadius: "5px",
padding:"2.5px",
    marginBottom: '10px',
    backgroundColor: "red"
  };

  return (
    <div style={errorMessageStyle}>
      {message}
    </div>
  );
};

export default ErrorMessage;
