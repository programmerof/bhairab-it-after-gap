import React, { useState } from 'react';

const PopupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for submitting your email address: ${email}`);
    setShowForm(false);
  };

  return (
    

    <div>
      <button onClick={() => setShowForm(true)}>Start</button>
      {showForm && (
        <div className="9-popup">
          <form onSubmit={handleSubmit}>
            <h2>Form</h2>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
