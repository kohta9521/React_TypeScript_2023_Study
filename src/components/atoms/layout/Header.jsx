import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/user">Users</Link>
    </>

  )
}

export default Header;
