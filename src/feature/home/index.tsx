import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="sm">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={2}>
          <Button component={Link} to="/tasks/create">create new task</Button>
          <Button component={Link} to="/tasks">tasks list</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
