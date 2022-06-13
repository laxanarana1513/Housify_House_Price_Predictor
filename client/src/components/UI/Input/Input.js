import React from 'react';
import Auxi from '../../../hoc/Auxi';

const input = (props) => {

    let inputElement = null;
    // let inputClasses = null

    switch (props.elementType) {
        case ('input'):
            inputElement = 
            <div className="col-md-12 mb-4">
                <label className="form-label">{props.label}</label>
                <input className="form-control"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
            </div>
            break;

        case ('textarea'):
            inputElement = 
            <div className="col-md-12 mb-4">
                <label className="form-label">{props.label}</label>
                <textarea className="form-control"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} rows="6"
                 />
            </div>
            break;

        default:
            inputElement =
            <div className="col-md-12 mb-4">
                <label className="form-label">{props.label}</label>
                <inpu t className="form-control"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
            </div>
    }

    return (
        <Auxi>
            {inputElement}
        </Auxi>
    )
}

export default input