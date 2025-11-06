import { Outlet, useParams } from "react-router-dom";
export default function StudentLayout() {
  const { studentId, courseId } = useParams();
  return (
    <div>
      <h2>
        {courseId
          ? "COURSE DETAIL"
          : studentId
          ? "STUDENT DETAIL"
          : "ALL STUDENT"}
      </h2>
      <Outlet />
    </div>
  );
}
