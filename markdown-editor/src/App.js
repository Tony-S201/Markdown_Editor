/**
 * NPM import
 */
import React, { Component } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { FaAngleRight } from 'react-icons/fa';

/**
 * Local import
 */
import './App.scss';
import { sampleText } from './sampleText';
import Footer from './Footer';
import logo from './markdown-editor.png';


class App extends Component {
  state = {
    text: sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    let text2 = DOMPurify.sanitize(text)
    const __html = marked(text2)
    return { __html }
    }

  render () {
    return (
      <>
        <h1 id="big-title"><img src={logo} alt="logo with text"></img></h1>
        <div id="container">
          <div id="left-side">
            <h1 id="big-titles">Write here</h1>
            <hr></hr>
            <textarea
            onChange={this.handleChange}
            value={this.state.text} 
            />
          </div>
          <div id="middle-side">
            <strong><FaAngleRight /></strong>
          </div>
          <div id="right-side">
            <h1 id="big-titles">Result</h1>
            <hr></hr>
              <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />        
          </div>
        </div>
        <Footer copyright="Copyright© Tony Swierz 2019"/>
      </>
    )
  }
}

/**
 * Export
 */
export default App;
