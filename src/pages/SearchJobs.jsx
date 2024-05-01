import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobsSlice";
import JobCard from "../components/JobCard";
import Skeleton from "../components/Skeleton";
import FilterJobs from "../components/FilterJobs";
import "./SearchJobs.css";

function SearchJobs() {
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobs.jobs);
  const [jobs, setJobs] = useState(allJobs);
  const [filters, setFilters] = useState({});
  const loading = useSelector((state) => state.jobs.loading);
  const page = useRef(0); //kepp track of the current page
  const observer = useRef(); // Reference to the Intersection Observer instance
  const lastJobElementRef = useRef(); // Reference to the last job element

  const filterJobs = (jobs, filters) => {
    return jobs.filter(job => {
      let matches = true;

      // Filter by role
      if (filters.role) {
        matches = matches && job.jobRole === filters.role;
      }

      // Filter by experience
      if (filters.experience) {
        if (filters.experience === '>15') {
          matches = matches && job.maxExp > 15;
        } else {
          matches = matches && job.minExp <= filters.experience && job.maxExp >= filters.experience;
        }
      }

      // Filter by remote
      if (filters.remote) {
       //no data in api
      }

      // Filter by salary
      if (filters.salary) {
        if (filters.salary === '<5k') {
          matches = matches && job.minJdSalary < 5;
        } else if (filters.salary === '5k-10k') {
          matches = matches && job.maxJdSalary >= 5 && job.minJdSalary <= 10;
        } else if (filters.salary === '>10k') {
          matches = matches && job.maxJdSalary > 10;
        }
      }

      // Filter by company name
      if (filters.companyName) {
       // no company name data in api
      }

      return matches;
    });
  };

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

  useEffect(() => {
    const filteredJobs = filterJobs(allJobs, filters);
    setJobs(filteredJobs);
  }, [allJobs, filters]);

  return (
    <>
      <FilterJobs onFilterChange={(newFilters) => {
        setFilters(newFilters);
      }} />
            <div className="jobsContainer">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard className="jobCard" key={job.jdUid} job={job} />
          ))
        ) : !loading ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>NO JOBS</div>
        ) : null}
        {loading && Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
        <div ref={lastJobElementRef} style={{ height: "20px" }} />
      </div>
    </>
  );
}

export default SearchJobs;
