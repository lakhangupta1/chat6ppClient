import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

function LayoutLoader() {
  return (
    <Grid container height="calc(100vh - 4rem)" spacing={2}>

      {/* LEFT */}
      <Grid
        item
        sx={{
          width: { xs: "0%", sm: "20%" },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Skeleton variant="rectangular" height="100%" sx={{ borderRadius: 2 }} />
      </Grid>

      {/* CENTER */}
      <Grid
        item
        sx={{
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <Stack spacing={2}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height="5rem"
              sx={{ borderRadius: 2 }}
            />
          ))}
        </Stack>
      </Grid>

      {/* RIGHT */}
      <Grid
        item
        sx={{
          width: { xs: "0%", sm: "20%" },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Skeleton variant="rectangular" height="100%" sx={{ borderRadius: 2 }} />
      </Grid>

    </Grid>
  );
}

export default LayoutLoader;
