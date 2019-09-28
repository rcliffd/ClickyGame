import React from "react";
import "./meme.css";

const MemeCard = props => (
    <div className="card click-item shake" onClick={() => props.clickedMeme(props.id)}>
        <div className="img-container">
            <img alt={ props.title } src={ props.url } className="img-fluid" />
        </div>
    </div>
)

export default MemeCard

// image must have a clicked and unclicked state
    // if unclicked image is clicked it must
        //  1. rearrange images
        //  2. post correct message
        //  3. add to current score
    
    // if clicked image is clicked it must
        //  1. shake images
        //  2. rearrange images
        //  3. post incorrect message
        //  4. reset current score

    // Score
        // 1. must keep highest score posted
        // 2. cannot go over 12