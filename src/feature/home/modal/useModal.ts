import { useState } from 'react';

function useModal() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    isOpen,
    handleOpen,
    handleClose,
  };
}

export default useModal;
