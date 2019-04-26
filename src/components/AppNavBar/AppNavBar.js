import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
//import ToolBar from "@material-ui/core/Toolbar";
import logo from "../../images/logo.jpeg";
import Paper from "@material-ui/core/Paper";
import RecipeReviewCard from '../content/content'
function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
  
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    
  },
});

class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
   return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Paper>
          <div className = {classes.logo} theme={theme}> 
            <img src= {logo} alt="logo" name = "logo" height="35" width="35" />
              puppie to the rescue
           </div>
         
            <Tabs
              onChange={this.handleChange}
              value={this.state.value}
              indicatorColor="primary"
              textColor="primary"
              centered
              
            >


              <Tab label="Recents Posts" />
              <Tab label="Rescued Dogs" />
              <Tab label="Lost dogs" />
            </Tabs>
          </Paper>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            Recents Posts
          <RecipeReviewCard/>
          </TabContainer>
          <TabContainer dir={theme.direction}>Rescued Dogs</TabContainer>
          <TabContainer dir={theme.direction}>Lost dogs </TabContainer>
        </SwipeableViews>
        
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(
  FloatingActionButtonZoom
);
