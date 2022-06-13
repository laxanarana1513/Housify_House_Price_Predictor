import React from 'react';
import Logo from '../../Logo/Logo';
import classes from '../Footer.css';
import { Fade } from 'react-reveal';

const section1 = (props) => {
    return (
        <Fade left>
            <div className="col-md-3 col-lg">
                <div className="mb-4">
                    <Logo mb="40px" visible="block" />
                    <p>
                        Your Property Is Our <strong>PRIORITY</strong> <br />
                        Owning a home is a keystone of wealth.. both financial affluence and emotional security
                    </p>

                    <ul className="mt-2" style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li className={classes.Icon}>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/40/fa314a/facebook-circled--v1.png" alt="" />
                            </a>
                        </li>

                        <li className={classes.Icon}>
                            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/43/fa314a/instagram-circle.png" alt="" />
                            </a>
                        </li>

                        <li className={classes.Icon}>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/43/fa314a/linkedin-circled--v1.png" alt="" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </Fade>
    )
}

export default section1