import React, { useState } from 'react';
import './App.css';

function App() {
  const [additionalFields, setAdditionalFields] = useState([]);

  const addInputField = () => {
    const newField = {
      id: Date.now(),
      value: ''
    };
    setAdditionalFields([...additionalFields, newField]);
  };

  const removeInputField = (id) => {
    setAdditionalFields(additionalFields.filter(field => field.id !== id));
  };

  return (
    <div className="card">
      <h3>Sapura_Main Database</h3>
      <h4>Active Columns</h4>
      <form>
        <ul>
          <li>Record 1</li>
          <li>Record 2</li>
          <li>Record 3</li>
          <li>Record 4</li>
          <li>Record 5</li>
        </ul>
        {additionalFields.map((field, index) => (
          <div className="form-group" key={field.id}>
            <label htmlFor={`additional-field-${index + 1}`}>New Column Name:</label>
            <button type="button" className="btn-remove" onClick={() => removeInputField(field.id)}>-</button>
            <input type="text" id={`additional-field-${index + 1}`} name={`additional-field-${index + 1}`} />
          </div>
        ))}
        <div className="btn-container">
          <button type="button" className="btn-add" onClick={addInputField}>+</button>
          <button type="submit" className="btn-submit">Submit</button>
          <button type="button" className="btn-sync">Sync data</button>
        </div>
      </form>
    </div>
  );
}

export default App;
