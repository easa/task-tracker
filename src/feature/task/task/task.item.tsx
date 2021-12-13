import React from 'react';
import {
  Grid, Typography, Avatar, Box, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Task } from '../task.type';

function TaskItem({ task }: { task: Task }) {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} key={task.id}>
      <Paper sx={{
        maxWidth: 400, my: 1, mx: 'auto', p: 2,
      }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{task.title}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h4">{task.title}</Typography>
          </Grid>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography>{task.description}</Typography>
        </Grid>
        <Grid item>
          {task.tags.map((tag) => (<Typography variant="caption">{tag}</Typography>))}
        </Grid>
        <Grid item>
          {['edit', 'delete'].map((i) => (
            <Typography variant="caption" component={Link} to={`../${i}/${task.id}`}>{i}</Typography>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default TaskItem;
