import React from 'react';
import classes from '../Description.css';
import { Fade } from 'react-reveal';

const row1 = (props) => {
    return (
        <div className="row mb-5 justify-content-between">
            <Fade bottom>
                <div className="col-md-3 col-lg text-center">
                    <div className={classes.DIcon}>
                        <img src="https://img.icons8.com/material/65/4a90e2/android--v1.png" alt="" />
                    </div>

                    <div className={classes.DText}>
                        <h3>Mobile-First</h3>
                        <p>
                            Designed with a mobile-first approach because your business is always on the go.
                        </p>

                    </div>

                </div>

                <div className="col-md-3 col-lg text-center">
                    <div className={classes.DIcon}>
                        <img src="https://img.icons8.com/ios-glyphs/65/4a90e2/add-user-male.png" alt="" />
                    </div>

                    <div className={classes.DText}>
                        <h3>Capture, Qualify & Close</h3>
                        <p>
                            Puts all your leads in one easy to access and organized system, guiding and tracking each unique relationship from prospect to close.
                        </p>

                    </div>
                </div>

                <div className="col-md-3 col-lg text-center">
                    <div className={classes.DIcon}>
                        <img src="https://img.icons8.com/material/65/4a90e2/electricity.png" alt="" />
                    </div>

                    <div className={classes.DText}>
                        <h3>Lead Activity</h3>
                        <p>
                            Track all your leads site activity from views, searches, and favorites. Updated in real-time.
                        </p>

                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default row1