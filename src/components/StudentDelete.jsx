import { useEffect, useState } from "react";
import { API_OPTION, getData } from "../../api";

export default function StudentDelete({ handleDelete, studentsList = [] }) {
  const [delErr, setDelErr] = useState(null);
  const [load, setLoad] = useState(false);
  const [delSuccess, setDelSuccess] = useState(null);
  function deleteFn(e) {
    setLoad(true);
    e.preventDefault();
    const mssv = e.target.searchID.value;
    const student = studentsList.find(
      (stu) => stu.mssv.toUpperCase() === mssv.toUpperCase()
    );
    if (student) {
      setDelSuccess(`DELETE SUCCESS STUDENT HAS NAME: ${student.name}`);
      handleDelete(student.id);
    } else {
      setDelErr("Student does not exsist !");
    }
    setLoad(false);
  }
  if (load) {
    return <div>Processing...</div>;
  }

  return (
    <form onSubmit={(e) => deleteFn(e)}>
      <label htmlFor="searchID">Enter ID Student</label>
      <input type="text" name="searchID" id="searchID" />
      <button type="submit">DELETE</button>
      {delSuccess && <div>{delSuccess}</div>}
      {delErr && <div>{delErr}</div>}
    </form>
  );
}
