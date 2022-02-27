import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <header className="App-header">
            <div className="d-flex flex-row-reverse justify-content-between">
                <div className="flex-row-reverse">
                    <Link to='/'>
                        <button type="button" className="btn btn-light" id="ingreBtn">{"Homepage"}</button>
                    </Link>
                    <Link to='/Ingredients'>
                        {/* <a href={'https://github.com/stefania11/ai_playground/blob/master/public/worksheets/Posters%20AI%20Literacy%20Families.pdf'} target="_blank"> */}
                        <button type="button" className="btn btn-light" id="ingreBtn">{"6 Ingredients for AI Literacy"}</button>
                        {/* </a> */}
                    </Link>
                    <a href={'https://wip.mitpress.mit.edu/pub/the-4as/release/1'} target="_blank">
                        <button type="button" className="btn btn-light" id="ingreBtn">{"Book on Family AI Literacy"}</button></a>
                    {/* <button type="button" className="btn btn-warning" id="createProfBtn">{"Create Profile"}</button> */}
                    <Link to='/Activity'>
                        <button type="button" className="btn btn-light" id="ingreBtn">{"Explore Activities"}</button>
                    </Link>
                </div>
                {/* <Link to='/'>
                <img src="/image/avatar.jpeg" alt="User avatar" className="pd-2 border"></img>
                </Link> */}
            </div>
        </header>
    );
} 