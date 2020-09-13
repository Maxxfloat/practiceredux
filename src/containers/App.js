import React from 'react';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import RegistryPage from '../components/RegistryPage'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={RegistryPage} />
                </div>
                
            </BrowserRouter>
        </div>
    )
}

export default App;