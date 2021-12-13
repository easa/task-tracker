import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Task } from './task.type';
import { initTasks } from './task.slice';

function useTasks() {
  const dispatch = useDispatch();
  useEffect(() => {
    const tasks: Task[] = Array<number>(2).fill(1).map<Task>((x, i) => ({
      id: String(x + i),
      title: String(x + i),
      description: `hi this is description for ${i + x}`,
      tags: ['tag 1', 'tag 2'],
      priority: 'low',
    }));
    dispatch(initTasks(tasks));
  }, []);
}

export default useTasks;
