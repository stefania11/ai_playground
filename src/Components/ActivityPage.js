import React from 'react';

export function ActivityPageCoral(props) {
    return (
        <div>
            <section className="activityPage">
                <section className="innerImageClassification">
                    <div className="d-flex">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL +"/image/apICCoral.png"} alt="Object detection of Corals" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Coral Learning Activity"}</h2>
                            <p>{"In this activity, family will play two games together and learn how to classify and summarize different images of corals"} </p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apDiff.png"} alt="Difficulty" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Easy"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apAge.png"} alt="Age Group" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Ages 10-15"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apTime.png"} alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"20-30min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                    <a href={'https://coralandtest.herokuapp.com/'}>
                                        <button type="button" className="btn btn-playground-yellow border-dark" id="playBtn">{"Classify Game"}</button>
                                    </a>
                                    <a href={'https://coralandanchor.herokuapp.com/'}>
                                        <button type="button" className="btn btn-playground-yellow border-dark" id="playBtn">{"Anchor Game"}</button>
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
                            <img src={process.env.PUBLIC_URL +"/image/CoralPrep.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Family Playbook"}</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/Classification2.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Classification Game Instructions"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/Classification3.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Anchor Game Instructions"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-5">
                        <h2>{"Learning Materials"}</h2>
                        <p>{"Playbook & instructions for this activity"} </p>
                        <br></br>
                        <div>
                            <a href={'https://docs.google.com/presentation/d/1tvyBCk8xiLA3IBuW0q7cBTICYWzdlyz-cuaCPHPpLhw/edit#slide=id.p'}>
                            <button type="button" className="btn btn-playground-yellow border-dark" id="playBtn">{"Explore"}</button>
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
                            <a href={'https://forms.gle/uLDjfvcbYwUDrJJ29'}>
                                <button type="button" className="btn btn-playground-yellow border-dark" id="comBtn">{"Feedback Form"}</button>
                            </a>
                        </div>
                        <br></br>

                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
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
                            <img src={process.env.PUBLIC_URL +"/image/GamePage__scavengerHunt.png"} alt="Scavenger Hunt" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Scavenger Hunt"}</h2>
                            <p>{"Teach and train your computer to identify the objects in your house. After traning, you can trick your computer with similar objects and see if it can identy the objects correctly!"} </p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apDiff.png"} alt="Difficulty" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Moderate"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apAge.png"} alt="Age Group" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Ages 10-16"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apTime.png"} alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"10-15min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                    <a href={'https://docs.google.com/forms/d/e/1FAIpQLSc_vWcNHoZWyagQD7UpbdVa9QKyBxCdUl3es4KPqw_S_tly7w/viewform'}>
                                        <button type="button" className="btn btn-playground-blue border-dark" id="playBtn">{"Take Quiz"}</button>
                                    </a>
                                    <a href={'https://teachablemachine.withgoogle.com/v1/'}>
                                        <button type="button" className="btn btn-playground-blue border-dark" id="playBtn">{"Try Activity"}</button>
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
                            <img src={process.env.PUBLIC_URL +"/image/LM_scavengerHunt_1.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Family Playbook"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/LM_scavengerHunt_2.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Activity Instruction"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/LM_scavengerHunt_3.png"} alt="NA" className="NA"></img>
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
                                <button type="button" className="btn btn-light -blue border-dark" id="downloadBtn">{"Download"}</button>
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
                        <div>
                            <a href={'https://forms.gle/uLDjfvcbYwUDrJJ29'}>
                                <button type="button" className="btn btn-playground-blue border-dark" id="comBtn">{"Feedback Form"}</button>
                            </a>
                        </div>
                        </div>
                        <br></br>
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
                            <img src={process.env.PUBLIC_URL +"/image/GamePage_analyzeAi.png"} alt="Design and Analyze AI" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Design & Analyze AI"}</h2>
                            <p>{"Play Bingo game with AI and try to get as many Bingo boxes checked. Think about what is your AI technology like? Is it like an animal or a person? At the end, design your own AI device! Feel free to customize your AI using design tool kit provided. "} </p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apDiff.png"} alt="Difficulty" className="actDesImg"></img>
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
                            <img src={process.env.PUBLIC_URL +"/image/LM_analyzeAi_2.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Analyze AI Worksheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/LM_analyzeAi_3.png"} alt="NA" className="NA"></img>
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
                        <div>
                            <a href={'https://forms.gle/uLDjfvcbYwUDrJJ29'}>
                                <button type="button" className="btn btn-playground border-dark" id="comBtn">{"Feedback Form"}</button>
                            </a>
                        </div>
                        </div>
                        <br></br>
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
                            <img src={process.env.PUBLIC_URL +"/image/GamePage_askAI.png"} alt="Ask AI" className="activityPage"></img>
                        </div>
                        <div className="activityTextSection col-5">
                            <h2>{"Ask AI"}</h2>
                            <p>{"Ask the voice assistant and your parents the same questions you think of and record to compare their responses. Remember to mark and share any surprising responses/questions to others."} </p>
                            <br></br>
                            <div>
                                <hr></hr>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apDiff.png"} alt="Difficulty" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Easy"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apAge.png"} alt="Age Group" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"Ages 6-16"} </p>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <img src={process.env.PUBLIC_URL +"/image/apTime.png"} alt="Time" className="actDesImg"></img>
                                        <p style={{ color: 'grey' }}>{"25-35min"} </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                    <a href={'https://www.figma.com/file/FgVNDOF2mwhsv24vcQf2ZE/Ask-AI-worksheet?node-id=0%3A1'}>
                                        <button type="button" className="btn btn-playground_blue border-dark" id="playBtn">{"Try Activity"}</button>
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
                            <img src={process.env.PUBLIC_URL +"/image/LM_askAi_1.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Activity Worksheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/LM_askAi_2.png"} alt="NA" className="NA"></img>
                        </div>
                        <div className="activityContent">
                            <p style={{ color: 'grey' }}>{"Question Sheet"} </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div>
                            <img src={process.env.PUBLIC_URL +"/image/LM_askAi_3.png"} alt="NA" className="NA"></img>
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
                        <div>
                            <a href={'https://forms.gle/uLDjfvcbYwUDrJJ29'}>
                                <button type="button" className="btn btn-playground border-dark" id="comBtn">{"Feedback Form"}</button>
                            </a>
                        </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>

    );
}
