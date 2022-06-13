import React from 'react';
import classes from './Description.css';
import Row1 from './Row1/Row1';
import Row2 from './Row2/Row2';

const description = (props) => {
    return (
        <div className={classes.Description}>
            <div className="container">
                <Row1 />
               
                <Row2 />

            </div>

        </div>
    )
}

export default description