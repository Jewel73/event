import './style.css';
import React, {useState} from 'react'
import {Container} from 'semantic-ui-react'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar'
import 'semantic-ui-css/semantic.min.css'


const App = ()=>{
    // Show Hide Form State
    const [openForm, setOpenForm] = useState(false)
    // Selected Event From List Of events
    const [selectedEvent, setSelectedEvent]= useState(null)


    // Open Form By clicking Create Event And Selected Event seting to null and passing function
    const handleOpenForm=()=>{
        setSelectedEvent(null);
        setOpenForm(true);
    }

    // Select An Event 
    const selectEventFunction=(event)=>{
        setSelectedEvent(event);
        setOpenForm(true)
    }

    return(
        <div>
            {/* Navbar Here........... */}
           <NavBar setOpenForm={handleOpenForm}/>

            {/* Full body Dashboard Event And Form */}
            <Container className='main'>
                <EventDashboard 
                    openForm={openForm} 
                    setOpenForm={setOpenForm} 
                    selectedEvent={selectedEvent}
                    selectEventFunction={selectEventFunction}
                />
            </Container>
        </div>
    )
}

export default App;