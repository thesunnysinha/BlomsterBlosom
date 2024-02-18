import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "primary.main" }}>
      <Typography variant="body1" align="center" color="white">
        © 2023. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;