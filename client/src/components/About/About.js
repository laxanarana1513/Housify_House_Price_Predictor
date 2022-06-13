import React from 'react';
import classes from './About.css';
import AboutContent from './AboutContent/AboutContent';
import Breadcrumps from '../UI/Breadcrumps/Breadcrumps';

const about = (props) => {
    return (
        <section id="about">
            <div className={classes.About}>
                <Breadcrumps title="About Us" toLink="/about" />
                
            </div>
            <AboutContent />

        </section>
    )
}

export default about