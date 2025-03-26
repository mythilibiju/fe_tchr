import React, { useState } from "react";
import { Link } from "react-router-dom";

const students = [
  { id: 1, name: "Shiva", class: "CS-3", studentId: "1001" },
  { id: 2, name: "Sanjay", class: "EC-1", studentId: "1002" },
];

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  margin: "10px auto",
  width: "80%",
  borderRadius: "5px",
  backgroundColor: "#f8f9fa",
};

const StudentList = () => {
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    userId: "",
    pwd: "",
    cls: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add the new student to the student list (this would be handled more effectively with a backend in real applications)
    console.log("New student added:", newStudent);
    // You can reset the form after submission
    setNewStudent({ userId: "", pwd: "", cls: "", phone: "", address: "" });
    setShowForm(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id} style={cardStyle}>
          <p>
            {student.name} ({student.class})
          </p>
          <Link
            to={`/students/${student.id}`}
            style={{ textDecoration: "none", color: "#007bff" }}
          >
            View Details
          </Link>
        </div>
      ))}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showForm ? "Cancel" : "Add Student"}
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={newStudent.userId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="pwd"
              placeholder="Password"
              value={newStudent.pwd}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="cls"
              placeholder="Class"
              value={newStudent.cls}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={newStudent.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={newStudent.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Student
          </button>
        </form>
      )}
    </div>
  );
};

export default StudentList;
