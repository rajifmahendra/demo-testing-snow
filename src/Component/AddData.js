import React, { useState } from "react";

function AddData() {
  const [additionalFields, setAdditionalFields] = useState([]);

  const addInputField = () => {
    const newField = {
      id: Date.now(),
      value: "",
    };
    setAdditionalFields([...additionalFields, newField]);
  };

  const removeInputField = (id) => {
    setAdditionalFields(additionalFields.filter((field) => field.id !== id));
  };

  const sendColumnNamesToBackend = async (columnNames) => {
    try {
      const response = await fetch('http://example.com/api/saveColumns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ columnNames })
      });
      const data = await response.json();
      console.log('Data saved successfully:', data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const submitForm = () => {
    const columnNames = additionalFields.map(field => field.value);
    console.log("New column names:", columnNames);
    sendColumnNamesToBackend(columnNames);
  };

  return (
    <div className="card">
      <h3>Sapura_Main Database</h3>
      <h4>Active Columns</h4>
      <form id="myForm1">
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
            <button
              type="button"
              className="btn-remove"
              onClick={() => removeInputField(field.id)}
            >
              -
            </button>
            <input
              type="text"
              id={`additional-field-${index + 1}`}
              name={`additional-field-${index + 1}`}
              value={field.value}
              onChange={(e) => {
                const newValue = e.target.value;
                setAdditionalFields(prevFields => {
                  const updatedFields = [...prevFields];
                  updatedFields[index].value = newValue;
                  return updatedFields;
                });
              }}
            />
          </div>
        ))}
        <div className="btn-container">
          <button type="button" className="btn-add" onClick={addInputField}>+</button>
          <button type="button" className="btn-submit" onClick={submitForm}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddData;
