import React from 'react';

export function ActivityPageCoral(props) {
    return (
        <div>
            <section className="activityPage">
                <section className="innerImageClassification">
                    <div className="d-flex">
                        <div className="image">
                            <img src="/image/apICCoral.png" alt="Object detection of Corals" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Coral Learning Activity"}</h2>
                            <p>{"The pix2pix model works by training paired images, and tries to generate a corresponding output image from any input image children provide. Children can draw the image on the left side, and coppersponding picture will be produced based on the input. "} </p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src="/public/image/apDiff.png" alt="Difficulty" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Easy"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apAge.png" alt="Age Group" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Ages 10-15"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apTime.png" alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"20-30min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                {/* <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apBadge.png" alt="Badges" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Star Badge"} </p>
                                    </div>
                                </div>
                                <hr></hr> */}
                                {/* <div className="d-flex justify-content-start">
                                </div>
                                <hr></hr> */}
                                <div className="d-flex justify-content-around">
                                    <a href={'https://coralandtest.herokuapp.com/'}>
                                        <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Try Classification"}</button>
                                    </a>
                                    <a href={'https://coralandanchor.herokuapp.com/'}>
                                        <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Try Anchor"}</button>
                                    </a>
                                    {/* <button type="button" className="btn btn-modify" id="modifyBtn">{"Modify Game"}</button> */}
                                    {/* <button type="button" className="btn btn-light bg-white border-dark" id="starBtn">{"Activity Printout"}</button> */}
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
                            <img src="/image/CoralPrep.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Preparation Instruction"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/CoralAnchor.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Anchor Instruction"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/CoralClas.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Classfication Instruction"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-5">
                        <h2>{"Learning Materials"}</h2>
                        <p>{"Printouts for this activity design"} </p>
                        <br></br>
                        <div>
                            <a href={'https://docs.google.com/presentation/d/1tvyBCk8xiLA3IBuW0q7cBTICYWzdlyz-cuaCPHPpLhw/edit#slide=id.p'}>
                                <button type="button" className="btn btn-light bg-white border-dark" id="downloadBtn">{"Download"}</button>
                            </a>
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

export function ActivityPageScavenger(props) {
    return (
        <div>
            <section className="activityPage">
                <section className="innerMachineLearning">
                    <div className="d-flex">
                        <div className="image">
                            <img src="/image/GamePage__scavengerHunt.png" alt="Scavenger Hunt" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Scavenger Hunt"}</h2>
                            <p>{"Teach and train your computer to identify the objects in your house. After traning, you can trick your computer with similar objects and see if it can identy the objects correctly!"} </p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apDiff.png" alt="Difficulty" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Moderate"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apAge.png" alt="Age Group" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Ages 10-16"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apTime.png" alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"10-15min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                    <a href={'https://docs.google.com/forms/d/e/1FAIpQLSc_vWcNHoZWyagQD7UpbdVa9QKyBxCdUl3es4KPqw_S_tly7w/viewform'}>
                                        <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Take Quiz"}</button>
                                    </a>
                                    <a href={'https://teachablemachine.withgoogle.com/v1/'}>
                                        <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Try Activity"}</button>
                                    </a>
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
                            <img src="/image/LM_scavengerHunt_1.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Activity Introduction"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/LM_scavengerHunt_2.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Activity Instruction"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/LM_scavengerHunt_3.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Activity Demostration"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-5">
                        <h2>{"Learning Materials"}</h2>
                        <p>{"Printouts for this activity design"} </p>
                        <br></br>
                        <div>
                            <a href={'https://docs.google.com/presentation/d/1Z3eoTM8sba0EfcGgmMrIieEtmoGp28NilSJlgLeX71w/edit?usp=sharing'}>
                                <button type="button" className="btn btn-light bg-white border-dark" id="downloadBtn">{"Download"}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment">
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column'>
                        <h2>{"Share Your Ideas"}</h2>
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
                    </div>
                </div>
            </div>
        </div>

    );
}

export function ActivityPageDesign(props) {
    return (
        <div>
            <section className="activityPage">
                <section className="innerInteractiveCoding">
                    <div className="d-flex">
                        <div className="image">
                            <img src="/image/GamePage_analyzeAi.png" alt="Design and Analyze AI" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Design & Analyze AI"}</h2>
                            <p>{"Play Bingo game with AI and try to get as many Bingo boxes checked. Think about what is your AI technology like? Is it like an animal or a person? At the end, design your own AI device! Feel free to customize your AI using design tool kit provided. "} </p>
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
                                        <p style={{ color: 'grey' }}>{"Ages 6-16"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apTime.png" alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"30-45min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                    <a href={'https://docs.google.com/presentation/d/149TvbRzvrKVUehyhA_iVvPJrFCx_hw5SdDG-kn9nH3g/edit#slide=id.g8a8b0ce9fc_0_466'}>
                                        <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Try Activity"}</button>
                                    </a>
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
                            <img src="/image/LM_analyzeAi_1.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Bingo Game Worksheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/LM_analyzeAi_2.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Analyze AI Worksheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/LM_analyzeAi_3.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Design AI Worksheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-5">
                        <h2>{"Learning Materials"}</h2>
                        <p>{"Printouts for this activity design"} </p>
                        <br></br>
                        <div>
                            <a href={'https://docs.google.com/presentation/d/149TvbRzvrKVUehyhA_iVvPJrFCx_hw5SdDG-kn9nH3g/edit#slide=id.g8a8b0ce9fc_0_466'}>
                                <button type="button" className="btn btn-light bg-white border-dark" id="downloadBtn">{"Download"}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment">
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column'>
                        <h2>{"Share Your Ideas"}</h2>
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
                    </div>
                </div>
            </div>
        </div>

    );
}

export function ActivityPageAsk(props) {
    return (
        <div>
            <section className="activityPage">
                <section className="innerVoiceAssistants">
                    <div className="d-flex">
                        <div className="image">
                            <img src="/image/GamePage_askAI.png" alt="Ask AI" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Ask AI"}</h2>
                            <p>{"Ask the voice assistant and your parents the same questions you think of and record to compare their responses. Remember to mark and share any surprising responses/questions to others."} </p>
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
                                        <p style={{ color: 'grey' }}>{"Ages 6-16"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src="/image/apTime.png" alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"25-35min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                    <a href={'https://www.figma.com/file/FgVNDOF2mwhsv24vcQf2ZE/Ask-AI-worksheet?node-id=0%3A1'}>
                                        <button type="button" className="btn btn-playground border-dark" id="playBtn">{"Try Activity"}</button>
                                    </a>
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
                            <img src="/image/LM_askAi_1.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Activity Worksheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/LM_askAi_2.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Question Sheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src="/image/LM_askAi_3.png" alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Question Sheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-5">
                        <h2>{"Learning Materials"}</h2>
                        <p>{"Printouts for this activity design"} </p>
                        <br></br>
                        <div>
                            <a href={'https://docs.google.com/drawings/d/1dTRqDrHryDV35FNXOvJ49wnQiTs9tid9N5Oqf3GzWZk/edit'}>
                                <button type="button" className="btn btn-light bg-white border-dark" id="downloadBtn">{"Download"}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment">
                <div className='d-flex flex-row justify-content-center'>
                    <div className='d-flex flex-column'>
                        <h2>{"Share Your Ideas"}</h2>
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
                    </div>
                </div>
            </div>
        </div>

    );
}
