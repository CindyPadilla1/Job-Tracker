import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Job Tracker</h1>
            <span className="italic text-sm">Track your applications like a pro</span>
        </nav>
    );
};

export default Navbar;