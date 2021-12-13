import React, { Fragment } from 'react';
import { Box, Chip, Stack } from '@mui/material';

function Tag({ tags, handleDelete }: {
  tags: string[];
  handleDelete: (text: string) => () => void
}) {
  return (
    <Box sx={{ margin: '0 0.1rem 0 0', display: 'flex' }}>
      <Stack direction="row" gap={0.2}>
        {tags.map((data, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={data + i}>
            <Chip
              label={data}
              variant="outlined"
              onDelete={handleDelete(data)}
            />
          </Fragment>
        ))}
      </Stack>
    </Box>
  );
}

export default Tag;
