import React from "react";
import { useEffect } from "react";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobsSlice";
import './SearchJobs.css';

function SearchJobs() {

    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
      }, [dispatch]);

  return (
    <div className="jobsContainer">
      {jobs.map((job) => (
        <JobCard className = "jobCard" key={job.jdUid} job={job} />
      ))}
    </div>
  );
}

export default SearchJobs;
