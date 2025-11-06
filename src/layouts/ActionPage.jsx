import { Outlet } from "react-router-dom";
import Nav from "../components/Nav.jsx";
export default function ActionPage({ category = {}, className }) {
  return (
    <div>
      <Nav category={category} className={className} />
      <Outlet />
    </div>
  );
}
