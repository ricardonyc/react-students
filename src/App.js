import "./App.css";
import Student from "./components/Student";
import studentData from "./Data";
import React, { useState } from "react";

function App() {
  const [studentInfo, setStudentInfo] = useState(studentData);
  console.log(studentInfo);

  return (
    <div className="App">
      {studentInfo.map((student) => {
        return (
          <Student
            key={student.name}
            name={student.name}
            bio={student.bio}
            scores={student.scores}
          />
        );
      })}
    </div>
  );
}

export default App;
