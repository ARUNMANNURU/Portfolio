import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from '/Users/ArunMannuru/Desktop/ReactPortfolio/react-portfolio/src/images/IMG_6275.jpg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Arun Mannuru</h2>
            <h4><i>Software Developer</i></h4>
            <img
              src={logo}
              alt="avatar"
              style={{height: '200px'}}/>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             A self-motivated programmer with academic coding experience, having experience in Java, J2EE technologies, Object Oriented Programming,mysql,Unix shell scripting , Data structures & algorithms and Design Patterns.
             A team player with good communication skills, fast learner to new technologies and concepts. Willing to contribute skills and enthusiasm to the team.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2><hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (618) 604-6499
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mannuruarun@outlook.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
