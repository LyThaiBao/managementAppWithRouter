import { Link } from "react-router-dom";
import Student from "./Student.jsx";
export default function StudentList({ studentList = [] }) {
  if (studentList.length == 0) {
    return <div>No Student Yet 😒😒</div>;
  }
  return (
    <div className="student__list">
      {studentList.map((student) => (
        <Link key={student.id} to={`/show/students/${student.id}`}>
          <Student
            mssv={student.mssv}
            id={student.id}
            name={student.name}
            age={student.age}
            major={student.major}
          ></Student>
        </Link>
      ))}
    </div>
  );
}
