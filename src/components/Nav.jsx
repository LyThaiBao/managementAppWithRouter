import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav({ category = {}, className }) {
  return (
    <nav className={`${className}` || ""}>
      {category.c1 && <Link to={"/home"}>{category.c1}</Link>}

      {category.c2 && <Link to={"/show/students"}>{category.c2}</Link>}

      {category.c3 && <Link to={"/action"}>{category.c3}</Link>}
    </nav>
  );
}
