import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_OPTION, getData } from "../../api";
export default function StudentDetail() {
  const { studentId } = useParams();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [student, setStudent] = useState({
    name: null,
    age: null,
    major: null,
  });
  useEffect(() => {
    getData(studentId, API_OPTION({}).get, setStudent, { setLoad, setErr });
  }, [studentId]);
  console.log(student);
  if (!student.name || load) {
    return <div>Loading...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <div>
      <h2>Student Name: {student.name}</h2>
      <span>Student Age: {student.age}</span>
      <div>Major: {student.major}</div>
      <ul>
        {student.courses.map((c) => (
          <Link key={c.id} to={`/show/students/${studentId}/courses/${c.id}`}>
            <div>{c.name}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
