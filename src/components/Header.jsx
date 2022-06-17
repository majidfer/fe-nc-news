import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({
      username: "tickle122",
      name: "Tom Tickle",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    });
  };

  return (
    <header>
      <h1>This is Northcoders News by Feri!</h1>
      <button onClick={handleClick} className="vote-button">
        Login
      </button>
      <p className="success">{user.username} is logged in</p>
    </header>
  );
}

export default Header;
