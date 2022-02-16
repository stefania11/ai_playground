import React from 'react';
import { Link } from 'react-router-dom';

export function ActivityList() {
    return (
        <div>
            <section className="activityList">
                <section className="imageClassification" id="imageClassification">
                    <div className="d-flex">
                        <div className="activityTextSection col-5">
                            <h2>{"Image Classification"}</h2>
                            <p>{"This category is about....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
                        </div>
                        <div className="image">
                            <img src="/image/apImageClassification.png" alt="Two people identifying an pattern" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">
                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/apICCoral.png" alt="Object detection of Corals" className="activityPage-IC-Coral"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Coral Learning Activity"}</h2>
                                <p>{"Image classification game for kids"}</p>
                                <Link to='/Activity/Coral'>
                                <button type="button" className="btn">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Object Detection"}</h2>
                                <p>{"Mutiple object detection using pre-trained model"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Object Detection"}</h2>
                                <p>{"Mutiple object detection using pre-trained model"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>

            <section className="activityList">
                <section className="machineLearning" id="machineLearning">
                    <div className="d-flex">
                        <div className="activityTextSection col-5">
                            <h2>{"Machine Learning"}</h2>
                            <p>{"This category is about....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
                        </div>
                        <div className="image">
                            <img src="/image/hpCat.png" alt="Machine Learning" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">

                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/HomePage_scavengerHunt.png" alt="Scavenger Hunt" className="activityPage-ML-Scavenger"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Scavenger Hunt"}</h2>
                                <p>{"Machine Learning game for kids"}</p>
                                <Link to='/Activity/ScavengerHunt'>
                                <button type="button" className="btn">{"View More"}</button>
                                </Link>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankBlue.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Machine Learning"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankBlue.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Machine Learning"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
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
                            <h2>{"Interactive Coding"}</h2>
                            <p>{"This category is about....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
                        </div>
                        <div className="image">
                            <img src="/image/apInteractiveCoding.png" alt="Interactive Coding" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">
                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/HomePage_analyzeAi.png" alt="NA" className="NA"></img>
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
                                <img src="/image/blankPink.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Interactive Coding"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankPink.png" alt="NA" className="NA"></img>
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
                            <p>{"This category is about....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}</p>
                        </div>
                        <div className="image">
                            <img src="/image/apVoiceAssistants.png" alt="Voice Assistants" className="activityPage"></img>
                        </div>
                    </div>

                    <div className="activity d-flex">
                        {/* <div className="row"> */}

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/HomePage_askAi.png" alt="NA" className="NA"></img>
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
                                <img src="/image/blankGreen.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Voice Assistants"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"View More"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankGreen.png" alt="NA" className="NA"></img>
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
        </div>

    );

}

