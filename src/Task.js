import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    border: '1px solid red',
    margin: 10,
  },
};

class Task extends React.Component {
  render() {
    const {classes, task} = this.props;

    return (
      <div className={classes.container}>
        {task.content}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Task);
