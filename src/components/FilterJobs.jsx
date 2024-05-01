import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

function FilterJobs({ onFilterChange }) {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [remote, setRemote] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    onFilterChange({ role, experience, remote, salary, companyName });
  }, [role, experience, remote, salary, companyName]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ minWidth: "16.6%" }}>
        <FormControl fullWidth>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="">No Selection</MenuItem>
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="ios">iOS</MenuItem>
            <MenuItem value="android">Android</MenuItem>
            <MenuItem value="tech lead">Tech Lead</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: "16.6%" }}>
        <FormControl fullWidth>
          <InputLabel id="experience-label">Experience</InputLabel>
          <Select
            labelId="experience-label"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <MenuItem value="">No Selection</MenuItem>
            {Array.from({ length: 16 }, (_, i) => i).map((exp) => (
              <MenuItem key={exp} value={exp}>
                {exp}
              </MenuItem>
            ))}
            <MenuItem value=">15">{`>15`}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: "16.6%" }}>
        <FormControl fullWidth>
          <InputLabel id="remote-label">Remote</InputLabel>
          <Select
            labelId="remote-label"
            value={remote}
            onChange={(e) => setRemote(e.target.value)}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
            <MenuItem value="">No Selection</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: "16.6%" }}>
        <FormControl fullWidth>
          <InputLabel id="salary-label">Minimum Base Pay Salary</InputLabel>
          <Select
            labelId="salary-label"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <MenuItem value="">No Selection</MenuItem>
            <MenuItem value="<5k">{"<5k USD"}</MenuItem>
            <MenuItem value="5k-10k">{"5k to 10k USD"}</MenuItem>
            <MenuItem value=">10k">{">10k USD"}</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: "16.6%" }}>
        <TextField
          fullWidth
          placeholder="Search Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </Box>
    </Box>
  );
}

export default FilterJobs;
