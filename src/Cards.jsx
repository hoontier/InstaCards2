import React, { useState } from "react"

export default function Cards({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  if(!data || data.length === 0) {
    return <div>No data</div>
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
    setShowDefinition(false);
  }

  const handleBack = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
    setShowDefinition(false);
  }

  const handleCardClick = () => {
    setShowDefinition(!showDefinition);
  }

  return (
    <>
    <div className="card" onClick={handleCardClick}>
      <h1>{showDefinition ? data[currentIndex].Definition : data[currentIndex].Term}</h1>
    </div>
    <button className="back" onClick={handleBack}>Back</button>
    <button className="next" onClick={handleNext}>Next</button>
    </>
  )
}
