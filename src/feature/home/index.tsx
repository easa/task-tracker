import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadCurrent } from 'feature/task/task.slice';
import TaskPost from 'feature/task/taskPost';
import { Modal, useModal } from './modal';

function Home() {
  const dispatch = useDispatch();
  const { isOpen, handleOpen, handleClose } = useModal();
  const handleCreateTask = () => {
    dispatch(loadCurrent());
    handleOpen();
  };
  return (
    <Container maxWidth="sm">
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={2}>
          <Button onClick={handleCreateTask}>create new task</Button>
          <Button component={Link} to="/tasks">tasks list</Button>
        </Grid>
      </Grid>
      <Modal open={isOpen} onClose={handleClose}>
        <TaskPost />
      </Modal>
    </Container>
  );
}

export default Home;
