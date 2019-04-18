import React, { Component } from "react";
import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import Input from "./Input";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWord} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWord, secretWord } = state;
  return { success, guessedWord, secretWord };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);
