import React from 'react';
import { Link } from 'react-router-dom';

export function ActivityList() {
    return (
        <div>
            <section className="activityList">
                <section className="machineLearning" id="machineLearning">
                    <div className="d-flex">
                        <div className="activityTextSection col-5">
                            <h2>{"Machine Learning"}</h2>
                            <p>{"Teach a machine to learn from your examples"}</p>
                        </div>
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/image/hpCat.png"} alt="Machine Learning" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">

                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/ML1.png"} alt="Scavenger Hunt" className="activityPage-ML-Scavenger"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Scavenger Hunt"}</h2>
                                <p>{"Machine Learning Game"}</p>
                                <Link to='/Activity/ScavengerHunt'>
                                <button type="button" className="btn btn-playground-blue">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/ML2.jpeg"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Detect Home Objects"}</h2>
                                <p>{"Mobile Apps for Object Detection"}</p>
                                <Link to='/Activity/ScavengerHunt'>
                                <button type="button" className="btn btn-playground-blue">{"View More"}</button>
                                </Link>
                                </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/ML3.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Guess Prediction Game"}</h2>
                                <p>{"Guess Machine Object Predictions"}</p>
                                <Link to='/Activity/ScavengerHunt'>
                                <button type="button" className="btn btn-playground-blue">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>


            <section className="activityList">
                <section className="interactiveCoding" id="interactiveCoding">
                    <div className="d-flex">
                        <div className="activityTextSection col-5">
                            <h2>{"Design & Analyze AI"}</h2>
                            <p>{" "}</p>
                        </div>
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/image/apInteractiveCoding.png"} alt="Interactive Coding" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">
                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/HomePage_analyzeAi.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Design & Analyze AI"}</h2>
                                <p>{"Interactive coding game for kids"}</p>
                                <Link to='/Activity/DesignAnalyzeAI'>
                                <button type="button" className="btn">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/blankPink.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Interactive Coding"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/blankPink.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Interactive Coding"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>





            <section className="activityList">
                <section className="voiceAssistants" id="voiceAssistants">
                    <div className="d-flex">
                        <div className="activityTextSection col-5">
                            <h2>{"Voice Assistants"}</h2>
                            <p>{"Learn how to play and understand better voice assistants"}</p>
                        </div>
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/image/apVoiceAssistants.png"} alt="Voice Assistants" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">
                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/HomePage_askAi.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Ask AI"}</h2>
                                <p>{"Voice Assistants AI game for kids"}</p>
                                <Link to='/Activity/AskAI'>
                                <button type="button" className="btn">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/blankGreen.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Voice Assistants"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/blankGreen.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Voice Assistants"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>
            <section className="activityList">
                <section className="imageClassification" id="imageClassification">
                    <div className="d-flex">
                        <div className="activityTextSection col-5">
                            <h2>{"Image Classification"}</h2>
                            <p>{"Learn more about how computers classify images"}</p>
                        </div>
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/image/apImageClassification.png"} alt="Two people identifying an pattern" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">
                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/apICCoral.png"} alt="Object detection of Corals" className="activityPage-IC-Coral"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Coral Learning Activity"}</h2>
                                <p>{"Image classification for families"}</p>
                                <Link to='/Activity/Coral'>
                                <button type="button" className="btn btn-playground-yellow">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/Classification2.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Classification Game"}</h2>
                                <p>{"Classify Coral Images"}</p>
                                <Link to='/Activity/Coral'>
                                    <button type="button" className="btn btn-playground-yellow">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src={process.env.PUBLIC_URL +"/image/Classification3.png"} alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Anchor Game"}</h2>
                                <p>{"Pick Segments of Coral Images"}</p>
                                <Link to='/Activity/Coral'>
                                    <button type="button" className="btn btn-playground-yellow">{"View More"}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>

    );

}
