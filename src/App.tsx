import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './feature/home';
import TaskLayout from './feature/task/task.layout';
import Tasks from './feature/task/tasks';
import Task from './feature/task/task';
import TaskPost from './feature/task/taskPost';
import TaskDelete from './feature/task/taskDelete';
import useStartup from './feature/home/useStartup';

function App() {
  useStartup();
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="tasks" element={<TaskLayout />}>
            <Route index element={<Tasks />} />
            <Route path=":taskId" element={<Task />} />
            <Route path="create" element={<TaskPost />} />
            <Route path="edit/:taskId" element={<TaskPost />} />
            <Route path="delete/:taskId" element={<TaskDelete />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
