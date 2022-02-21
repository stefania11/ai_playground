import React from 'react';
import 'bootstrap/js/dist/dropdown';

function handleBackClickImg() {
    document.getElementById('imageClassification').scrollIntoView({ behavior: 'smooth' })
}

function handleBackClickML() {
    document.getElementById('machineLearning').scrollIntoView({ behavior: 'smooth' })
}

function handleBackClickInteract() {
    document.getElementById('interactiveCoding').scrollIntoView({ behavior: 'smooth' })
}

function handleBackClickVoice() {
    document.getElementById('voiceAssistants').scrollIntoView({ behavior: 'smooth' })
}

export function ActivityFilter() {
    return (
        <section className="allActivitiesPage">
            <div>
                <h1 className="allActivitiesPage">{"All Activities"}</h1>
            </div>
            <div className="d-flex">
                <div className="row">

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {"Categoriesㅤ"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button" onClick={handleBackClickImg}>{"Image Classification"}</button></li>
                            <li><button className="dropdown-item" type="button" onClick={handleBackClickML}>{"Machine Learning"}</button></li>
                            <li><button className="dropdown-item" type="button" onClick={handleBackClickInteract}>{"Interactive Coding"}</button></li>
                            <li><button className="dropdown-item" type="button" onClick={handleBackClickVoice}>{"Voice Assistant"}</button></li>
                        </ul>
                    </div>

                    {/* <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            {"Age Rangeㅤ"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">{"Range 1"}</button></li>
                            <li><button className="dropdown-item" type="button">{"Range 2"}</button></li>
                            <li><button className="dropdown-item" type="button">{"Range 3"}</button></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            {"Ratingㅤ"}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">{"Rating rang 1"}</button></li>
                            <li><button className="dropdown-item" type="button">{"Rating rang 2"}</button></li>
                            <li><button className="dropdown-item" type="button">{"Rating rang 3"}</button></li>
                        </ul>
                    </div> */}


                </div>
            </div>
        </section>

    );
}