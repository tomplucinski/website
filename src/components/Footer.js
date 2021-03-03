import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Tom Plucinski | 2021. Built with: <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
