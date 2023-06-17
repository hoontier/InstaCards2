import React, { useState } from 'react'

/* rewrite this file so that it receives text formatted as JSON data */
export default function JsonInput({onJsonData}) {
  const [jsonText, setJsonText] = useState("");

  const handleInputChange = (event) => {
    setJsonText(event.target.value);
    try {
      // remove text before and after the [ and ] characters
        const startIndex = event.target.value.indexOf("[");
        const endIndex = event.target.value.lastIndexOf("]");
        const trimmedText = event.target.value.substring(startIndex, endIndex + 1);
        const jsonData = JSON.parse(trimmedText);
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
