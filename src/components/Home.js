import React, { useState } from "react";

const containerStyle = {
  textAlign: "center",
  marginTop: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  margin: "10px auto",
  width: "80%",
  borderRadius: "5px",
  backgroundColor: "#f8f9fa",
};

const buttonStyle = {
  padding: "5px 10px",
  margin: "5px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const approveStyle = { ...buttonStyle, backgroundColor: "green", color: "white" };
const rejectStyle = { ...buttonStyle, backgroundColor: "red", color: "white" };
const viewStyle = { ...buttonStyle, backgroundColor: "#007bff", color: "white" };

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

const mockCertificates = [
  { id: 1, studentName: "Shiva", certificate: "Sports Event", points: 10, status: "Pending", image: "https://via.placeholder.com/400" },
  { id: 2, studentName: "Manu", certificate: "Tech Workshop", points: 15, status: "Pending", image: "https://via.placeholder.com/400" },
];

const Home = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div style={containerStyle}>
      <h2>Certificates for Verification</h2>
      {mockCertificates.map((cert) => (
        <div key={cert.id} style={cardStyle}>
          <p>
            <strong>{cert.studentName}</strong> - {cert.certificate} ({cert.points} pts)
          </p>
          <button style={viewStyle} onClick={() => setSelectedCertificate(cert.image)}>
            View Certificate
          </button>
          <button style={approveStyle}>Approve</button>
          <button style={rejectStyle}>Reject</button>
        </div>
      ))}

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

export default Home;
