import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Task() {
  return (
    <Grid container columns={{ xs: 4, md: 12 }}>
      <Grid item xs={2}>
        <Link to="/">back</Link>
      </Grid>
      <Grid item xs={2}>
        <Typography>delete task</Typography>
      </Grid>
    </Grid>
  );
}

export default Task;
