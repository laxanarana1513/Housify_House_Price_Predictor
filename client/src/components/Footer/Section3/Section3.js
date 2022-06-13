import React from 'react';
import classes from '../Footer.css';
import { Fade } from 'react-reveal';

const section3 = (props) => {
    return (
        <Fade left>
            <div className="col-md-5 col-lg">
                <div className="mb-4">
                    <h2 className={classes.Inner}>Have a Question?</h2>

                    <ul className="mt-2" style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li className={classes.Add}>
                            <span className={classes.ASpan}>
                                <img src="https://img.icons8.com/ios-filled/30/fa314a/address--v1.png" alt="" />
                            </span>

                            <span className={classes.AText}>
                                A.D Patel Institute Of Technology, New V.V Nagar, Anand, Gujarat, India
                            </span>

                        </li>

                        <li className={classes.Add}>
                            <span className={classes.ASpan}>
                                <img src="https://img.icons8.com/ios-filled/25/fa314a/phone-disconnected.png" alt="" />
                            </span>

                            <span className={classes.AText}>
                                63XXXXXXXX
                            </span>
                        </li>

                        <li className={classes.Add}>
                            <span className={classes.ASpan}>
                                <img src="https://img.icons8.com/ios-filled/25/fa314a/telegram-app.png" alt="" />
                            </span>

                            <span className={classes.AText}>
                                laxanarana@gmail.com
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        </Fade>
    )
}

export default section3