import React, { useState } from "react";
import "../styles/ResumeUpload.css";

const ResumeUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type.includes("pdf")) {
            setFile(selectedFile);
        } else {
            alert("Only PDF files are allowed.");
        }
    };

    const handleUpload = () => {
        if (file) {
            alert(`File ${file.name} uploaded successfully!`);
        }
    };

    return (
        <div className="resume-upload">
            {/* 🔹 Banner Image - Change URL Below for Customization */}
            <div className="resume-banner">
                <img src="`url(${process.env.PUBLIC_URL}/resume.jpg)`" alt="Job Success" /> 
            </div>

            <h2>Upload Your Resume</h2>
            <p>Boost your career by uploading a resume that stands out!</p>

            <div className="drop-zone">
                <p>Drag & Drop your resume here or</p>
                <input type="file" onChange={handleFileChange} accept=".pdf" />
            </div>

            {file && <p className="file-info">Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)</p>}

            <button onClick={handleUpload} disabled={!file} className="upload-btn">
                Upload Resume
            </button>
        </div>
    );
};

export default ResumeUpload;
