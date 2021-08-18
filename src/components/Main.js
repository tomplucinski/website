import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pluggedIn.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import '../assets/scss/components/_projectButtons.scss'

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
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
          <h3>Travel Buddy</h3>
          <p>Travel Buddy is an Android Native application that allows users to obtain information about travel destinations.
            Users can input origin and destination locations and receive information about flights, weather, and things to do for entertainment.
            This application is designed in Android Studio and developed with Kotlin. API's and broken up into microservices.<br/>
            <strong><a href="https://github.com/tomplucinski/TravelBuddyFlightAPI" target="_blank" rel="noreferrer">Travel Buddy Flight API.</a></strong>
          </p>
          <a className="redirectButton" href="https://github.com/tomplucinski/TravelBuddy" target="_blank" rel="noreferrer">View Code</a>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>Canvas Collect</h3>
          <p>Canvas Collect is an eCommerce application for people looking to buy and sell their artwork online. Features include creating profiles,
            searching for products by name or category, writing reviews, purchase history, and checkout. This is an iOS native application built with Xcode and Swift
            utilizing Firebase for profile creation, authentication, and database services.</p>
          <a className="redirectButton" href="https://github.com/tomplucinski/CanvasCollect" target="_blank" rel="noreferrer">View Code</a>
          <span className="image main">
            <img src={pic03} alt="" />
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
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>Hello, my name is Tom and I'm a Software Engineer from Chicago, IL. I have experience working in the health care and advertisement industries where I get to engineer
          IoT applications. I am a generalist by trade, meaning I work across the entire software stack including the database, API, and UI layers.
          I have experience with project inception, architecture, feature development, testing, documentation, and deployment in a distributed environment.
          Passionate about writing great software, implementing new technologies, learning, and collaborating.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'technology' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Technology</h2>
          <p>I am proficient in Javascript and Java. Below are some of the libraries, frameworks, and tools I have experience working with.</p>
          <h4>Back End</h4>
          <p>Node, Express.js, Spring, NoSQL, SQL</p>
          <h4>Front End</h4>
          <p>React, Redux, Angular, HTML, CSS</p>
          <h4>Deployment / Build Tools</h4>
          <p>Docker, Azure, IoT Edge</p>
          <h4>Testing</h4>
          <p>Jest, Cypress, Enzyme, JUnit, Mockito, Cucumber</p>
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
