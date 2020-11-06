import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    textAlign: 'center',
  },
  formControl: {
    marginRight: 15,
    minWidth: 100,
  },
  textField: {
    margin: theme.spacing(1),
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  const [category, setCategory] = useState('title');
  const [searchWord, setSearchWord] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = () => {
    console.log(searchWord);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel>카테고리</InputLabel>
        <Select
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleCategoryChange}
          label="카테고리"
        >
          <MenuItem value="title">프로그램명</MenuItem>
          <MenuItem value="themeType">테마</MenuItem>
          <MenuItem value="serviceArea">지역</MenuItem>
          <MenuItem value="keyword">키워드</MenuItem>
        </Select>
      </FormControl>
      <form noValidate>
        <TextField
          id="standard-basic"
          label="검색어를 입력해주세요"
          value={searchWord}
          onChange={handleChange}
        />
        <IconButton onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;
