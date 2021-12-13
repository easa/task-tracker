import React, { useMemo } from 'react';
import {
  Button, Typography, Box, TextField, Radio, RadioGroup, FormControl, FormControlLabel, Grid,
} from '@mui/material';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { Task } from '../task.type';
import InputTags from './tags';

type Props = { task?: Task, onSubmit: (data: Task) => void };

const EMPTY_TASK: Task = {
  id: '',
  title: '',
  description: '',
  priority: 'low',
  tags: [],
};

const priorities = ['low', 'mediate', 'high'] as Task['priority'][];

const validationSchema = yup.object({
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

function TaskForm({ task, onSubmit }: Props) {
  const initialValues = useMemo(() => task || EMPTY_TASK, [task]);
  const formik = useFormik<Task>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      // style={{ maxWidth: '500px' }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Grid item>
          {task && <Typography>{task.id}</Typography>}
        </Grid>
        <Grid item>
          <FormControl>
            <TextField
              fullWidth
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <TextField
              fullWidth
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormikProvider value={formik}>
              <FieldArray
                name="tags"
                validateOnChange={false}
                render={(arrayHelpers) => (
                  <InputTags
                    component={(
                      <TextField
                        fullWidth
                        error={formik.touched.tags && Boolean(formik.errors.tags)}
                        helperText={formik.touched.tags && formik.errors.tags}
                      />
                    )}
                    insert={arrayHelpers.insert}
                    remove={arrayHelpers.remove}
                  />
                )}
              />
            </FormikProvider>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            {Boolean(formik.touched.priority)
              && (
                <Typography color="red">
                  {formik.errors.priority}
                </Typography>
              )}
            <RadioGroup>
              {priorities.map((i) => (
                <FormControlLabel
                  checked={formik.values.priority === i}
                  control={<Radio />}
                  value={`${i}`}
                  name="priority"
                  label={i}
                  onChange={formik.handleChange}
                  key={i}
                />
              ))}
            </RadioGroup>
            {Boolean(formik.touched.priority)
              && (
                <Typography color="red">
                  {formik.errors.priority}
                </Typography>
              )}
          </FormControl>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained" fullWidth type="submit">
            add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

TaskForm.defaultProps = { task: undefined };

export default TaskForm;
