import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UploadLessonPlans.css';

const UploadLessonPlans = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const [week, setWeek] = useState('');
  const [lessonPlan, setLessonPlan] = useState(null);
  const [uploads, setUploads] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && week) {
      const newUpload = {
        fileName: file.name,
        week,
        file,
        uploadedAt: new Date().toLocaleString(),
      };
      setUploads((prev) => [...prev, newUpload]);
      setLessonPlan(null);
      setWeek('');
      e.target.value = ''; // reset file input
    } else {
      alert('Please select a week and a file.');
    }
  };

  return (
    <div className="course-detail">
      <div className="upload-header">
        <button className="back-button" onClick={() => navigate('/coordinator/courses')}>← Back</button>
        <h2>Upload Lesson Plan - {decodeURIComponent(courseName)}</h2>
      </div>

      <div className="upload-section">
        <label htmlFor="weekSelect">Select Week:</label>
        <select
          id="weekSelect"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
        >
          <option value="">-- Select Week --</option>
          <option value="Week 1">Week 1</option>
          <option value="Week 2">Week 2</option>
          <option value="Week 3">Week 3</option>
          <option value="Week 4">Week 4</option>
        </select>

        <label htmlFor="lessonUpload">Choose File:</label>
        <input
          type="file"
          id="lessonUpload"
          onChange={handleUpload}
          accept=".pdf,.doc,.docx"
        />
      </div>

      {uploads.length > 0 && (
        <div className="upload-table">
          <h3>Uploaded Lesson Plans</h3>
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>File Name</th>
                <th>Uploaded At</th>
              </tr>
            </thead>
            <tbody>
              {uploads.map((upload, index) => (
                <tr key={index}>
                  <td>{upload.week}</td>
                  <td>{upload.fileName}</td>
                  <td>{upload.uploadedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UploadLessonPlans;
