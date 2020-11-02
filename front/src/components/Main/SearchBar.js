import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 15,
    textAlign: 'center',
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  const [category, setCategory] = useState('프로그램명');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">분류</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleCategoryChange}
          label="Age"
        >
          <MenuItem value="프로그램명">프로그램명</MenuItem>
          <MenuItem value="테마">테마</MenuItem>
          <MenuItem value="지역">지역</MenuItem>
          <MenuItem value="키워드">키워드</MenuItem>
        </Select>
      </FormControl>
      <Input />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
