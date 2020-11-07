import React from 'react'
import { Header, Segment , Image, Button, Icon, Container} from 'semantic-ui-react'
import '../../../app/layout/style.css'
export default function HomePage({history}){
        return(
               <>
                        <Segment  className='HomePage' inverted textAlign='center' vertical>
                                <Container>
                                        <Header inverted as='h1'>
                                                <Image circular size='massive' src='./assets/man.png'  alt='image' />
                                                Re-vents
                                        </Header>

                                        <Button onClick={()=>history.push('/events')}  inverted   size='large'>
                                                Get Started Events
                                                <Icon size='large' name='right arrow' />
                                        </Button>
                                </Container>
                        </Segment>
               </>
        )
}