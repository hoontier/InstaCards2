import React, { useState } from 'react'

/* rewrite this file so that it receives text formatted as JSON data */
export default function JsonInput({onJsonData}) {
  const [jsonText, setJsonText] = useState("");

  const handleInputChange = (event) => {
    setJsonText(event.target.value);
    try {
      const jsonData = JSON.parse(event.target.value);
      onJsonData(jsonData);
    } catch(e) {
      console.log("Invalid JSON");
    }
  }

  return (
    <div className="jsonInput">
      <textarea value={jsonText} onChange={handleInputChange} placeholder = "enter JSON here" />
    </div>
  )
}
