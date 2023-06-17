import React, { useState } from 'react'

export default function JsonInput({onJsonData}) {
  const [jsonText, setJsonText] = useState("");

  //input change event handler
  const handleInputChange = (event) => {
    setJsonText(event.target.value);
    }

  //submit button click event handler
  const handleSubmit = () => {
    setJsonText(event.target.value);
    try {
        // remove text before and after the [ and ] characters
        const startIndex = jsonText.indexOf("[");
        const endIndex = jsonText.lastIndexOf("]");
        const trimmedText = jsonText.substring(startIndex, endIndex + 1);
        const jsonData = JSON.parse(trimmedText);
        onJsonData(jsonData);
    } catch(e) {
        console.log("Invalid JSON");
    }
  }

  //full card component
  return (
    <div className="jsonInput">
      <textarea value={jsonText} onChange={handleInputChange} placeholder = "enter JSON here" />
      <button className="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}
