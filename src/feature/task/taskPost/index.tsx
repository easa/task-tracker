import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask, editTask, loadCurrent, selectCurrentTask,
} from '../task.slice';
import { Task } from '../task.type';
import TaskForm from './TaskForm';

function TaskPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const task = useSelector(selectCurrentTask);
  const [formState, setFormState] = useState<Task>();

  useEffect(() => {
    if (taskId) {
      dispatch(loadCurrent(taskId));
    }
  }, [taskId]);

  useEffect(() => {
    setFormState(task);
  }, [taskId, task]);

  const submitData = (data: Task) => {
    if (data.id) {
      dispatch(editTask(data));
    } else {
      // eslint-disable-next-line no-param-reassign
      data.id = String(Math.random());
      dispatch(addTask(data));
    }
    navigate('../');
  };
  return (
    <Grid container columns={{ xs: 4, md: 12 }}>
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
