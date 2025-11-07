import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav({ category = {}, paths = {}, className }) {
  return (
    <nav className={`${className}` || ""}>
      {category.c1 && <Link to={`/${paths.c1}`}>{category.c1}</Link>}

      {category.c2 && <Link to={`/${paths.c2}`}>{category.c2}</Link>}

      {category.c3 && <Link to={`/${paths.c3}`}>{category.c3}</Link>}
    </nav>
  );
}
