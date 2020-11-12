import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import { themeTypeSelectMenu, serviceAreaSelectMenu } from '../../../__fixture__/select_data';
// import { boardTemplate } from '../../../__fixture__/data_template';

const useStyles = makeStyles(() => ({
  openBtn: {
    color: 'white',
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 500,
  },
  viewCount: {
    fontSize: 15,
    lineHeight: 2,
    color: 'rgba(0, 0, 0, 0.54)',
  },
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
  dialogContentRight: {
    width: 300,
  },
  dialogTextField: {
    width: 150,
    paddingRight: 150,
    '& input': {
      padding: '6.5px 5px',
    },
  },
  dialogTextAreaRoot: {
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 12,
  },
  dialogTextAreaTitle: {
    marginBottom: 12,
  },
  dialogTextArea: {
    width: 480,
  },
}));

const CreateItemDialog = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [themeSelect, setThemeSelect] = useState('type1');
  const [serviceSelect, setServiceSelect] = useState('SEL');
  // const [newItem, setNewItem] = useState(boardTemplate);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleThemeTypeChange = ({ target }) => {
    setThemeSelect(target.value);
  };

  const handleServiceAreaChange = ({ target }) => {
    setServiceSelect(target.value);
  };

  return (
    <div>
      <IconButton onClick={handleDialogOpen} className={classes.openBtn}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          관광 프로그램 추가
        </DialogTitle>
        <DialogContent style={{ minHeight: 300 }}>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>프로그램명</Box>
            <TextField className={classes.dialogTextField} variant="outlined" />
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>테마별 분류</Box>
            <TextField
              className={classes.dialogTextField}
              select
              value={themeSelect}
              onChange={handleThemeTypeChange}
            >
              {themeTypeSelectMenu.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>서비스 지역</Box>
            <TextField
              className={classes.dialogTextField}
              select
              value={serviceSelect}
              onChange={handleServiceAreaChange}
            >
              {serviceAreaSelectMenu.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.dialogTextAreaRoot}>
            <Box className={classes.dialogTextAreaTitle}>프로그램 소개</Box>
            <TextareaAutosize
              className={classes.dialogTextArea}
              rowsMin={3}
              rowsMax={3}
            />
          </div>
          <div className={classes.dialogTextAreaRoot}>
            <Box className={classes.dialogTextAreaTitle}>프로그램 상세소개</Box>
            <TextareaAutosize
              className={classes.dialogTextArea}
              rowsMin={10}
              rowsMax={10}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            취소
          </Button>
          <Button onClick={handleSubmit} color="primary">
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateItemDialog;
