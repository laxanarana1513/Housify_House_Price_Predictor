import React from 'react';
import { Fade } from 'react-reveal';
import classes from './AboutContent.css';


const aboutContent = (props) => {
    return (
        <div style={{ padding: "6em 0" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 " >
                        <div className={classes.Aimg}></div>
                    </div>
                    <Fade bottom>
                        <div className="col-md-6 py-md-4 wrap-about">
                            <div className={classes.Section}>
                                <h2>We Put People First</h2>

                                <p>
                                    We pride ourselves on developing smart, high-tech buildings, always with a sustainable footprint. Working with a strong team of industry professionals, we have a proven track record in unlocking value in sites and translating client visions into reality.
                                </p>

                                <p>
                                    Whether you’re looking to invest in new build and refurbishment schemes, collaborate on bespoke projects, or are an existing landowner with a joint venture idea, we has the collective skills and experience to translate your ideas. No matter what the scope, we always stay engaged in all aspects of the development process from conception to implementation.
                                </p>

                            </div>

                        </div>
                    </Fade>
                </div>

            </div>
        </div>

    )
}

export default aboutContent