import React from 'react';

const statusColors = {
    Applied: 'bg-yellow-200 text-yellow-800',
    Interview: 'bg-blue-200 text-blue-800',
    Offer: 'bg-green-200 text-green-800',
    Rejected: 'bg-red-200 text-red-800',
};

const JobList = ({ jobs, deleteJob }) => (
    <div className="grid gap-4">
        {jobs.map(job => (
            <div key={job._id} className="p-4 shadow-md bg-white rounded flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-lg">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                    <span className={`px-2 py-1 rounded ${statusColors[job.status]}`}>{job.status}</span>
                </div>
                <button
                    onClick={() => deleteJob(job._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        ))}
    </div>
);

export default JobList;