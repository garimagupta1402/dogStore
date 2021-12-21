import React from "react";

import { Grid, Skeleton } from "@mui/material";




function HomeSkeleton() {
 
  return (
    <Grid sx={{ ml: "200px", mt: "100px" }} container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <Skeleton
          sx={{ height: "500px", width: "600px" }}
          variant="image "
          animation="wave"
        />
      </Grid>
      <Grid sx={{  mt: "150px" }} item xs={12} sm={6} md={6}>
        <Skeleton
          sx={{ height: "50px", width: "600px" }}
          variant="text"
          animation="wave"
        />

        <Skeleton
          sx={{ height: "50px", width: "600px" }}
          variant="text"
          animation="wave"
        />
      </Grid>
    </Grid>
  );
}
export default HomeSkeleton;
