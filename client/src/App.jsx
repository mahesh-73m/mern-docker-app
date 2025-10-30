import React, { useState } from "react";
import axios from "axios";

function App() {
  const [regdNo, setRegdNo] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const fetchResult = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/result/${regdNo}`);
      setStudent(res.data);
      setError("");
    } catch {
      setError("Student not found");
      setStudent(null);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🎓 Student Result Finder</h2>
      <input
        type="text"
        placeholder="Enter Registration No"
        value={regdNo}
        onChange={(e) => setRegdNo(e.target.value)}
      />
      <button onClick={fetchResult}>Find Result</button>

      {student && (
        <div>
          <h3>{student.name}</h3>
          <p>Marks: {student.marks}</p>
          <p>Result: {student.result}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
