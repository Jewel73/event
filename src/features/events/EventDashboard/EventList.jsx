import React  from 'react'
import EventListItem from './EventListItem'

export default function EventList ({events, selectEventFunction, deleteEvent}) {

        // Passing event value for every Event
                return (
                        <>
                                {events.map(event=>{
                                        return(
                                                <EventListItem deleteEvent={deleteEvent} key={event.id} event={event} selectEventFunction={selectEventFunction}/>
                                        )
                                })}
                                
                        </>
                )
        }


