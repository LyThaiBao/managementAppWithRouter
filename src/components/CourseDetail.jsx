import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTION, getData } from "../../api.js";
export default function CourseDetail() {
  const { studentId, courseId } = useParams();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [student, setStudent] = useState({
    name: null,
    age: null,
    major: null,
    courses: [],
  });
  useEffect(() => {
    getData(studentId, API_OPTION({}).get, setStudent, { setLoad, setErr });
  }, [studentId]);
  if (student.name) {
    const course = student.courses.find((c) => c.id == courseId);
    if (load || !student.name) return <div>Loading...</div>;
    if (err) return <div>{err}</div>;

    return (
      <div>
        <h3>Course Name: {course.name}</h3>
        <p>Description: {course.description}</p>
      </div>
    );
  }
  //   -----------------------
}
