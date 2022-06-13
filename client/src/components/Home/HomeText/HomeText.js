import React from 'react';
import classes from './HomeText.css';
import { Fade } from 'react-reveal';
import { NavLink } from 'react-router-dom';

const homeText = (props) => {
    return (
        <div className="container" style={{ color: 'white' }}>
            <div className={classes.Row}>
                <Fade bottom>
                    <div className="col-md-10 col-xl-6">
                        <h1 className={classes.H1}>Your Property Is Our PRIORITY</h1>
                        <p className="mb-5" >
                            {/* Lifting Properties, Elevating Standards <br /> */}
                            Real Estate is practice is not about selling or buying a home, it's about representing your client's greatest asset to your client's greatest benefit.

                        </p>

                        <p>
                            <NavLink to="/about">
                                <button className={classes.Button}>Learn More</button>
                            </NavLink>
                        </p>

                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default homeText