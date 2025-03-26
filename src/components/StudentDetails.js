import React, { useState } from "react";
import { useParams } from "react-router-dom";

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

const cardStyle = {
  width: "60%",
  backgroundColor: "#f8f9fa",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
};

const sectionStyle = {
  marginBottom: "15px",
  paddingBottom: "10px",
  borderBottom: "1px solid #ddd",
};

const certContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const certCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  borderRadius: "5px",
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
};

const mockStudent = {
  id: 1,
  name: "Shiva",
  class: "CSE 3rd Year",
  studentId: "CS1234",
  phone: "+91 9876543210",
  address: "123 Street, City, Country",
  totalPoints: 55,
  categoryPoints: { Category1: 10, Category2: 25, Category3: 20 },
  certificates: [
    { id: 1, name: "Sports Meet", points: 10, status: "Approved", image: "https://via.placeholder.com/400" },
    { id: 2, name: "Hackathon", points: 25, status: "Approved", image: "https://via.placeholder.com/400" },
    { id: 3, name: "Cultural Fest", points: 20, status: "Rejected", image: "https://via.placeholder.com/400" },
  ],
};

const StudentDetails = () => {
  //const { id } = useParams();
  const student = mockStudent; // Replace with actual API fetch later
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2>{student.name}</h2>
        <p><strong>Class:</strong> {student.class}</p>
        <p><strong>Student ID:</strong> {student.studentId}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Address:</strong> {student.address}</p>

        <div style={sectionStyle}>
          <h3>Total Activity Points: {student.totalPoints}</h3>
          <p><strong>Category 1:</strong> {student.categoryPoints.Category1} pts</p>
          <p><strong>Category 2:</strong> {student.categoryPoints.Category2} pts</p>
          <p><strong>Category 3:</strong> {student.categoryPoints.Category3} pts</p>
        </div>

        <div style={certContainerStyle}>
          <h3>Certificates</h3>
          {student.certificates.map((cert) => (
            <div key={cert.id} style={certCardStyle}>
              <p>
                <strong>{cert.name}</strong> - {cert.points} pts 
                <span style={{ color: cert.status === "Approved" ? "green" : "red", marginLeft: "10px" }}>
                  ({cert.status})
                </span>
              </p>
              <button style={buttonStyle} onClick={() => setSelectedCertificate(cert.image)}>
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div style={overlayStyle} onClick={() => setSelectedCertificate(null)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <img src={selectedCertificate} alt="Certificate" width="400px" />
            <br />
            <button onClick={() => setSelectedCertificate(null)} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
