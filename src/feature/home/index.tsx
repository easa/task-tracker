import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCurrent } from 'feature/task/task.slice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCreateTask = () => {
    dispatch(loadCurrent());
    navigate('/tasks/create');
  };
  return (
    <Container maxWidth="sm">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={2}>
          <Button onClick={handleCreateTask}>create new task</Button>
          <Button component={Link} to="/tasks">tasks list</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
