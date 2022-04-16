import React from 'react';
import "./User.css";

export default function UserOutput(props) {
    return (
        <div className='outputDiv'>
            <p className='outputP'> User Output {props.id}</p>
            <div>
                <p className='outputP2'
                ><b>Username:</b> {props.username}</p>
            </div>
        </div>
    )
}
