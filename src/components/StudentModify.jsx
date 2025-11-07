import { useState } from "react";
import FormModify from "./FormModify.jsx";
export default function StudentModify({ studentList = [], handleModify }) {
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(false);
  const [student, setStudent] = useState(null);
  function handleSubmit(e) {
    setLoad(true);
    e.preventDefault();
    const studentId = e.target.searchID.value.toUpperCase();
    const student = studentList.find(
      (stu) => stu.mssv.toUpperCase() === studentId
    );
    if (student) {
      console.log("success");
      setSuccess(true);
      setStudent(student);
    } else {
      setErr("Student does not exsist !");
    }
    setLoad(false);
  }
  if (load) {
    return <div>Processing...</div>;
  }

  if (success) {
    return <FormModify editStudent={student} handleModify={handleModify} />;
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="searchID">Enter student's ID you want modify</label>
      <input type="text" name="searchID" id="searchID" />
      <button>FIND</button>
      {err && <div>{err}</div>}
    </form>
  );
}
