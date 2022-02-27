import React from 'react';

export function IngredientsPage() {
    return (
        <div>
            <section className="IngredientsPage">
                <section className="IngredientsIntro">
                    <div className='title'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>{"6 Ingredients of AI Literacy"}</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="col">
                        <div className="d-flex">
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + "/image/Ingredients-1.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                            </div>
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + "/image/Ingredients-2.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col">
                                <h2>{"01 Mutual Engagement"} </h2>
                                <p>{"Families are equally participating and engaging in the activity. Engage by asking your voice assistant (on your phone or in the house) a series of questions, like “assistant, what should we make for dinner tonight? Who made you? How do you learn?”. Try to build off of the assistant’s responses and each other's questions."}</p>
                            </div>
                            <div className="col">
                                <h2>{"02 Co-Creation"} </h2>
                                <p>{"Kids and parents use AI Technologies to create things together that are meaningful for their families. Go to TeachableMachine.com and teach the computer to recognize you and your family members. Once you are done, think of different ways to trick the computer together and improve the way you teach it. "} </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + "/image/Ingredients-3.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                                <h2>{"03 Boundary Crossing"} </h2>
                                <p>{"Kids and parents share their past experiences and personal stories during the activity with AI. As a family share what past technologies voice assistants remind you of, and imagine what the future voice assistant may look like. "}</p>
                            </div>
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + "/image/Ingredients-4.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                                <h2>{"04 Collaborative Inquiry"} </h2>
                                <p>{"Families collaborate to understand together how AI works. Try to understand how a voice assistant may work. Take turns and draw or discuss what you think is inside the device. As you are brainstorming, you may ask questions to the assistant to help you better understand how it works."} </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + "/image/Ingredients-5.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                                <h2>{"05 Intention to Develop"} </h2>
                                <p>{"Families develop awareness of their own or their partners’ needs and/or interests. Then, they help themselves or their partners to grow through the activity. Make a diary of your daily use of a specific AI technology. Write down interesting things, and see how it changes over time. "}</p>
                            </div>
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + "/image/Ingredients-6.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                                <h2>{"06 Focus on Content, Not Control"} </h2>
                                <p>{"Families focus on the content and genuine interactions with AI, while minimizing the considerations for technical features and/or design elements. Try and compare the differences between your experience interacting with a complicated device and using something simple. How does it change the experience? "} </p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr></hr>
                <section className="ActivitySet">
                    <div>
                        <h2>{"Activity Set"} </h2>
                        <p>{"Print out these to try at home."}</p>
                        <div>
                            <a href={'https://github.com/stefania11/ai_playground/blob/master/public/worksheets/Posters%20AI%20Literacy%20Families.pdf'} target="_blank">
                                <button type="button" className="btn btn-playground-yellow border-dark" id="dlBtn">{"Download Set"}</button>
                            </a>
                        </div>

                    </div>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-around">
                        <div>
                            <img src={process.env.PUBLIC_URL + "/image/ActivitySetPoster1.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/image/ActivitySetPoster2.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/image/ActivitySetPoster3.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/image/ActivitySetPoster4.png"} alt="Ingredient Description" className='ingredientDesImg'></img>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </section>
            </section>
        </div>
    );
} 