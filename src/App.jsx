import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import reducer from "./helpers/reducer.js";
import {
  getData,
  API_OPTION,
  patchData,
  deleteData,
  postData,
} from "../api.js";
import StudentList from "./components/StudentList.jsx";
import StudentLayout from "./layouts/StudentLayout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import StudentDetail from "./components/StudentDetail.jsx";
import CourseDetail from "./components/CourseDetail.jsx";
import ContentHome from "./components/ContentHome.jsx";
import ActionPage from "./layouts/ActionPage.jsx";
import StudentAdd from "./components/StudentAdd.jsx";
import StudentDelete from "./components/StudentDelete.jsx";
import StudentModify from "./components/StudentModify.jsx";
function App() {
  const [students, dispatch] = useReducer(reducer, []);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [editStudent, setEditStudent] = useState(null);
  function getSuccess(student) {
    dispatch({ type: "GET", data: student });
  }
  function postSuccess(student) {
    dispatch({ type: "POST", data: student });
  }
  function deleteSuccess(student) {
    dispatch({ type: "DELETE", mssv: student.mssv });
  }
  useEffect(() => {
    getData("", API_OPTION({}).get, getSuccess, { setLoad, setErr });
  }, []);

  function handleAdd(student) {
    postData("", API_OPTION(student).post, postSuccess, { setLoad, setErr });
  }

  function handleDelete(id) {
    deleteData(id, API_OPTION({}).delete, deleteSuccess, { setLoad, setErr });
  }
  // ---------------------RENDER-----------------------
  if (load) {
    return <div>Load...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<StudentLayout />}>
  //         <Route index element={<HomeLayout />} />
  //         <Route
  //           path="students"
  //           element={<StudentList studentList={students} />}
  //         />
  //         <Route path="students/:studentId" element={<StudentDetail />} />
  // <Route
  //   path="students/:studentId/courses/:courseId"
  //   element={<CourseDetail />}
  // />
  //         <Route path="*" element={<div>404 Not Found</div>} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout
              category={{
                c1: "HOME",
                c2: "VIEW STUDENTS",
                c3: "ADD,DELETE OR MODIFY STUDENT",
              }}
              className={"nav__home"}
              paths={{ c1: "home", c2: "show/students", c3: "action" }}
            />
          }
        >
          <Route path="home" element={<ContentHome />} />
          <Route
            path="show/students"
            element={<StudentList studentList={students} />}
          />
          <Route path="show/students/:studentId" element={<StudentDetail />} />
          <Route
            path="show/students/:studentId/courses/:courseId"
            element={<CourseDetail />}
          />
          {/* ---------------------------------- */}

          <Route
            path="action"
            element={
              <ActionPage
                category={{ c1: "ADD", c2: "MODIFY", c3: "DELETE" }}
                className={"nav__action"}
                paths={{
                  c1: "action/add",
                  c2: "action/modify",
                  c3: "action/delete",
                }}
              />
            }
          >
            <Route
              path="/action/add"
              element={<StudentAdd handleAdd={handleAdd} />}
            />
            <Route
              path="/action/delete"
              element={
                <StudentDelete
                  handleDelete={handleDelete}
                  studentsList={students}
                />
              }
            />
            <Route path="/action/modify" element={<StudentModify />} />
          </Route>
        </Route>

        {/* ------------------------------------------- */}
      </Routes>
    </Router>
  );
}

export default App;
