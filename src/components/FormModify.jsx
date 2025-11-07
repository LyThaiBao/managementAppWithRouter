import { useEffect, useState } from "react";
import { patchData } from "../../api";

export default function FormModify({ editStudent, handleModify }) {
  const [formStudent, setFormStudent] = useState({
    mssv: "",
    name: "",
    age: "",
    major: "",
    courses: [],
  });
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  useEffect(() => {
    if (editStudent) {
      setFormStudent(editStudent);
    }
  }, [editStudent]);
  function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    if (formStudent) {
      handleModify(formStudent, editStudent.id);
    } else {
      setErr("Something went wrong");
    }
    setLoad(false);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="mssv">Student ID</label>
      <input
        type="text"
        name="mssv"
        id="mssv"
        value={formStudent.mssv}
        onChange={(e) =>
          setFormStudent({ ...formStudent, mssv: e.target.value })
        }
      />
      <label htmlFor="name">Student name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formStudent.name}
        onChange={(e) =>
          setFormStudent({ ...formStudent, name: e.target.value })
        }
      />
      <hr />
      <label htmlFor="age">Student age</label>
      <input
        type="number"
        name="age"
        id="age"
        value={formStudent.age}
        onChange={(e) =>
          setFormStudent({ ...formStudent, age: e.target.value })
        }
      />
      <hr />
      <label htmlFor="major">Student major</label>
      <input
        type="text"
        name="major"
        id="major"
        value={formStudent.major}
        onChange={(e) =>
          setFormStudent({ ...formStudent, major: e.target.value })
        }
      />
      <hr />
      <label htmlFor="courses">Student Courses</label>
      <input
        type="text"
        name="courses"
        id="courses"
        value={formStudent.courses.map((c) => c.name).join(",")}
        onChange={(e) => {
          const names = e.target.value.split(",").map((n) => n.trim());
          setFormStudent({
            ...formStudent,
            courses: names.map((name, index) => ({
              id: formStudent.courses[index]?.id || Date.now() + index,
              name,
            })),
          });
        }}
      />
      <hr />
      <button type="submit">UPDATE</button>
    </form>
  );
}
