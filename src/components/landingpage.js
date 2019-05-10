import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './IMG_6275.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <img  src={logo}
                    alt="avatar"
                    className="avatar-img"/>

            <div className="banner-text">
              <h1>Full Stack Java Developer</h1>
            <hr/>
            <p align="center">JAVA | HTML/CSS | Bootstrap | JavaScript | React | Azure | SpringBoot | Oracle | Cassandra</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/arunmannuru" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://www.github.com/arunmannuru" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/arunm057" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/arun_mannuru" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
    </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
