import './style.css';
import React, {useState} from 'react'
import {Container} from 'semantic-ui-react'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom';
import EventDetailed from '../../features/events/EventDashboard/EventDetailed';
import EventForm from '../../features/events/EventForm/EventForm';
import HomePage from '../../features/events/HomePage/HomePage';


const App = ()=>{
    // Show Hide Form State
    const [openForm, setOpenForm] = useState(true)
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

    return (
        <>
        
            <Route exact path='/' component={HomePage} />

            <Route path={'/(.+)'}  
                            render={()=>(
                <>
                    <NavBar setOpenForm={handleOpenForm}/>
                    <Container className='main'>
                        <Route path='/events' component={EventDashboard}/>
                        <Route path='/eventdetail/:id' component={EventDetailed}/>
                        <Route path='/form' component={EventForm} />
                    </Container>
                </>
            )}  
            />
        </>
    );
}

export default App;

                    // <EventDashboard 
                    // openForm={openForm} 
                    // setOpenForm={setOpenForm} 
                    // selectedEvent={selectedEvent}
                    // selectEventFunction={selectEventFunction}
                