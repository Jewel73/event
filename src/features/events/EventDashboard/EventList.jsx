import React  from 'react'
import EventListItem from './EventListItem'

export default function EventList ({events, selectEventFunction}) {

        // Passing event value for every Event
                return (
                        <>
                                {events.map(event=>{
                                        return(
                                                <EventListItem key={event.id} event={event} selectEventFunction={selectEventFunction}/>
                                        )
                                })}
                                
                        </>
                )
        }


