import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { styled } from "@mui/system";
import LightningBoltIcon from "@mui/icons-material/FlashOn";
import JobModal from "./JobModal";

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewJobClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const jobDetailsPreview = `${job.jobDetailsFromCompany.substring(0, 300)}...`;

  return (
    <>
      <StyledCard>
        <CardContent>
          <a href={job.jdLink} target="_blank" rel="https://weekday.works">
            <Typography variant="h4">Weekday</Typography>
            <Typography variant="subtitle1" component="div">
              {job.jobRole}
            </Typography>
          </a>
          <Typography variant="subtitle1">{job.location}</Typography>
          <Typography variant="h6">About Company</Typography>
          <Typography variant="body2">{jobDetailsPreview}</Typography>
          <CenteredButton variant="outlined" onClick={handleViewJobClick}>
            View Job
          </CenteredButton>
          <Typography variant="p">
            Experience Required: {job.minExp || "Not specified"}
          </Typography>
          <StyledButton variant="contained" startIcon={<LightningBoltIcon />}>
            Easy Apply
          </StyledButton>
          <UnlockButton variant="contained">Unlock Referral Asks</UnlockButton>
        </CardContent>
      </StyledCard>
      <JobModal open={isModalOpen} handleClose={handleCloseModal} job={job} />
    </>
  );
};

const StyledCard = styled(Card)({
  width: 250,
  height: 550,
  borderRadius: 16,
  boxShadow: "1px 1px 1px 1px rgba(126, 125, 125, 0.285)",
  border: "0.5px solid rgb(198, 198, 198)",
  padding: 16,
  margin: 16,
});

const StyledButton = styled(Button)({
  backgroundColor: "#54efc3",
  borderRadius: 10,
  color: "black",
  padding: 8,
  marginTop: 8,
  textAlign: "center",
  width: "100%", // make the button full width
  "&:hover": {
    backgroundColor: "#00ac7c",
    color: "white",
  },
});

const UnlockButton = styled(Button)({
  backgroundColor: "#4943da", // set the button color to #4943da
  color: "white",
  padding: 8,
  borderRadius: 10,
  marginTop: 8,
  textAlign: "center",
  width: "100%", // make the button full width
  "&:hover": {
    backgroundColor: "#3129b2",
    color: "white",
  },
});

const CenteredButton = styled(Button)({
  display: "block",
  margin: "0 auto",
  marginTop: 8,
  marginBottom: 8,
  backgroundColor: "transparent",
  border: "0px",
});

export default JobCard;
