import React from 'react';
import "./User.css";

export default function UserInput(props) {
    return (
        <div className='inputDiv'>
            <h2> User Input</h2>
            <p>Change the Username Below</p>
            <input
                className='inputBar'
                type="text"

                onChange={(e) => props.onChange(e.target.value)}
                defaultValue={props.username}
            />
        </div>

    )
}
