/* eslint-disable react/prop-types */
import Drawer from "@mui/material/Drawer";

import "./MovieDrawer.css";

function MovieDrawer({ open, setOpen }) {
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <Drawer anchor={"right"} open={open} onClose={toggleDrawer()}>
      <div className='drawer'>
        <h5>My Movies</h5>
      </div>
    </Drawer>
  );
}

export default MovieDrawer;
