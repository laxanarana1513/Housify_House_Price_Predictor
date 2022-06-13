import React from 'react';
import classes from './Breadcrumps.css';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';

const Breadcrumps = (props) => {
    return (
        <div className="container">
            <div className={classes.Row} style={{paddingTop: props.ptop}}>
                <Fade bottom>
                    <div className="col-md-9 pt-5" style={{ textAlign: 'center', color: 'white' }}>

                        <p className={classes.Breadcrumps}>
                            <span style={{ marginRight: "7px" }}>
                                <NavLink to="/" className={classes.Link}>Home</NavLink>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" />
                            </span>

                            <span style={{ marginRight: "7px" }}>
                                <NavLink to={props.toLink} className={classes.Link}>{props.title}</NavLink>
                                <img src="https://img.icons8.com/ios-glyphs/12/ffffff/more-than.png" alt="" />
                            </span>
                        </p>
                        <h1>{props.title}</h1>

                    </div>
                </Fade>
            </div>

        </div>

    )
}

export default Breadcrumps