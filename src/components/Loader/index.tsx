import React from "react";
import Style from "./Loader.style";
import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Style>
      <CircularProgress
        sx={{
          color: "#fff",
        }}
      />
    </Style>
  );
}

export default Loader;
