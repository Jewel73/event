import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';


export default function NavBar({setOpenForm}){
        return(
                <Menu  inverted fixed='top'>
                        <Container>
                                <Menu.Item header>
                                        <h3 style={{marginRight:28}}>Logo</h3>
                                </Menu.Item >
                                <Menu.Item header name="event" />
                                <Menu.Item>
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