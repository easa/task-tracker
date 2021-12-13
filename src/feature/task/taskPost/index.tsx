import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentTask } from '../task.slice';
import { Task } from '../task.type';
import TaskForm from './TaskForm';

function TaskPost() {
  const { taskId } = useParams();
  const task = useSelector(selectCurrentTask);
  const [formState, setFormState] = useState<Task>();
  useEffect(() => {
    setFormState(task);
  }, [taskId]);
  const submitData = (data: Task) => {
    alert(JSON.stringify(data));
  };
  return (
    <Grid container columns={{ xs: 4, md: 12 }}>
      <Grid item xs={2}>
        <Link to="/">back</Link>
      </Grid>

      <Grid item xs={2}>
        {taskId
          && (
            <Typography>
              edit task :
              {taskId}
            </Typography>
          )}
        {
          !taskId
          && <Typography>add a new task</Typography>
        }
      </Grid>
      <Grid item xs={4}>
        <TaskForm task={formState} onSubmit={submitData} />
      </Grid>
    </Grid>
  );
}

export default TaskPost;
