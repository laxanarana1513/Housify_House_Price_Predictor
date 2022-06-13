import React from 'react';
import classes from './Footer.css';
import Copyright from './Copyright/Copyright';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

const footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className="container-xl">
                <div className="row mt-5 mb-5 pb-5 justify-content-between">
                    <Section1 />

                    <Section2 />

                    <Section3 />

                </div>

            </div>

            <Copyright />            

        </footer>
    )
}

export default footer