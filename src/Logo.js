import React, {Component} from 'react';
import './Logo.css';

class Logo extends Component {

    render() {
        return (
            <svg className="retroLogo">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
                    </linearGradient>
                </defs>
                <filter id="dropshadow" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="2" dy="2" result="offsetblur"/>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <polygon points="500 474,0 106,495 0" stroke="#36e2f8" strokeWidth="3"/>
            </svg>
        );
    }
}

export default Logo;
