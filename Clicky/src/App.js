import React, { Component} from "react";
import scoob from "./scoob.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import Scoreboard from "../../../React-Clicky-Game/src/components/Scoreboard";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    scoob,
    score: 0,
    highScore: 0,
    success: true,
    clickedscoob []
  };

  clickedImg = id => {
    let clickedscoob= this.state.clickedscoob
    let score = this.state.score;
    let highScore = this.state.highScore;
    this.setState({
      alert: 0
    });


    if (clickedscoobindexOf(id) === -1) {
      clickedscoobpush(id);
      console.log(clickedscoob;

      this.changeScore();

      this.scoobhuffle();
    } else if (this.state.score === 12) {
      this.setState({
        success: 1,
        score: 0,
        clickedscoob []
      });
    } else {
      this.setState({
        score: 0,
        clickedscoob []
      });
      console.log("duplicate");
      this.setState({
        alert: 1
      });
    }

    if (score > highScore) {
      this.setState({
        highScore: score
      });
    }
  };

  changeScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  scoobhuffle = () => {
    this.setState({ scoob: shuffle(scoob) });
  };

  render() {
    return (
      <div>
          <Nav
          success={this.state.success}
          score={this.state.score}
          highScore={this.state.highScore} />
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }

}




export default App;
