import React from 'react'
import { Icon, Item, Segment,  List, Button } from 'semantic-ui-react'
import EventAttendee from './EventAttendee'
export default function EventListItem({event, selectEventFunction, deleteEvent}){
        return (        
                 <Segment.Group>
                         {/* First Group Element All info */}
                        <Segment>
                               <Item.Group>
                                        <Item>
                                                <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                                                <Item.Content>
                                                        <Item.Header content={event.title} />
                                                        <Item.Description>
                                                               Hosted By {event.hostedBy}
                                                        </Item.Description>
                                                </Item.Content>
                                        </Item>
                               </Item.Group>
                               </Segment>
                               <Segment>
                                       <span>
                                               <Icon name="clock"/>{event.date}
                                               <Icon name="marker"/>{event.venue}
                                       </span>
                               </Segment>

                               {/* Attendees Goes To here...... */}
                               <Segment secondary>
                                       <List horizontal>
                                               {event.attendees.map(attendee=>{
                                                       return(
                                                        <EventAttendee key={attendee.id} attendee={attendee}/>
                                                       )
                                               })}
                                       </List>
                               </Segment>
                               <Segment clearing>
                                       <div>{event.description}</div>
                                       <br></br>
                                       <Button onClick={()=>selectEventFunction(event)} color="teal" content="View" floated="right"/>
                                       <Button onClick={()=>deleteEvent(event.id)} color="red" content="Delete" floated="right"/>
                               </Segment>
                       </Segment.Group>
                
        )
}