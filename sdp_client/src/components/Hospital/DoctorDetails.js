import React, { useState } from 'react';

function Form() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`Field 1: ${field1}, Field 2: ${field2}, Field 3: ${field3}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Table Form</h2>
      <table>
        <tbody>
          <tr>
            <td>Field 1:</td>
            <td>
              <input
                type="text"
                value={field1}
                onChange={(e) => setField1(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Field 2:</td>
            <td>
              <input
                type="text"
                value={field2}
                onChange={(e) => setField2(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Field 3:</td>
            <td>
              <input
                type="text"
                value={field3}
                onChange={(e) => setField3(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
