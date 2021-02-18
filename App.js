import React, { Component } from "react";
import "./App.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar" style={{ borderBottom: "1px solid black" }}>
        <h1 className="title">Dogs and Cats</h1>
      </nav>
    );
  }
}

class TopPara extends Component {
  render() {
    return (
      <div className="top">
        <div className="image-one">
          <img
            src="https://placedog.net/300/250"
            alt="Random dog image"
            style={{ margin: "10px 5px" }}
          />
          <img
            src="https://placekitten.com/300/250"
            alt="Random cat image"
            style={{ margin: "10px 5px" }}
          />
        </div>
        <p className="top-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>
    );
  }
}

class BottomPara extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="image-two">
          <img src="https://placekitten.com/500" alt="Random cat image" />
        </div>
        <p className="bottom-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
      </div>
    );
  }
}

class AnimalForm extends Component {
  render() {
    return (
      <div className="animalinator">
        <h3>"What's your favorite animal?"</h3>
        <form className="animal-form" action="" method="">
          <label htmlFor="animal">Type your favorite animal here...</label>
          <input type="text" id="animal" />
          <button>Submit</button>
        </form>
        <div className="answer">
          <h4 className="animal-display"></h4>
        </div>
      </div>
    );
  }
}

class MainBody extends Component {
  render() {
    return (
      <div className="main-body">
        <TopPara />
        <BottomPara />
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={{ borderTop: "1px solid black" }}>
        <p>A production of Raining Cats and Dogs</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainBody />
        <AnimalForm />
        <Footer />
      </div>
    );
  }
}

export default App;