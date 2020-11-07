import React, { useState } from 'react'
import cuid from 'cuid'
import { Segment, Form, Button, Header } from 'semantic-ui-react'

export default function EventForm({setOpenForm, createEvent, selectedEvent, handleEventUpdate}){

        //Create Demo Values For adding form values......
       const initialValues = selectedEvent ?? {
                title: '',
                category: '',
                description: '',
                city: '',
                venue: '',
                date: '',
                hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        };
        const [values, setValues] = useState(initialValues);

        // Form Create And Update Functionality.......... 
        const onSubmitForm = ()=>{
                selectedEvent ? handleEventUpdate({...selectedEvent, ...values}):
                createEvent({...values, id:  cuid(), hostedBy: "BOB", attendees:[]} )
                setOpenForm(false)
        };
        // Updating state Values By targeting its field "name"
        const handleValueOnChange =(e)=>{
                const {name, value} = e.target ;
                setValues({...values, [name]: value})
        }

        //Form ..........
        return (
                <Segment clearing>
                        <Header>{selectedEvent ? "Edit The Event": "Create An Event: "}</Header>
                        <Form  onSubmit={onSubmitForm}>
                                <Form.Field>
                                        <input 
                                        type="text" 
                                        placeholder="Event Title" 
                                        name='title'
                                        value={values.title}
                                        onChange={(e)=>handleValueOnChange(e)}
                                        />
                                </Form.Field>
                                <Form.Field>
                                        <input type="text" 
                                        placeholder="Category" 
                                        name='category'
                                        value={values.category}
                                        onChange={(e)=>handleValueOnChange(e)}
                                        />
                                </Form.Field>
                                <Form.Field>
                                        <input type="text" 
                                        placeholder="Description" 
                                        name='description'
                                        value={values.description}
                                        onChange={(e)=>handleValueOnChange(e)}
                                        />
                                </Form.Field>
                                <Form.Field>
                                        <input type="text" 
                                        placeholder="City" 
                                        name='city'
                                        value={values.city}
                                        onChange={(e)=>handleValueOnChange(e)}
                                        />
                                </Form.Field>
                                <Form.Field>
                                        <input type="text" 
                                        placeholder="Venue" 
                                        name='venue'
                                        value={values.venue}
                                        onChange={(e)=>handleValueOnChange(e)}
                                        />
                                </Form.Field>
                                <Form.Field>
                                        <input type="date" 
                                        placeholder="Date" 
                                        name='date'
                                        value={values.date}
                                        onChange={(e)=>handleValueOnChange(e)}
                                        />
                                </Form.Field>

                                <Button content="Submit" floated='right' primary type='submit'></Button>
                                <Button onClick={()=> setOpenForm(false)} content="Cancel" color='red' floated='right'  type='submit'></Button>
                        </Form>
                </Segment>
        )
}