import React from "react";
import AboutLearningEnv from './AboutLearningEnv.jpg'

const About = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
      style={{ AboutLearningEnv}} 
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Student Management System</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Our Student Management System is designed to help institutions efficiently manage student records. 
        With an intuitive interface, administrators can easily add, edit, and track student information.
      </p>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Features include real-time updates, secure data storage, and user-friendly navigation, ensuring 
        seamless management of academic records.
      </p>
    </div>
  );
};

export default About;
