import React, { useState } from "react";
import axios from "axios";
import "./styles/UpdateUser.css";

const API = process.env.REACT_APP_API_URL|| "http://localhost:5000";

function UpdateUser() {
  const [empId, setEmpId] = useState("");
  const [updateDetails, setUpdateDetails] = useState({
    password: "",
    role: "",
    description: "",
  });
  const [empIdError, setEmpIdError] = useState("");

  const validateEmpId = (value) => {
    if (!value.trim()) {
      setEmpIdError("Employee ID is required");
      return false;
    }
    setEmpIdError("");
    return true;
  };

  const handleEmpIdChange = (e) => {
    const value = e.target.value;
    setEmpId(value);
    validateEmpId(value);
  };

  const handleUpdateUser = async () => {
    if (!validateEmpId(empId)) {
      alert("Please enter a valid Employee ID");
      return;
    }

    const hasUpdates = Object.values(updateDetails).some(
      (value) => value.trim() !== ""
    );

    if (!hasUpdates) {
      alert("Please fill in at least one field to update");
      return;
    }

    try {
      const fieldsToUpdate = Object.fromEntries(
        Object.entries(updateDetails).filter(
          ([, value]) => value.trim() !== ""
        )
      );

      await axios.put(`${API}/update-user/${empId}`, fieldsToUpdate);

      alert("User updated successfully!");

      setUpdateDetails({
        password: "",
        role: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error updating user.");
    }
  };

  const isSubmitDisabled = !empId.trim() || empIdError;

  return (
    <div className="update-user-container">
      <h3>Update User</h3>

      <div className="employee-id-section">
        <label className="section-label required-field">
          Employee Identification
        </label>

        <input
          className={`employee-id-input ${
            empIdError ? "invalid" : ""
          }`}
          placeholder="Employee ID"
          value={empId}
          onChange={handleEmpIdChange}
          required
        />

        {empIdError && (
          <div className="error-message">{empIdError}</div>
        )}
      </div>

      <div className="update-details-section">
        <label className="section-label">
          Update Information
        </label>

        <div className="update-fields">
          {Object.keys(updateDetails).map((key) => (
            <input
              key={key}
              className={key === "password" ? "password-input" : ""}
              placeholder={
                key === "password" ? "New Password" : key
              }
              type={key === "password" ? "password" : "text"}
              value={updateDetails[key]}
              onChange={(e) =>
                setUpdateDetails({
                  ...updateDetails,
                  [key]: e.target.value,
                })
              }
            />
          ))}
        </div>
      </div>

      <button
        className="submit-btn"
        onClick={handleUpdateUser}
        disabled={isSubmitDisabled}
        title={
          isSubmitDisabled
            ? "Employee ID is required"
            : "Update user information"
        }
      >
        Update User
      </button>
    </div>
  );
}

export default UpdateUser;