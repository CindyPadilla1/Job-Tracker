import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let jobs = [];
let currentId = 1;

// Get all jobs
app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

// Add a job
app.post('/api/jobs', (req, res) => {
    const { title, company, status } = req.body;
    const newJob = { _id: currentId++, title, company, status: status || 'Applied' };
    jobs.push(newJob);
    res.status(201).json(newJob);
});

// Delete a job
app.delete('/api/jobs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    jobs = jobs.filter(job => job._id !== id);
    res.json({ message: 'Job deleted' });
});

app.listen(5001, () => console.log('Server running on port 5001'));