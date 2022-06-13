import React from 'react';
import classes from './WorkFlow.css';
import { Fade } from 'react-reveal';

const workFlow = (props) => {
    return (
        <div className={classes.WorkFlow}>
            <div className={classes.Overlay}></div>
            <div className="container-sm">
                <div className="row justify-content-start mb-5">
                    <Fade bottom>
                    <div className="col-md-6 text-center" >
                        <span className={classes.Span}>
                            Work Flow
                        </span>
                        <h2 className="mb-3" style={{fontSize: "40px", color: "#fff", position: 'relative'}}>How It Works</h2>

                    </div>
                    </Fade>
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <Fade bottom>
                        <div className="row">
                            
                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                <div className={classes.Media}>
                                    <div className={classes.MediaBody}>
                                        <div className={classes.Icon}>
                                            <span>01</span>
                                        </div>
                                        <h3>Login</h3>
                                        <p>Login to your account to use the price predictor</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                <div className={classes.Media}>
                                    <div className={classes.MediaBody}>
                                        <div className={classes.Icon}>
                                            <span>02</span>
                                        </div>
                                        <h3>Select Features</h3>
                                        <p>Select the housing features like BHK, bathrooms, sq.feet area, area-type</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                <div className={classes.Media}>
                                    <div className={classes.MediaBody}>
                                        <div className={classes.Icon}>
                                            <span>03</span>
                                        </div>
                                        <h3>Price Prediction</h3>
                                        <p>Accurate approx price will be predicted of your dream house</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                <div className={classes.Media}>
                                    <div className={classes.MediaBody}>
                                        <div className={classes.Icon}>
                                            <span>04</span>
                                        </div>
                                        <h3>Dream House</h3>
                                        <p>Eureka!! Purchase your dream house and accomplish all your dreams</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Fade>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default workFlow