import * as yup from 'yup';
import { Task } from '../task.type';

export const EMPTY_TASK: Task = {
  id: '',
  title: '',
  description: '',
  priority: 'low',
  tags: [],
};

export const priorities = ['low', 'mediate', 'high'] as Task['priority'][];

export const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(1)
    .required('Email is required'),
  description: yup
    .string()
    .min(8, 'description should be of minimum 8 characters length'),
  tags: yup
    .array()
    .of(yup.string())
    .nullable(),
  priority: yup
    .mixed()
    .oneOf(priorities)
    .defined(),
});
