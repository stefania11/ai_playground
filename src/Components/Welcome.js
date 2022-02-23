import React from 'react';

export function Welcome() {
    return (
        <div>
            <div className="container d-flex justify-content-center">
                <img src= {process.env.PUBLIC_URL + "/image/hpMainBanner.png"} alt="Two people having a conversation" className="homepageMain"></img>
            </div>
            <div className="container d-flex welcomeSection justify-content-center">
                <img src={process.env.PUBLIC_URL +"/image/hpCat.png"} alt="Child playing with AI col-3" className="homepageSide2"></img>
            <div className="col-6">
                <h1>{"Welcome to AI Playground"}</h1>
                <p>{"Our mission is to introduce AI literacy to every home. Explore all our games and activities, we have fun options for every member of the family! "}</p>
            </div>
                <img src={process.env.PUBLIC_URL +"/image/hpRobot.png"} alt="A robot" className="homepageSide1 col-3"></img>
            </div>
      </div>
    );
}