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
import CreateIcon from '@material-ui/icons/Create';
import { themeTypeSelectMenu, serviceAreaSelectMenu } from '../../../__fixture__/select_data';

const useStyles = makeStyles(() => ({
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

const ItemCardDialog = ({ item }) => {
  const classes = useStyles();
  const {
    id, title, service_area: serviceArea, content, theme_type: themeType,
    created_at: createdAt, updated_at: updatedAt, detail_content: detailContent, views,
  } = item;

  const [open, setOpen] = useState(false);
  const [themeSelect, setThemeSelect] = useState('type1');
  const [serviceSelect, setServiceSelect] = useState('SEL');

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
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
      <IconButton onClick={handleDialogOpen}>
        <CreateIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <div className={classes.dialogTitle}>
            <span>관광 프로그램 상세정보</span>
            <span className={classes.viewCount}>
              views:
              {views}
            </span>
          </div>
        </DialogTitle>
        <DialogContent style={{ minHeight: 300 }}>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>고유아이디</Box>
            <Box className={classes.dialogContentRight}>{id}</Box>
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>생성날짜</Box>
            <Box className={classes.dialogContentRight}>{createdAt}</Box>
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>최근수정날짜</Box>
            <Box className={classes.dialogContentRight}>{updatedAt}</Box>
          </div>
          <div className={classes.dialogContentRoot}>
            <Box className={classes.dialogContentLeft}>프로그램명</Box>
            <TextField className={classes.dialogTextField} variant="outlined" defaultValue={title} />
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
              defaultValue={content}
            />
          </div>
          <div className={classes.dialogTextAreaRoot}>
            <Box className={classes.dialogTextAreaTitle}>프로그램 상세소개</Box>
            <TextareaAutosize
              className={classes.dialogTextArea}
              rowsMin={10}
              rowsMax={10}
              defaultValue={detailContent}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            취소
          </Button>
          <Button onClick={handleSave} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ItemCardDialog;
