import React from 'react';
import classes from '../Description.css';
import { Fade } from 'react-reveal';

const row2 = (props) => {
    return (
        <div className="row mb-5 justify-content-between">
            <Fade bottom>
                <div className="col-md-3 col-lg text-center">
                    <div className={classes.DIcon}>
                        <img src="https://img.icons8.com/ios-filled/65/4a90e2/to-do.png" alt="" />
                    </div>

                    <div className={classes.DText}>
                        <h3>Algorithm-Based Property Matching</h3>
                        <p>
                            Quickly shortlist, and send matches to your leads with a couple of clicks. All based on their site activity, using searches & views.
                        </p>

                    </div>

                </div>

                <div className="col-md-3 col-lg text-center">
                    <div className={classes.DIcon}>
                        <img src="https://img.icons8.com/ios-filled/65/4a90e2/communication.png" alt="" />
                    </div>

                    <div className={classes.DText}>
                        <h3>Live Chat</h3>
                        <p>
                            Speed to lead is paramount, don't make them wait for a follow-up, engage them with a live personal conversation, so you can capture, qualify, and convert in real-time, day or night.
                        </p>

                    </div>
                </div>

                <div className="col-md-3 col-lg text-center">
                    <div className={classes.DIcon}>
                        <img src="https://img.icons8.com/android/65/4a90e2/thumb-up.png" alt="" />
                    </div>

                    <div className={classes.DText}>
                        <h3>Always Innovating</h3>
                        <p>
                            We’re just getting started by continually improving with new innovations, and delivering quality day-to-day customer service to keep our customers ahead of the curve.
                        </p>

                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default row2