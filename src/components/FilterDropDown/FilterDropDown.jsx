/* eslint-disable react/prop-types */
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

function FilterDropDown({ filter, setFilter }) {
  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <Select
        style={{ backgroundColor: "white", paddingLeft: "0.4rem" }}
        labelId='filter'
        value={filter}
        onChange={(e) => setFilter({ filter: e.target.value })}
        label='Filter movies'
      >
        <MenuItem value={"popular"}>Popular</MenuItem>
        <MenuItem value={"top_rated"}>Top Rated</MenuItem>
        <MenuItem value={"upcoming"}>Upcoming</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterDropDown;
