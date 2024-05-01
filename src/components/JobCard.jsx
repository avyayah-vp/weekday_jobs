import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Skeleton } from "@mui/material";
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
      <Card style={StyledCard}>
        <CardContent>
          <a
            href={job.jdLink}
            target=""
            rel="https://weekday.works"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h4" style={a}>
              Weekday
            </Typography>
            <Typography variant="subtitle1" component="div" style={a}>
              {job.jobRole}
            </Typography>
          </a>
          <Typography variant="subtitle2" style={{ color: "grey" }}>
            {job.location}
          </Typography>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            About Company
          </Typography>
          <Typography variant="body2">{jobDetailsPreview}</Typography>
          <Button
            variant="outlined"
            onClick={handleViewJobClick}
            style={CenteredButton}
          >
            View Job
          </Button>
          <Typography variant="subtitle2" style={{ color: "grey" }}>
            Experience Required: {job.minExp || "NA"}
          </Typography>
          <Button
            variant="contained"
            startIcon={<LightningBoltIcon />}
            style={StyledButton}
          >
            Easy Apply
          </Button>
          <Button variant="contained" style={UnlockButton}>
            Unlock Referral Asks
          </Button>
        </CardContent>
      </Card>
      <JobModal open={isModalOpen} handleClose={handleCloseModal} job={job} />
    </>
  );
};

export default JobCard;

// Styles
const windowWidth = window.innerWidth;

const StyledCard = {
  width: 250,
  height: 520,
  borderRadius: 16,
  boxShadow: "1px 1px 1px 1px rgba(126, 125, 125, 0.285)",
  border: "0.5px solid rgb(198, 198, 198)",
  padding: 16,
  margin: 16,
};

const StyledButton = {
  backgroundColor: "#54efc3",
  borderRadius: 10,
  color: "black",
  padding: 8,
  marginTop: 8,
  textAlign: "center",
  width: "100%",
};

const UnlockButton = {
  backgroundColor: "#4943da",
  color: "white",
  padding: 8,
  borderRadius: 10,
  marginTop: 8,
  textAlign: "center",
  width: "100%",
};

const CenteredButton = {
  display: "block",
  margin: "0 auto",
  marginTop: 8,
  marginBottom: 8,
  backgroundColor: "transparent",
  border: "0px",
};

const a = {
  fontWeight: "bold",
  color: "black",
  cursor: "pointer",
};
