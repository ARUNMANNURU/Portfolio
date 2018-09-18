import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
      <Cell col={8}>
        <h5 style={{marginTop:'0px'}}>{this.props.majorDegree}</h5>
        <h6 style={{marginTop:'0px'}}>{this.props.schoolName}</h6>
          <p><i>{this.props.schoolDescription}</i></p>
        <h7 style={{marginTop:'0px'}}><u>{this.props.schoolCourses}</u></h7>
          <span>{this.props.courses}</span>
      </Cell>
        <Cell col={4}>
              <p><i>{this.props.startMonth}{this.props.startYear} - {this.props.endMonth}{this.props.endYear}</i></p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
