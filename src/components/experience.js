import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <h5 style={{marginTop:'0px'}}>{this.props.jobName}</h5>
          <h6 style={{marginTop:'0px'}}><i>{this.props.companyName}</i></h6>
          <p>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={4}>
          <p><i>{this.props.startMonth}{this.props.startYear} - {this.props.endMonth}{this.props.endYear}</i></p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
