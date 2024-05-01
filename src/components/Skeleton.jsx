import React from "react";
import { Skeleton as MuiSkeleton } from "@mui/material";

const Skeleton = () => {
  return (
    <div style={StyledCard}>
      <MuiSkeleton variant="rectangular" width={200} height={350} />
      <MuiSkeleton variant="text" width={210} />
      <MuiSkeleton variant="text" width={190} />
      <MuiSkeleton variant="text" width={220} />
      <MuiSkeleton variant="text" width={200} />
      <MuiSkeleton variant="rectangular" width={100} height={40} />
      <MuiSkeleton variant="text" width={210} />
      <MuiSkeleton variant="rectangular" width={100} height={40} />
      <MuiSkeleton variant="rectangular" width={100} height={40} />
    </div>
  );
};

export default Skeleton;

// Styles
const StyledCard = {
  width: 250,
  height: 550,
  borderRadius: 16,
  boxShadow: "1px 1px 1px 1px rgba(126, 125, 125, 0.285)",
  border: "0.5px solid rgb(198, 198, 198)",
  padding: 16,
  margin: 16,
  borderRadius: 16,
};
