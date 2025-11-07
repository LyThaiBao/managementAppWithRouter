import { Outlet } from "react-router-dom";
import Nav from "../components/Nav.jsx";
export default function ActionPage({ category = {}, className, paths = {} }) {
  return (
    <div>
      <Nav category={category} className={className} paths={paths} />
      <Outlet />
    </div>
  );
}
