import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Tom Plucinski</h1>
        <h2>Software Engineer</h2>
        <ul className="icons">
            <li>
              <a
                href="https://github.com/tomplucinski" target="_github" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/thomasplucinski" target="_linkedin" className="icon fa-linkedin">
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tompojones" target="_twitter" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="mailto:tapluci1@gmail.com" target="_email" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
      </div>
    </div>
    <nav>
      <ul>
      <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
