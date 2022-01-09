import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <header className="App-header">
            <div className="d-flex flex-row-reverse justify-content-between">
                <div className="flex-row-reverse">
                    {/* <button type="button" className="btn btn-light" id="ingreBtn">{"6 Ingredients"}</button>
                    <button type="button" className="btn btn-light" id="pbBtn">{"Playbooks"}</button>
                    <button type="button" className="btn btn-warning" id="createProfBtn">{"Create Profile"}</button> */}
                    <Link to='/Activity'>
                    <button type="button" className="btn btn-warning" id="createProfBtn">{"Explore Activities"}</button>
                    </Link>
                </div>
                <Link to='/'>
                <img src="/image/avatar.jpeg" alt="User avatar" className="pd-2 border"></img>
                </Link>
            </div>
        </header>
    );
} 