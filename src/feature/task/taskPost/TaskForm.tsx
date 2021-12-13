import React, { useCallback, useEffect } from 'react';
import {
  Button, Typography, Box, TextField, Radio, RadioGroup, FormControl, FormControlLabel, Grid,
} from '@mui/material';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { Task } from '../task.type';
import InputTags from './tags';
import { validationSchema, EMPTY_TASK, priorities } from './taskForm.validations';

type Props = { task?: Task, onSubmit: (data: Task) => void };

function TaskForm({ task, onSubmit }: Props) {
  const formik = useFormik<Task>({
    initialValues: EMPTY_TASK,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (task) {
      Object.keys(task).forEach((i) => {
        const key = i as keyof Task;
        formik.setFieldValue(i, task[key]);
      });
    }
  }, [task]);

  const setInitialTags = useCallback((callback) => {
    callback(task?.tags);
  }, [task]);

  return (
    <FormikProvider value={formik}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        style={{ maxWidth: '500px' }}
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
                    initiate={setInitialTags}
                    insert={arrayHelpers.insert}
                    remove={arrayHelpers.remove}
                  />
                )}
              />
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
              <RadioGroup aria-label="anonymous" name="anonymous" value={false} row>
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
              {task?.id ? 'edit' : 'add'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormikProvider>
  );
}

TaskForm.defaultProps = { task: undefined };

export default TaskForm;
