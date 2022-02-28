import React from 'react';

export function ActivityPageCoral(props) {
    return ( <
            div >
            <
            section className = "activityPage" >
            <
            section className = "innerImageClassification" >
            <
            div className = "d-flex" >
            <
            div className = "image" >
            <
            img src = { process.env.PUBLIC_URL + "/image/apICCoral.png" }
            alt = "Object detection of Corals"
            className = "activityPage" > < /img> < /
            div > <
            div className = "activityTextSection col-5" >
            <
            h2 > { "Coral Learning Activity" } < /h2> <
            p > { "In this activity, family will play two games together and learn how to classify and summarize different images of corals" } < /p> <
            br > < /br> <
            div >
            <
            hr > < /hr> <
            div className = "d-flex justify-content-around" >
            <
            div className = "d-flex justify-content-start" >
            <
            img src = { process.env.PUBLIC_URL + "/image/apDiff.png" }
            alt = "Difficulty"
            className = "actDesImg" > < /img> <
            p style = {
                { color: 'grey' }
            } > { "Easy" } < /p> < /
            div > <
            div className = "d-flex justify-content-start" >
            <
            img src = { process.env.PUBLIC_URL + "/image/apAge.png" }
            alt = "Age Group"
            className = "actDesImg" > < /img> <
            p style = {
                { color: 'grey' }
            } > { "Ages 10-15" } < /p> < /
            div > <
            div className = "d-flex justify-content-start" >
            <
            img src = { process.env.PUBLIC_URL + "/image/apTime.png" }
            alt = "Time"
            className = "actDesImg" > < /img> <
            p style = {
                { color: 'grey' }
            } > { "20-30min" } < /p> < /
            div > <
            /div> <
            hr > < /hr> <
            br > < /br> <
            br > < /br> <
            div className = "d-flex justify-content-around" >
            <
            a href = { 'https://coralandtest.herokuapp.com/' }
            target = "_blank" >
            <
            button type = "button"
            className = "btn btn-playground-yellow border-dark"
            id = "playBtn" > { "Classify Game" } < /button> < /
            a > <
            a href = { 'https://coralandanchor.herokuapp.com/' }
            target = "_blank" >
            <
            button type = "button"
            className = "btn btn-playground-yellow border-dark"
            id = "playBtn" > { "Anchor Game" } < /button> < /
            a >

            <
            /div> < /
            div > <
            /div> < /
            div > <
            /section> < /
            section >

            <
            div className = 'learningMat' >
            <
            hr > < /hr>

            <
            div className = "activity d-flex" >

            <
            div className = "d-flex flex-column" >
            <
            div >
            <
            img src = { process.env.PUBLIC_URL + "/image/CoralPrep.png" }
            alt = "NA"
            className = "NA" > < /img> < /
            div > <
            div className = "activityContent" >
            <
            p style = {
                { color: 'grey' }
            } > { "Family Playbook" } < /p> < /
            div > <
            /div>

            <
            div className = "d-flex flex-column" >
            <
            div >
            <
            img src = { process.env.PUBLIC_URL + "/image/Classification2.png" }
            alt = "NA"
            className = "NA" > < /img> < /
            div > <
            div className = "activityContent" >
            <
            p style = {
                { color: 'grey' }
            } > { "Classification Game Instructions" } < /p> < /
            div > <
            /div>

            <
            div className = "d-flex flex-column" >
            <
            div >
            <
            img src = { process.env.PUBLIC_URL + "/image/Classification3.png" }
            alt = "NA"
            className = "NA" > < /img> < /
            div > <
            div className = "activityContent" >
            <
            p style = {
                { color: 'grey' }
            } > { "Anchor Game Instructions" } < /p> < /
            div > <
            /div>

            <
            div className = "d-flex flex-column col-5" >
            <
            h2 > { "Learning Materials" } < /h2> <
            p > { "Playbook & instructions for this activity" } < /p> <
            br > < /br> <
            div >
            <
            a href = { 'https://docs.google.com/presentation/d/1tvyBCk8xiLA3IBuW0q7cBTICYWzdlyz-cuaCPHPpLhw/edit#slide=id.p' }
            target = "_blank" >
            <
            button type = "button"
            className = "btn btn-playground-yellow border-dark"
            id = "playBtn" > { "Explore" } < /button> < /
            a > <
            /div> < /
            div > <
            /div> < /
            div >

            <
            div className = "comment" >
            <
            div className = 'd-flex flex-row justify-content-center' >
            <
            div className = 'd-flex flex-column' >
            <
            h2 > { "Share Your Ideas" } < /h2> { / * < textarea rows = "10"
            cols = "80" > < /textarea> */
        } <
        br > < /br> <
    div >
        <
        a href = { 'https://forms.gle/uLDjfvcbYwUDrJJ29' }
    target = "_blank" >
        <
        button type = "button"
    className = "btn btn-playground-yellow border-dark"
    id = "comBtn" > { "Feedback Form" } < /button> < /
    a > <
        /div> <
    br > < /br>

    <
    br > < /br> <
    br > < /br> <
    br > < /br> < /
    div > <
        /div> < /
    div > <
        /div>

);

}

export function ActivityPageScavenger(props) {
    return ( <
        div >
        <
        section className = "activityPage" >
        <
        section className = "innerMachineLearning" >
        <
        div className = "d-flex" >
        <
        div className = "image" >
        <
        img src = { process.env.PUBLIC_URL + "/image/Scavenger_banner.png" }
        alt = "Scavenger Hunt"
        className = "activityPage" > < /img> < /
        div > <
        div className = "activityTextSection col-5" >
        <
        h2 > { "Scavenger Hunt" } < /h2> <
        p > { "Teach and train your computer to identify the objects in your house. After traning, you can trick your computer with similar objects and see if it can identy the objects correctly!" } < /p> <
        br > < /br> <
        div >
        <
        hr > < /hr> <
        div className = "d-flex justify-content-around" >
        <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apDiff.png" }
        alt = "Difficulty"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "Moderate" } < /p> < /
        div > <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apAge.png" }
        alt = "Age Group"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "Ages 10-16" } < /p> < /
        div > <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apTime.png" }
        alt = "Time"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "10-15min" } < /p> < /
        div > <
        /div> <
        hr > < /hr> <
        br > < /br> <
        br > < /br> <
        div className = "d-flex justify-content-around" >
        <
        a href = { 'https://docs.google.com/forms/d/e/1FAIpQLSc_vWcNHoZWyagQD7UpbdVa9QKyBxCdUl3es4KPqw_S_tly7w/viewform' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-blue border-dark"
        id = "playBtn" > { "Prediction Game" } < /button> < /
        a > <
        a href = { 'https://teachablemachine.withgoogle.com/v1/' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-blue border-dark"
        id = "playBtn" > { "Teachable Machine" } < /button> < /
        a > <
        /div> < /
        div > <
        /div> < /
        div > <
        /section> < /
        section >

        <
        div className = 'learningMat' >
        <
        hr > < /hr>

        <
        div className = "activity d-flex" >

        <
        div className = "d-flex flex-column" >
        <
        div >
        <
        img src = { process.env.PUBLIC_URL + "/image/ML1.png" }
        alt = "NA"
        className = "NA" > < /img> < /
        div > <
        div className = "activityContent" >
        <
        p style = {
            { color: 'grey' }
        } > { "Family Playbook" } < /p> < /
        div > <
        /div>

        <
        div className = "d-flex flex-column" >
        <
        div >
        <
        img src = { process.env.PUBLIC_URL + "/image/LM_scavengerHunt_2.png" }
        alt = "NA"
        className = "NA" > < /img> < /
        div > <
        div className = "activityContent" >
        <
        p style = {
            { color: 'grey' }
        } > { "Machine Learning Game" } < /p> < /
        div > <
        /div>

        <
        div className = "d-flex flex-column" >
        <
        div >
        <
        img src = { process.env.PUBLIC_URL + "/image/LM_scavengerHunt_3.png" }
        alt = "NA"
        className = "NA" > < /img> < /
        div > <
        div className = "activityContent" >
        <
        p style = {
            { color: 'grey' }
        } > { "Prediction Game" } < /p> < /
        div > <
        /div>

        <
        div className = "d-flex flex-column col-5" >
        <
        h2 > { "Learning Materials" } < /h2> <
        p > { "Printouts for this activity design" } < /p> <
        br > < /br> <
        div >
        <
        a href = { 'https://docs.google.com/presentation/d/1Z3eoTM8sba0EfcGgmMrIieEtmoGp28NilSJlgLeX71w/edit?usp=sharing' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-blue border-dark"
        id = "downloadBtn" > { "Explore" } < /button> < /
        a > <
        /div> < /
        div > <
        /div> < /
        div >

        <
        div className = "comment" >
        <
        div className = 'd-flex flex-row justify-content-center' >
        <
        div className = 'd-flex flex-column' >
        <
        h2 > { "Share Your Ideas" } < /h2> <
        br > < /br> <
        div >
        <
        div >
        <
        a href = { 'https://forms.gle/uLDjfvcbYwUDrJJ29' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-blue border-dark"
        id = "comBtn" > { "Feedback Form" } < /button> < /
        a > <
        /div> < /
        div > <
        br > < /br> <
        br > < /br> <
        br > < /br> <
        br > < /br> < /
        div > <
        /div> < /
        div > <
        /div>

    );
}

export function ActivityPageDesign(props) {
    return ( <
        div >
        <
        section className = "activityPage" >
        <
        section className = "innerInteractiveCoding" >
        <
        div className = "d-flex" >
        <
        div className = "image" >
        <
        img src = { process.env.PUBLIC_URL + "/image/GamePage_analyzeAi.png" }
        alt = "Design and Analyze AI"
        className = "activityPage" > < /img> < /
        div > <
        div className = "activityTextSection col-5" >
        <
        h2 > { "Design & Program AI" } < /h2> <
        p > { "Think about what is your AI technology like? Is it like an animal or a person? At the end, design your own AI device! Customize your AI with our design toolkit." } < /p> <
        br > < /br> <
        div >
        <
        hr > < /hr> <
        div className = "d-flex justify-content-around" >
        <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apDiff.png" }
        alt = "Difficulty"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "Easy" } < /p> < /
        div > <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apAge.png" }
        alt = "Age Group"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "Ages 6-16" } < /p> < /
        div > <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apTime.png" }
        alt = "Time"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "30-45min" } < /p> < /
        div > <
        /div> <
        hr > < /hr> <
        br > < /br> <
        br > < /br> <
        div className = "d-flex justify-content-around" >
        <
        a href = { 'https://docs.google.com/presentation/d/149TvbRzvrKVUehyhA_iVvPJrFCx_hw5SdDG-kn9nH3g/edit#slide=id.g8a8b0ce9fc_0_466' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-pink border-dark"
        id = "playBtn" > { "Family Playbook" } < /button> < /
        a > <
        a href = { 'www.cognimates.me' } >
        <
        button type = "button"
        className = "btn btn-playground-pink border-dark"
        id = "playBtn" > { "Program Smart Games" } < /button> < /
        a > <
        /div> < /
        div > <
        /div> < /
        div > <
        /section> < /
        section >

        <
        div className = 'learningMat' >
        <
        hr > < /hr>

        <
        div className = "activity d-flex" >

        <
        div className = "d-flex flex-column" >
        <
        div >
        <
        img src = { process.env.PUBLIC_URL + "/image/Design4.png" }
        alt = "NA"
        className = "NA" > < /img> < /
        div > <
        div className = "activityContent" >
        <
        p style = {
            { color: 'grey' }
        } > { "Family Playbook" } < /p> < /
        div > <
        /div>

        <
        div className = "d-flex flex-column" >
        <
        div >
        <
        img src = { process.env.PUBLIC_URL + "/image/Design2.png" }
        alt = "NA"
        className = "NA" > < /img> < /
        div > <
        div className = "activityContent" >
        <
        p style = {
            { color: 'grey' }
        } > { "Analyze AI Worksheet" } < /p> < /
        div > <
        /div>

        <
        div className = "d-flex flex-column" >
        <
        div >
        <
        img src = { process.env.PUBLIC_URL + "/image/Design3.png" }
        alt = "NA"
        className = "NA" > < /img> < /
        div > <
        div className = "activityContent" >
        <
        p style = {
            { color: 'grey' }
        } > { "Program Games" } < /p> < /
        div > <
        /div>

        <
        div className = "d-flex flex-column col-5" >
        <
        h2 > { "Learning Materials" } < /h2> <
        p > { "Printouts for this activity design" } < /p> <
        br > < /br> <
        div > {
            /* <a href={'https://docs.google.com/presentation/d/149TvbRzvrKVUehyhA_iVvPJrFCx_hw5SdDG-kn9nH3g/edit#slide=id.g8a8b0ce9fc_0_466'}>
                                            <button type="button" className="btn btn-playground-pink border-dark" id="downloadBtn">{"Playbook"}</button>
                                        </a> */
        } <
        a href = { 'https://github.com/stefania11/ai_playground/blob/master/public/worksheets/Posters%20AI%20Literacy%20Families.pdf' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-pink border-dark"
        id = "downloadBtn" > { "Printouts" } < /button> < /
        a >

        <
        /div> < /
        div > <
        /div> < /
        div >

        <
        div className = "comment" >
        <
        div className = 'd-flex flex-row justify-content-center' >
        <
        div className = 'd-flex flex-column' >
        <
        h2 > { "Share Your Ideas" } < /h2> <
        br > < /br> <
        div >
        <
        div >
        <
        a href = { 'https://forms.gle/uLDjfvcbYwUDrJJ29' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-pink border-dark"
        id = "comBtn" > { "Feedback Form" } < /button> < /
        a > <
        /div> < /
        div > <
        br > < /br> <
        br > < /br> <
        br > < /br> <
        br > < /br> < /
        div > <
        /div> < /
        div > <
        /div>

    );
}

export function ActivityPageAsk(props) {
    return ( <
        div >
        <
        section className = "activityPage" >
        <
        section className = "innerVoiceAssistants" >
        <
        div className = "d-flex" >
        <
        div className = "image" >
        <
        img src = { process.env.PUBLIC_URL + "/image/GamePage_askAI.png" }
        alt = "Ask AI"
        className = "activityPage" > < /img> < /
        div > <
        div className = "activityTextSection col-5" >
        <
        h2 > { "Ask AI" } < /h2> <
        p > { "Ask the voice assistant and your parents the same questions and compare their responses. Share any surprising responses with others. Draw what is inside your voice assitant and explain how it works. Play a Bing Game with your family & your voice assistant." } < /p> <
        br > < /br> <
        div >
        <
        hr > < /hr> <
        div className = "d-flex justify-content-around" >
        <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apDiff.png" }
        alt = "Difficulty"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "Easy" } < /p> < /
        div > <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apAge.png" }
        alt = "Age Group"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "Ages 6-16" } < /p> < /
        div > <
        div className = "d-flex justify-content-start" >
        <
        img src = { process.env.PUBLIC_URL + "/image/apTime.png" }
        alt = "Time"
        className = "actDesImg" > < /img> <
        p style = {
            { color: 'grey' }
        } > { "25-35min" } < /p> < /
        div > <
        /div> <
        hr > < /hr> <
        br > < /br> <
        br > < /br> <
        div className = "d-flex justify-content-around" >
        <
        a href = { 'https://github.com/stefania11/ai_playground/blob/master/public/worksheets/Who%20Knows%20More.pdf' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-green border-dark"
        id = "playBtn" > { "Who Knows More Game" } < /button> < /
        a > <
        a href = { 'https://github.com/stefania11/ai_playground/blob/master/public/worksheets/BINGO%20GAME.pdf' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-green border-dark"
        id = "playBtn" > { "AI Bingo Game" } < /button> < /
        a > <
        /div> < /
        div > <
        /div> < /
        div > <
        /section> < /
        section > {
            /*
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
                        </div> */
        }

        <
        div className = "comment" >
        <
        div className = 'd-flex flex-row justify-content-center' >
        <
        div className = 'd-flex flex-column' >
        <
        h2 > { "Share Your Ideas" } < /h2> <
        br > < /br> <
        div >
        <
        div >
        <
        a href = { 'https://forms.gle/uLDjfvcbYwUDrJJ29' }
        target = "_blank" >
        <
        button type = "button"
        className = "btn btn-playground-green border-dark"
        id = "comBtn" > { "Feedback Form" } < /button> < /
        a > <
        /div> < /
        div > <
        br > < /br> <
        br > < /br> <
        br > < /br> <
        br > < /br> < /
        div > <
        /div> < /
        div > <
        /div>

    );
}