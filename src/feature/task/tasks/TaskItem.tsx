import React from 'react';
import {
  Avatar, Box, Button, ButtonGroup, Grid, Paper, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Task } from '../task.type';

function TaskComponent({ task }: { task: Task }) {
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
            <Typography variant="h4" component={Link} to={`${task.id}`}>{task.title}</Typography>
            <Typography noWrap>{task.description}</Typography>
          </Grid>
          <Grid item>
            <ButtonGroup variant="outlined" aria-label="outlined secondary button group" size="small">
              <Button component={Link} to={`edit/${task.id}`}>🖊</Button>
              <Button component={Link} to={`delete/${task.id}`}>🗑</Button>
            </ButtonGroup>
            <div>
              {task.tags.join(', ')}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>

  );
}

export default TaskComponent;
