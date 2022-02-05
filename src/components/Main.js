import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pluggedIn.png'
import pic04 from '../images/pic04.jpg'
import profilePic from '../images/profile.jpg'
import '../assets/scss/components/_projectButtons.scss'
import './Main.css'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3>PluggedIn</h3>
          <p>PluggedIn is a social networking tool designed for developers. Key features include profile creation, connecting with others in your network, writing,
            commenting, and liking posts. Web and mobile friendly. Developed with React, Redux, Express, Mongoose, MongoDB, Firebase, and deployed via Heroku.</p>
          <a className="redirectButton" href="http://stormy-inlet-04172.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          <a className="redirectButton" href="https://github.com/tomplucinski/PluggedIN" target="_blank" rel="noreferrer">View Code</a>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>Cheer</h3>
          <p>Cheer is a web application that provides employers with an easy way to gather employee feedback in the workplace.
            Employees respond to daily questions in Slack and their answers are passed through IBM Watson’s Natural Language Understanding API
            to identify the emotions and sentiment. This data is then visualized in a dashboard for managers and leadership to evaluate.
            Engineered with React, Redux, GraphQL, and MongoDB.</p>
          <a className="redirectButton" href="https://github.com/tomplucinski/cheer" target="_blank" rel="noreferrer">View Code</a>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major aboutSection">About Tom</h2>
          <div className='profilePicContainer'>
            <img src={profilePic} className='profileImg' />
          </div>
          <p>
            I am a full stack software engineer specializing in node.js, react, and azure. I have extensive
            experience developing scalable cloud native and IoT applications deployed to thousands of devices,
            implementing cloud architecture solutions, and leading feature development using agile methodologies.
            I firmly believe in understanding the business domain and selecting the most efficient tools when
            implementing solutions.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
