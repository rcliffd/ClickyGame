import React, { Component } from "react";
import MemeCard from "./Meme";
import memes from "../../memes.json"
import "./main.css";

// function Main(props) {
//     return <div className="container">{props.children}</div>
// }



  
class Main extends Component {
    state = {
        memes
    };

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    clickedMeme = id => {
        const memes = this.state.memes.filter(meme => meme.id !== id);
        this.setState({ memes });
    };

    render() {
        return (
            <main className="container main-sect">
                {this.state.memes.map(meme => (
                    <MemeCard
                        clickedMeme={this.clickedMeme}
                        url={meme.url}
                        id={meme.url}
                        title={meme.title}
                    /> 
                ))}
            </main>
        );
    }
}


export default Main

