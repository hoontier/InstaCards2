import React, { useState } from 'react'
import JsonInput from './JsonInput'
import Cards from './Cards.jsx'

/* change this file so that the JSON data from JsonInput is sent to Cards as a prop */

function App() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <>
      <JsonInput onJsonData={setJsonData} />
      <Cards data={jsonData} />
    </>
  )
}

export default App
