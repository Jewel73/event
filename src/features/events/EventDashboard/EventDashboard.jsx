import React, {useState} from 'react'
import {Grid} from 'semantic-ui-react'
import EventForm from '../EventForm/EventForm';
import EventList from './EventList'
import { sampleData } from "./SampleData";

const EventDashboard =({openForm, setOpenForm, selectedEvent, selectEventFunction})=>{
        const [events, setEvents] = useState(sampleData)

        // Create Events and adding event with all previous data
        const createEvent =(event)=>{
                setEvents([...events, event])
        }

        //Upadating Event By Form and seting form values null
        const handleEventUpdate=(updatedEvent)=>{
                setEvents(events.map(evnt => evnt.id === updatedEvent.id ? updatedEvent:evnt));
                selectEventFunction(null)
        }

        //Two column : One For Event Left column and other for Right Colmn Form
        return(
                <Grid>
                        {/* Event List Column Here */}
                        <Grid.Column width={10} >
                               <EventList events={events} selectEventFunction={selectEventFunction}/>
                        </Grid.Column>

                        {/* Form Column Here */}
                        <Grid.Column width={6}>
                                {
                                        openForm && <EventForm 
                                        createEvent={createEvent} 
                                        setOpenForm={setOpenForm}
                                         selectedEvent={selectedEvent}
                                         key={selectedEvent ? selectedEvent.id : null}
                                         handleEventUpdate ={handleEventUpdate}
                                         />
                                }
                        </Grid.Column>
                        
                </Grid>
        )
}

export default EventDashboard;