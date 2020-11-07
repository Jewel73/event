import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';


export default function NavBar({setOpenForm, history}){
        return(
                <Menu  inverted fixed='top'>
                        <Container>
                                <Menu.Item as={NavLink} exact to='/' >
                                        <h3 style={{marginRight:28}}>Logo</h3>
                                </Menu.Item >
                                <Menu.Item as={NavLink} exact to='/events'  header name="events" />
                                <Menu.Item as={NavLink} exact to='/form' >
                                        <Button onClick={setOpenForm} positive inverted  content='Create Event' ></Button>
                                </Menu.Item> 
                                <Menu.Item position='right'>
                                        <Button positive inverted color='black' compact content='Login'/>
                                        <Button positive color='pink' compact inverted content='Register' style={{marginLeft:15}}/>
                                </Menu.Item>
                        </Container>
                </Menu>
        )
}