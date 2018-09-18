import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from '/Users/ArunMannuru/Desktop/ReactPortfolio/react-portfolio/src/images/IMG_6275.jpg'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={logo} alt="avatar" style={{height: '175px',border: '1px',solid: '#ddd',padding: '5px',borderRadius:'4px'}}/>
            </div>
            <h4 style={{textAlign: 'center',paddingTop:'0px'}}>Arun Mannuru</h4>
            <h6 style={{color: 'grey',textAlign: 'center'}}>Software Developer</h6>
            <hr style={{borderTop: '2px solid #833fb2', width: 'automated', borderAlign:'center'}}/>
            <p>
            <span>A self-motivated programmer with academic coding experience, having experience in Java, J2EE technologies, Object Oriented Programming,mysql,Unix shell scripting , Data structures & algorithms and Design Patterns.
            A team player with good communication skills, fast learner to new technologies and concepts. Willing to contribute skills and enthusiasm to the team.</span>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: 'automated',boarderAlign:'center'}}/>
            <h5><b>Address</b></h5>
            1261 Lakeside Drive <br/> Sunnyvale, CA 94085<br/>
            <b>Ph#</b>(618)604-6499<br/>
            <b>Email:</b>mannuruarun@outlook.com<br/>
            <b>Web:</b>www.arunmannuru.com<br/>
            <hr style={{borderTop: '3px solid #833fb2', width: 'automated'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h4>Accomplishments</h4>
            <ul>
              <li>AWS Certified associate developer.</li>
              <li>Google Cloud Training and Certification.</li>
              <li>Appreciation in ABinBEV NYC Hackathon contest - out of 10 teams.</li>
              <li>Awarded a grade of 10 in all Mathematics courses.</li>
            </ul>
          <hr style={{borderTop: '3px solid #e22947'}} />
            <h4>Education</h4>

            <Education
                 startYear={2014}
                 endYear={2016}
                 majorDegree="Master of Sciences, Computer Science"
                 schoolName="Fairleigh Dickinson University"
                 schoolDescription="Teaneck,New Jersey"
                 schoolCourses="Relevant Courses:"
                 courses="&nbsp;Database Management Systems,Java Programming, Unix Shell Scripting,Advanced Databases,Web programming,C++,Computer Algorithms"
                 />

            <Education
              startYear={2009}
              endYear={2013}
              majorDegree="Bachelor of Technology, Computer Science"
              schoolName="Yogi Veman University"
              schoolDescription="Andhra Pradesh,India"/>

            <hr style={{borderTop: '3px solid #e22947'}} />

              <h4>Experience</h4>
              <Experience startMonth="March" startYear={2018} endMonth="Present" companyName="Apple Inc" jobName="Java Developer"/>
              <ul>
                <li>Developing back-end of application using Java Spring framework for Radar 2.0 application.</li>
                <li>Using Oracle stored procedures to migrate database to cassandra databases.</li>
                <li>Writing automated test scripts using Curl and Unix.</li>
                <li>Developing Restful web services using Jersey Implementation to expose the APIs.</li>
              </ul>
              <Experience startMonth="March" startYear={2017} endMonth="Febrauary" endYear={2018} companyName="Farbinder Inc" jobName="Full-Stack Java Developer"/>
              <ul>
              <li>Developing native web, Android applications for Farbinder.</li>
              <li>Using React Native to design UI screens for the Android application.</li>
              <li>Developing several Restful web services supporting JSON to perform tasks.</li>
              <li>Restful web services leveraged by both web and mobile applications.</li>
            </ul>
            <Experience startMonth="June" startYear={2016} endMonth="Febrauary" endYear={2017} companyName="StellarSoftware Networks" jobName="Software Analyst"/>
            <ul>
              <li>Developed the backend and RESTful APIs in Spring Java for the feature release of AcrisWeb website.</li>
              <li>Upgraded the front end of application using Angular2.0,TypeScript,HTML5,CSS3.</li>
              <li>Lead a team of five members as the portal owner and was responsible for requirement gathering, technical
              decisions and task assignments.</li>
            </ul>
            <Experience startMonth="January" startYear={2016} endMonth="May" endYear={2016} companyName="Fairleigh Dickinson University" jobName="Graduate Research Assistant"/>
            <ul>
              <li>Assisted professor to generate an algorithm using Java for research on Breadth First search on maze threading.</li>
              <li>Modified existing algorithm to get optimal results, adapt to new hardware and improve performance.</li>
              <li>Designed and Developed transactional and analytical data structures.</li>
            </ul>
            <Experience startMonth="December" startYear={2014} endMonth="November" endYear={2017} companyName="Fairleigh Dickinson University" jobName="Software Engineer"/>
            <ul>
              <li>As a member of five-person team, conceptualized framework for predictive waste water management system.</li>
              <li>Developed High-Level Documents for Data Analysis RAD using UML diagrams.</li>
              <li>Reviewed and approved all engineering, product and project scope documents prior to delivery.</li>
              <li>Assessed costs and risks associated with developing new features and products.</li>
            </ul>
            <Experience startMonth="June" startYear={2013} endMonth="July" endYear={2013} companyName="Edge Network Pvt Ltd" jobName="Software Developer"/>
            <ul>
              <li>Designed a web application using JavaScript,HTML5, CSS3, Bootstrap front-end technologies.</li>
              <li>Implemented Jersey web services for communicating using JSON.</li>
              <li>Involved in bug fixes, enhancements and code refactoring and used GIT for version control.</li>
              <li>Developed code in effective way by applying code optimization techniques, and providing security for SQL
              injections.</li>
            </ul>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={100}/>
              <Skills
                skill="HTML/CSS"
                progress={80}/>
              <Skills
                skill="NodeJS"
                progress={50}/>
            <Skills
                skill="React"
                progress={25}/>
              </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
