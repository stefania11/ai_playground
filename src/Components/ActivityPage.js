import React from 'react';

export function ActivityPage(props) {
    return (
        <div>
            <section className="activityPage">
                <section className="innerImageClassification">
                    <div className="d-flex">
                        <div className="image">
                            <img src="/image/apICDog.png" alt="Object detection of a dog" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"What's This Object?"}</h2>
                            <p>{"What's this object? Let the AI tell you!"} </p>
                            <p>{"Choose an image or turn on your webcam to get a real-time calssification!"}</p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apDiff.png" alt="Difficulty" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Easy"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apAge.png" alt="Age Group" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"All"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apTime.png" alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"10-15min"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apBadge.png" alt="Badges" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Star Badge"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                {/* <div className="d-flex justify-content-start">
                                    
                                </div>
                                <hr></hr> */}
                                <div className="flex-row justify-content-between">
                                    <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Try it!"}</button>
                                    {/* <button type="button" className="btn btn-modify" id="modifyBtn">{"Modify Game"}</button> */}
                                    <button type="button" className="btn btn-light bg-white border-dark" id="starBtn">{"Activity Printout"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <div className='learningMat'>
                <hr></hr>

                <div className="activity d-flex">

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-5">
                        <h2>{"Learning Materials"}</h2>
                        <p>{"Printouts for this activity design"} </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <button type="button" className="btn btn-light bg-white border-dark" id="downloadBtn">{"Download"}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment">
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column'>
                        <h2>{"Share Your Ideas"}</h2>
                        {/* <textarea rows="10" cols="80"></textarea> */}
                        <br></br>
                        <div>
                            <a href={'https://www.google.com/'}>
                                <button type="button" className="btn btn-playground border-dark" id="comBtn">{"Feedback Form"}</button>
                            </a>
                        </div>
                        <br></br>
                        <p>{"(The above button is a place holder; it actually links to Google)"}</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <div className='comHis'>
                            <hr></hr>
                            <div className="d-flex justify-content-start">
                                <hr></hr>
                                <img src="/image/apAge.png" alt="Age Group" className="actDesImg"></img>
                                <p>{"Jane Doe | May 22 2020"}</p>
                                <p>{"Share your thoughts, ideas, and any suggestions about the game...oad these items....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
                            </div>
                            <hr></hr>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className='exploreAct'>
                <hr></hr>
                <h2>{"Explore Activities"}</h2>
                <p>{"To further explore check out these activities...."} </p>

                <div className="activity d-flex">

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Game PDF"} </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    );

}

