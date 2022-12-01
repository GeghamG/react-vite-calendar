import React from 'react';
import PropTypes from 'prop-types'
import MUIModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import { useStyles } from './styles';

const Modal = ({ children, isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <MUIModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className={classes.container}>
        {children}
        </Box>
      </MUIModal>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => { },
}

export default Modal
