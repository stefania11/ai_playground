import React from 'react';
import { Link } from 'react-router-dom';

export function ActivityList() {
    return (
        <div>
            <section className="activityList">
                <section className="imageClassification">
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
                                <img src="/image/apICDog.jpg" alt="Object detection of a dog" className="activityPage-IC-dog"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Object Detection"}</h2>
                                <p>{"Mutiple object detection using pre-trained model"}</p>
                                <Link to='/Activity/ObjectDetection'>
                                <button type="button" className="btn">{"Instructions"}</button>
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
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankYellow.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Object Detection"}</h2>
                                <p>{"Mutiple object detection using pre-trained model"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>

            <section className="activityList">
                <section className="machineLearning">
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
                                <img src="/image/apMLCat.png" alt="Generation of Cats from drawings" className="activityPage-ML-cat"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Machine Learning"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankBlue.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Machine Learning"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankBlue.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Machine Learning"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>


            <section className="activityList">
                <section className="interactiveCoding">
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
                                <img src="/image/blankPink.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Interactive Coding"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankPink.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Interactive Coding"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankPink.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Interactive Coding"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>





            <section className="activityList">
                <section className="voiceAssistants">
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
                                <img src="/image/blankGreen.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Voice Assistants"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankGreen.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Voice Assistants"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div>
                                <img src="/image/blankGreen.png" alt="NA" className="NA"></img>
                            </div>
                            <div className="activityContent">
                                <h2>{"Voice Assistants"}</h2>
                                <p>{"This is a placeholder text that will be updated later"}</p>
                                <button type="button" className="btn">{"Instructions"}</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </section>

            </section>
        </div>

    );

}

