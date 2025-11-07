import { useEffect } from "react";
import { API_OPTION, getData } from "../../api";

export default function StudentDelete({ handleDelete, studentsList = [] }) {
  function deleteFn(e) {
    e.preventDefault();
    const mssv = e.target.searchID.value;
    const student = studentsList.find(
      (stu) => stu.mssv.toUpperCase === mssv.toUpperCase
    );
    if (student) {
      handleDelete(student.id);
    } else {
      console.log(student);
    }
  }
  return (
    <form onSubmit={(e) => deleteFn(e)}>
      <label htmlFor="searchID">Enter ID Student</label>
      <input type="text" name="searchID" id="searchID" />
      <button type="submit">DELETE</button>
    </form>
  );
}
