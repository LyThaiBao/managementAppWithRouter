import { Link } from "react-router-dom";
import Student from "./Student.jsx";
export default function StudentList({ studentList = [] }) {
  return (
    <div className="student__list">
      {studentList.map((student) => (
        <Link key={student.id} to={`/show/students/${student.id}`}>
          <Student
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
