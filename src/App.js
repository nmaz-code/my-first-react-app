import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import NewEventForm from './components/NewEventForm'
import EventList from './components/EventList'



function App() { 
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])
  
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false )
  }

  

  const handleClick = (id) => {
     
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !==event.id
      })
    })
     
   
  }
  

  const subtitle = "All the latest events in the Mario kingdom"
  return (
    <div className="App">
      
      <Title title= "Events in your Area" subtitle={subtitle}/>
      

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick}/>}


      
      {showModal && (
        <Modal  isSalesModal={false}>
          <NewEventForm addEvent={addEvent}/>
        </Modal> 
      )}
      <p>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </p>
    </div>
  );
}

export default App;
