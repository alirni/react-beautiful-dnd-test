import React from 'react';
import { withStyles } from '@material-ui/core';
import Task from "./Task";

const styles = {
  container: {
    border: '1px solid red',
    margin: 10,
  },
  taskList: {
    border: '1px solid blue',
    margin: 10,
    padding: 10,
  }
};

class Column extends React.Component {
  render() {
    const {classes, column, tasks} = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.title}>
          {column.title}
        </div>
        <div className={classes.taskList}>
          {tasks.map( task => <Task key={task.id} task={task} />)}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Column);
