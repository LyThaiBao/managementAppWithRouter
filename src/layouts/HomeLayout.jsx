import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
export default function HomeLayout({ category = {}, className }) {
  return (
    <div>
      <Nav category={category} className={className} />
      {/*  */}
      <Outlet />
    </div>
  );
}
