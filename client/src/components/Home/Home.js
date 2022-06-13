import React from 'react';
import classes from './Home.css';
import HomeText from './HomeText/HomeText';
import AboutContent from '../About/AboutContent/AboutContent';
import WorkFlow from './WorkFlow/WorkFlow';
import Description from '../Description/Description';

const home = (props) => {
    return (
        <section id="home">
            <div className={classes.Home}>
                <div style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <HomeText />
                </div>

            </div>
            <AboutContent />
            <WorkFlow />
            <Description />
        </section>

    )
}

export default home