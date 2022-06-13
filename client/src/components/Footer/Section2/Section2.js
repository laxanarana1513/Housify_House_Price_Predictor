import React from 'react';
import classes from '../Footer.css';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';

const section2 = (props) => {
    return (
        <Fade left>
            <div className="col-md-3 col-lg">
                <div className="mb-4">
                    <h2 className={classes.Inner}>Company</h2>

                    <ul className="mt-2" style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li className={classes.Icon} style={{ display: 'flex' }}>
                            <NavLink to="/" className={classes.FLinks}>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" style={{ marginRight: "6px" }} />
                                Home
                            </NavLink>
                        </li>

                        <li className={classes.Icon} style={{ display: 'flex' }}>
                            <NavLink to="/about" className={classes.FLinks}>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" style={{ marginRight: "6px" }} />
                                About Us
                            </NavLink>
                        </li>

                        <li className={classes.Icon} style={{ display: 'flex' }}>
                            <NavLink to="/price_predictor" className={classes.FLinks}>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" style={{ marginRight: "6px" }} />
                                Price Predictor
                            </NavLink>
                        </li>

                        <li className={classes.Icon} style={{ display: 'flex' }}>
                            <NavLink to="/reviews" className={classes.FLinks}>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" style={{ marginRight: "6px" }} />
                                Reviews
                            </NavLink>
                        </li>

                        <li className={classes.Icon} style={{ display: 'flex' }}>
                            <NavLink to="/auth" className={classes.FLinks}>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" style={{ marginRight: "6px" }} />
                                Login/Sign Up
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </Fade>
    )
}

export default section2