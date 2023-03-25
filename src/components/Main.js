import PropTypes from 'prop-types'
import React from 'react'
import algoPic from '../images/algorithms.jpg'
import javaAlgoPic from '../images/java-algo.jpg'
import apiPic from '../images/api-pic.jpg'
import pic01 from '../images/pluggedIn.png'
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
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>Node API Generator</h3>
          <p>
            This is a template to quickly bootstrap a new backend cloud service
            written in Typescript using Routing Controllers, TypeORM, and
            Postgres.
          </p>
          <a
            className="redirectButton"
            href="https://github.com/tomplucinski/node-api-generator"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
          <span className="image main">
            <img src={apiPic} alt="algorithms" />
          </span>

          <h3>Typescript Algorithms</h3>
          <p>
            Repository containing algorithms and data structure implementations
            written in Typescript
          </p>
          <a
            className="redirectButton"
            href="https://github.com/tomplucinski/algorithms_v2"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
          <span className="image main">
            <img src={algoPic} alt="algorithms" />
          </span>

          <h3>Java Algorithms</h3>
          <p>
            Repository containing algorithms and data structure implementations
            written in Java
          </p>
          <a
            className="redirectButton"
            href="https://github.com/tomplucinski/Algorithms"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
          <span className="image main">
            <img src={javaAlgoPic} alt="algorithms" />
          </span>

          <h3>PluggedIn</h3>
          <p>
            PluggedIn is a social networking tool designed for developers. Key
            features include profile creation, connecting with others in your
            network, writing, commenting, and liking posts. Web and mobile
            friendly. Developed with React, Redux, Express, Mongoose, and
            MongoDB.
          </p>
          <a
            className="redirectButton"
            href="https://github.com/tomplucinski/PluggedIN"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
          <span className="image main">
            <img src={pic01} alt="pluggedIn" />
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
          <h2 className="major aboutSection">About Tom</h2>
          <div className="profilePicContainer">
            <img
              src={profilePic}
              alt="profile_picture"
              className="profileImg"
            />
          </div>
          <p>
            Full stack software engineer with a focus on backend development.
            Extensive experience developing IoT and cloud services, integrating
            systems, and building applications that streamline and support
            business capabilities. Proven track record of leading small teams
            and delivering crucial business applications.
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
