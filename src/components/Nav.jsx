import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/football">Football</Link>
        </li>
        <li>
          <Link to="/coding">Coding</Link>
        </li>
        <li>
          <Link to="/cooking">Cooking</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
