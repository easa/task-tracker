import React from 'react';
import { Grid, Typography } from '@mui/material';

function Task() {
  return (
    <Grid container columns={{ xs: 4, md: 12 }}>
      <Grid item xs={2}>
        <Typography>delete task</Typography>
      </Grid>
    </Grid>
  );
}

export default Task;
