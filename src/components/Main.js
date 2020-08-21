import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/workpic.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/work1.jpg'
import pic05 from '../images/work2.jpg'
import pic06 from '../images/work3.jpg'

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
            <h3><a href="http://stormy-inlet-04172.herokuapp.com/" target="_blank">PluggedIn</a></h3>
              <span className="image main">
                <img src={pic02} alt="" />
              </span>
          <h3>Travel Buddy</h3>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <h3>Canvas Collect</h3>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <h3>Cheer</h3>
          <span className="image main">
            <img src={pic06} alt="" />
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
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
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
