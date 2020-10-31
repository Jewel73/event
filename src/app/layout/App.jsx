import './style.css';
import React from 'react'
import {Button} from 'semantic-ui-react'
function App() {
    return (
        <div className="App">
            <h1>Events</h1>

            <button className= 'ui con red button'>
                <i className='user icon'/> User
            </button>
            <Button toggle icon='user' content='React Button' color='compact'  />
        </div>
    )
}

export default App;