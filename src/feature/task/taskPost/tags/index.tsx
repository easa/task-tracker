import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';
import Tags from './Tags';

function InputTags({
  component, insert, remove,
}: {
  component: JSX.Element;
  insert: (index: number, text: string) => void;
  remove: (index: number) => void;
}) {
  const [tags, setTags] = useState<string[]>([]);
  const tagRef = useRef<HTMLInputElement>();

  const handleDelete = (text: string) => () => {
    const idx = tags.findIndex((val) => val === text);
    const newTags = tags.filter((val) => val !== text);
    setTags(newTags);
    remove(idx);
  };
  const handleOnSubmit = () => (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.preventDefault();
      if (tagRef?.current) {
        const tag = tagRef.current.value;
        setTags((prev) => {
          if (prev.find((t) => t === tag)) {
            return prev;
          }
          const idx = prev.length;
          insert(idx, tag);
          return [...prev, tag];
        });
        tagRef.current.value = '';
      }
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {React.cloneElement(component, {
        autoComplete: 'off',
        onKeyDown: handleOnSubmit(),
        placeholder: tags.length < 5 ? 'Enter tags' : '',
        inputRef: tagRef,
        InputProps: {
          startAdornment: (
            <Tags tags={tags} handleDelete={handleDelete} />
          ),
        },
      })}
    </Box>
  );
}

export default InputTags;
