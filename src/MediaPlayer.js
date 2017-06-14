import React, {Component} from 'react';
import './MediaPlayer.css';

class MediaPlayer extends Component {
    render() {
        return (
            <div className="mediaPlayerContainer">
                <div className="mediaPLayer">
                    <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/257491819&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                </div>
            </div>
        );
    }
}

export default MediaPlayer;
