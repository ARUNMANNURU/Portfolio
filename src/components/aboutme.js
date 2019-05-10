import React, { Component } from 'react';
import logo from './IMG_6275.jpg'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
  render() {
    return(
    	<div>
    	 <Grid className="aboutme-grid">
    	<Cell col={6}>
      <img
              src={logo}
              alt="avatar"
              className="avatar-img-aboutme"/>
    	  </Cell>
      	<Cell col={6}>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            	     <h5>WHO I AM</h5><hr/>
                    I’m an avid programmer, passionate about code, design, startups and technology. I like science, travelling and films.
                  </p>
                  <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                     <h5>WORK</h5><hr/>
                      I'm working as Full Stack Java Developer at Apple Inc.
                  </p>
                  <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                     <h5>MENTORING</h5><hr/>
                      I'm also a mentor on SDE SKILLS where I either teach algorithms and data structures or I help users debug, fix and refactor their code.
                  </p>
                  <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                     <h5>FREE TIME</h5><hr/>
                     In my free time I watch netflix tv shows, read, play games and participate in contests, conferences or hackathons.
                  </p>
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
export default About;
