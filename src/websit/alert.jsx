import React, { useState } from 'react';

const ActionComponent = () => {
  // State to manage the message and its type (success or error)
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate an action (e.g., API call)
    const simulateAction = new Promise((resolve, reject) => {
      // Simulating success or failure randomly
      const isSuccess = Math.random() > 0.5;
      setTimeout(() => {
        if (isSuccess) {
          resolve('Action was successful!');
        } else {
          reject('Action failed!');
        }
      }, 1000);
    });

    simulateAction
      .then((successMessage) => {
        setIsSuccess(true);
        setMessage(successMessage);
      })
      .catch((errorMessage) => {
        setIsSuccess(false);
        setMessage(errorMessage);
      });
  };

  return (
    <div>
      <h1>Perform an Action</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {message && (
        <div
          style={{
            color: isSuccess ? 'green' : 'red',
            marginTop: '20px',
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default ActionComponent;
