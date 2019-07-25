import React from 'react';

const person = (props) => {
    return (
        <div>
            <p> Dolor {props.name} a met {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;