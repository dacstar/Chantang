import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const UserCardDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AccountBalanceWalletIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          dialog-title
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            content-text
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave} color="primary">
            save
          </Button>
          <Button onClick={handleClose} color="secondary">
            cancer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserCardDialog;
