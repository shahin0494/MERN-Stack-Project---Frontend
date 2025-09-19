import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

function App() {


  return (
    <>
      <p> <FontAwesomeIcon icon={faSkull} flip="horizontal" style={{ color: "#000000", }} />Books</p>
      <Button variant="primary">Primary</Button>
    </>
  )
}

export default App
