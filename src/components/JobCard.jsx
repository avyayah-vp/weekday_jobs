import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import LightningBoltIcon from "@mui/icons-material/FlashOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import JobModal from "./JobModal";

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewJobClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //Calculate Salary
  const getSalary = (minSalary, maxSalary, currencyCode) => {
    if (minSalary === null && maxSalary === null) {
      return "NA";
    } else if (minSalary === null) {
      return `${maxSalary}k ${currencyCode}`;
    } else if (maxSalary === null) {
      return `${minSalary}k ${currencyCode}`;
    } else if (minSalary === maxSalary) {
      return `${minSalary}k ${currencyCode}`;
    } else {
      return `${minSalary}k to ${maxSalary}k ${currencyCode}`;
    }
  };

  //calculate experience
  const getExperience = (minExp, maxExp) => {
    if (minExp === null && maxExp === null) {
      return "0 years";
    } else if (minExp === maxExp) {
      return `${minExp} years`;
    } else if (minExp === null) {
      return `0 to ${maxExp} years`;
    } else if (maxExp === null) {
      return `${minExp} to 0 years`;
    } else {
      return `${minExp} to ${maxExp} years`;
    }
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
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.jpeg"}
                alt="logo"
                style={{ marginRight: "10px", height: "50px", width: "50px" }}
              />
            </div>
            <div>
              <Typography variant="h4" style={a}>
                Weekday
              </Typography>
              <Typography variant="subtitle1" component="div" style={a}>
                {job.jobRole}
              </Typography>
            </div>
          </a>
          <Typography
            variant="subtitle2"
            style={{ color: "grey", marginLeft: 60 }}
          >
            {job.location}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "grey",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Estimated Salary:{" "}
            {getSalary(
              job.minJdSalary,
              job.maxJdSalary,
              job.salaryCurrencyCode
            )}
            <CheckCircleIcon style={{ color: "green",marginLeft:5, fontSize: "17px" }} />
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
            Preffered Experience: {getExperience(job.minExp, job.maxExp)}
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
const StyledCard = {
  width: 300,
  height: 500,
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
  textTransform: "none",
};

const UnlockButton = {
  backgroundColor: "#4943da",
  color: "white",
  padding: 8,
  borderRadius: 10,
  textAlign: "center",
  width: "100%",
  textTransform: "none",
  marginTop: "5%",
};

const CenteredButton = {
  display: "block",
  margin: "0 auto",
  marginTop: 8,
  marginBottom: 8,
  backgroundColor: "transparent",
  border: "0px",
  textTransform: "none",
};

const a = {
  fontWeight: "bold",
  color: "black",
  cursor: "pointer",
};
