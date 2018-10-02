import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {


      if(this.state.activeTab === 0){
        return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Library Guide</CardTitle>
            <CardActions border>
             <a href="https://github.com/ARUNMANNURU/MSULibraryGuideApp.git" rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>Portfolio App
          </CardTitle>
            <CardActions border>
              <a href="https://github.com/ARUNMANNURU/Portfolio.git" rel="noopener noreferrer" target="_blank">
              GitHub
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
        )
    } else if(this.state.activeTab === 1) {
      return (
        <div class="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Thread Application Using Window Builder</CardTitle>
          <CardActions border>
            <a href="https://github.com/ARUNMANNURU/ThreadApplication.git" rel="noopener noreferrer" target="_blank">
            GitHub
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Messenger App</CardTitle>
          <CardActions border>
            <a href="https://github.com/ARUNMANNURU/MessangerApp.git" rel="noopener noreferrer" target="_blank">GitHub</a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >TimeSheet App</CardTitle>
          <CardActions border>
            <a href="https://github.com/ARUNMANNURU/Time-Sheet-Application.git" rel="noopener noreferrer" target="_blank">GitHub</a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Todo Application</CardTitle>
          <CardActions border>
            <a href="https://github.com/ARUNMANNURU/SimpleToDo.git " rel="noopener noreferrer" target="_blank">GitHub</a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Bowling Script</CardTitle>
          <CardActions border>
            <a href="https://github.com/ARUNMANNURU/Live-Bowling-Board-using-Unix-Shell-Scripting.git" rel="noopener noreferrer" target="_blank">GitHub</a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JAVA</Tab>
          <Tab>Android</Tab>
          <Tab>Unix Shell Script</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
   )
  }
}
export default Projects;
