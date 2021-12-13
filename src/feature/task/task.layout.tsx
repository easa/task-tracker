/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';

function TaskLayout() {
  return (
    <Container maxWidth="sm">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4}>
          <Button component={Link} to="../">home</Button>
          <Button component={Link} to="./">tasks</Button>
        </Grid>

        <Grid item xs={4}>
          <Outlet />
        </Grid>

      </Grid>
    </Container>
  );
}

export default TaskLayout;
