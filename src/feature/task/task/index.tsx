import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrent, selectCurrentTask } from '../task.slice';
import TaskItem from './task.item';

function Task() {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (taskId) {
      dispatch(loadCurrent(taskId));
    }
  }, [taskId]);
  const task = useSelector(selectCurrentTask);
  return (
    <Grid container columns={{ xs: 4, md: 12 }}>
      <Grid item xs={2}>
        <Typography>task view</Typography>
      </Grid>
      <Grid item xs={4}>
        {task && <TaskItem task={task} />}
        {!task && <Typography>task not found</Typography>}
      </Grid>
    </Grid>
  );
}

export default Task;
