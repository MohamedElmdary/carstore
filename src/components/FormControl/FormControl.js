import React from 'react';
import './FormControl.scss';

const formControl = (props) => {

    let control = (
        <div className="form-group">
            <label htmlFor={props.id}>{props.name}</label>
            <input onChange={props.changedHandler} type={props.type} value={props.value} className={"form-control" + (!props.valid && props.touched ? " invalid-control" : "")} id={props.id} placeholder={props.name} />
        </div>
    );

    if (props.type === "checkbox") {
        control = (
            <div className="form-group form-check">
                <input onChange={props.changedHandler} type="checkbox" value={props.value} className="form-check-input" id={props.id} />
                <label className="form-check-label" htmlFor={props.id}>{props.name}</label>
            </div>
        );
    }

    return control;
}
 
export default formControl;