import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { sortBy } from "../features/api/userSlice";

export const SortSelect = () => {
  const [sort, setSort] = React.useState("");

  const dispath = useDispatch();

  const handleChange = (event) => {
    setSort(event.target.value)
    dispath(sortBy(event.target.value))
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={'order'}>Order</MenuItem>
          <MenuItem value={'title'}>Title</MenuItem>
          <MenuItem value={'duration'}>Duration</MenuItem>
          <MenuItem value={'date'}>Date</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
