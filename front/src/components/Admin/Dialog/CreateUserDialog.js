import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreateIcon from '@material-ui/icons/Create';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { roleSelectMenu } from '../../../__fixture__/select_data';
// import { userTemplate } from '../../../__fixture__/data_template';

const useStyles = makeStyles(() => ({
  dialogContentRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 12,
  },
  dialogContentLeft: {
    width: 150,
  },
  dialogTextField: {
    width: 150,
    '& input': {
      padding: '6.5px 5px',
    },
  },
}));

const UserCardDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [roleSelect, setRoleSelect] = useState('MEMBER');
  // const [newUser, setNewUser] = useState(userTemplate);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  const handleRoleChange = ({ target }) => {
    setRoleSelect(target.value);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <CreateIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          새로운 유저 생성
        </DialogTitle>
        <DialogContent>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>사용자아이디</Box>
            <TextField className={classes.dialogTextField} variant="outlined" />
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>사용자명</Box>
            <TextField className={classes.dialogTextField} variant="outlined" />
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>비밀번호</Box>
            <TextField className={classes.dialogTextField} variant="outlined" />
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>권한</Box>
            <TextField
              className={classes.dialogTextField}
              select
              value={roleSelect}
              onChange={handleRoleChange}
            >
              {roleSelectMenu.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            취소
          </Button>
          <Button onClick={handleSave} color="primary">
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserCardDialog;
