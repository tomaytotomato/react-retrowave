import React, {Component} from 'react';
import './App.css';

import Effects from './Effects';
import Branding from './Branding';
import MediaPlayer from './MediaPlayer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Effects/>,
                <Branding/>,
                <MediaPlayer/>
            </div>
        );
    }
}

export default App;
