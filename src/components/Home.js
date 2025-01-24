import React from 'react';
import video from '../assets/videos/sample-activity.mp4';

function Home () {
    return (
        <div>
            <h1>Welcome to Our Childcare Center</h1>
            <video controls width="600">
                <source src={ video } type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Home;
console.log("Home component is rendering");
console.log('Home Component is Rendering');
