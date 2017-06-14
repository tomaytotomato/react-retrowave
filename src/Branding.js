import React, {Component} from 'react';
import './Branding.css';
import Logo from './Logo';

class Branding extends Component {
    render() {
        return (
            <div className="branding">
                <div className="title">
                    <h1>Money</h1>
                    <h2>Team</h2>
                </div>
                <Logo/>
            </div>
        );
    }
}

export default Branding;
