import React from "react";
import { useEffect, useRef } from "react";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobsSlice";
import Skeleton from "../components/Skeleton";
import FilterJobs from "../components/FilterJobs";
import "./SearchJobs.css";

function SearchJobs() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const page = useRef(0); //kepp track of the current page
  const observer = useRef(); // Reference to the Intersection Observer instance
  const lastJobElementRef = useRef(); // Reference to the last job element

  useEffect(() => {
    dispatch(fetchJobs({ limit: 10, offset: page.current * 10 }));
  }, [dispatch]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        page.current++;
        dispatch(fetchJobs({ limit: 10, offset: page.current * 10 }));
      }
    });

    if (lastJobElementRef.current) {
      observer.current.observe(lastJobElementRef.current);
    }
  }, [jobs]);

  return (
    <>
    <FilterJobs onFilterChange={(filters) => {
   // Dispatch action to fetch jobs based on filters
}} />
    <div className="jobsContainer">
      {jobs.map((job, index) => (
        <JobCard className="jobCard" key={job.jdUid} job={job} />
      ))}
      {loading && Array.from({ length: 10 }).map((_, index) => (
      <Skeleton key={index} />
    ))}
      <div ref={lastJobElementRef} style={{ height: "20px" }} />
    </div>
    </>
  );
}

export default SearchJobs;
