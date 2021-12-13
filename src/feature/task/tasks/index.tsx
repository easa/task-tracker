import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import TaskComponent from './TaskItem';
import { selectTasks } from '../task.slice';

function TasksList() {
  const tasks = useSelector(selectTasks);
  return (
    <Container maxWidth="sm">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4} md={12}>
          <Typography>list of tasks</Typography>
        </Grid>
        {tasks.map((task) => <TaskComponent task={task} />)}
      </Grid>
    </Container>
  );
}

export default TasksList;
