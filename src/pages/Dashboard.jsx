import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm.jsx';
import JobList from '../components/JobList.jsx';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/jobs');
            setJobs(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const addJob = async (job) => {
        try {
            const res = await axios.post('http://localhost:5001/api/jobs', job);
            setJobs(prev => [...prev, res.data]);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteJob = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/jobs/${id}`);
            setJobs(prev => prev.filter(job => job._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    // Persist jobs locally
    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem('jobs'));
        if (storedJobs) setJobs(storedJobs);
    }, []);

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }, [jobs]);

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div className="p-6 md:flex md:gap-6">
            <div className="md:w-1/3 bg-white shadow-md p-4 rounded-lg">
                <JobForm addJob={addJob} />
            </div>
            <div className="md:w-2/3 mt-6 md:mt-0">
                <JobList jobs={jobs} deleteJob={deleteJob} />
            </div>
        </div>
    );
};

export default Dashboard;