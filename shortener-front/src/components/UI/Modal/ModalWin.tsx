import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

interface Props extends React.PropsWithChildren {
  show: boolean;
  onClose: React.MouseEventHandler;
  onStopRedirect: React.MouseEventHandler;
}

const ModalWin: React.FC<Props> = ({show, onClose, onStopRedirect}) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={show}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Вы действительно желаете перейти на другой сайт?
          </Typography>
          <Button onClick={onClose}>ДА</Button>
          <Button onClick={onStopRedirect}>НЕТ</Button>
        </Box>
      </Modal>
    </>
  );
};


export default ModalWin;
