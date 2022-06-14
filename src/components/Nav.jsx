import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

function Nav() {
  const [currTopics, setCurrentTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setCurrentTopics(topics);
    });
  }, []);

  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        {currTopics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`/${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
