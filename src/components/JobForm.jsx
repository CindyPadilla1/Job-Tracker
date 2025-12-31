import React, { useState } from 'react';

const JobForm = ({ addJob }) => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [status, setStatus] = useState('Applied');

    const handleSubmit = (e) => {
        e.preventDefault();
        addJob({ title, company, status });
        setTitle('');
        setCompany('');
        setStatus('Applied');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                className="border p-2 rounded"
                placeholder="Job Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                className="border p-2 rounded"
                placeholder="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                required
            />
            <select
                className="border p-2 rounded"
                value={status}
                onChange={e => setStatus(e.target.value)}
            >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
            </select>
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
                Add Job
            </button>
        </form>
    );
};

export default JobForm;