"use client";

import { useState, useEffect } from "react";
import "./UploadLessonPlans.css";

const UploadLessonPlans = () => {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", file: null });

  useEffect(() => {
    const savedPlans = localStorage.getItem("lessonPlans");
    if (savedPlans) {
      setLessonPlans(JSON.parse(savedPlans));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file) => {
    setFormData((prev) => ({ ...prev, file: file.name }));
  };

  const handleAdd = () => {
    const newPlan = {
      id: Date.now(),
      week: lessonPlans.length + 1,
      title: formData.title,
      description: formData.description,
      file: formData.file,
    };
    const updatedPlans = [...lessonPlans, newPlan];
    setLessonPlans(updatedPlans);
    localStorage.setItem("lessonPlans", JSON.stringify(updatedPlans));
    setFormData({ title: "", description: "", file: null });
  };

  const handleDelete = (id) => {
    const updatedPlans = lessonPlans.filter((plan) => plan.id !== id);
    setLessonPlans(updatedPlans);
    localStorage.setItem("lessonPlans", JSON.stringify(updatedPlans));
  };

  return (
    <div className="upload-lesson-plans">
      <div className="page-header">
        <h1>Lesson Plan</h1>
      </div>

      <div className="week-card">
        <h2>Add New Lesson Plan</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="3"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          ></textarea>
        </div>

        <div className="upload-box">
          <p>
            📁 Drag and drop or <label htmlFor="file-upload" className="browse-btn">browse</label>
          </p>
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={(e) => e.target.files.length && handleFileUpload(e.target.files[0])}
          />
          {formData.file && <p className="uploaded-file">📄 {formData.file}</p>}
        </div>

        <div className="form-actions">
          <button onClick={handleAdd}>➕ Add Plan</button>
        </div>
      </div>

      {lessonPlans.length > 0 && (
        <div className="plans-table">
          <h3>Uploaded Plans</h3>
          <table>
            <thead>
              <tr>
                <th>Week</th>
                <th>Title</th>
                <th>Description</th>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lessonPlans.map((plan) => (
                <tr key={plan.id}>
                  <td>{plan.week}</td>
                  <td>{plan.title}</td>
                  <td>{plan.description}</td>
                  <td>{plan.file || "No File"}</td>
                  <td>
                    <button onClick={() => handleDelete(plan.id)}>🗑 Delete</button>
                  </td>
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
