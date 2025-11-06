import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import reducer from "./helpers/reducer.js";
import { getData, API_OPTION } from "../api.js";
import StudentList from "./components/StudentList.jsx";
import StudentLayout from "./layouts/StudentLayout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import StudentDetail from "./components/StudentDetail.jsx";
import CourseDetail from "./components/CourseDetail.jsx";
import ContentHome from "./components/ContentHome.jsx";
import ActionPage from "./layouts/ActionPage.jsx";
function App() {
  const [students, dispatch] = useReducer(reducer, []);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  function getSuccess(student) {
    dispatch({ type: "GET", data: student });
  }
  useEffect(() => {
    getData("", API_OPTION({}).get, getSuccess, { setLoad, setErr });
  }, []);

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
          <Route
            path="action"
            element={
              <ActionPage
                category={{ c1: "ADD/MODIFY", c2: "DELETE" }}
                className={"nav__action"}
              />
            }
          ></Route>
        </Route>
        {/* ---------------------------------- */}

        {/* ------------------------------------------- */}
      </Routes>
    </Router>
  );
}

export default App;
