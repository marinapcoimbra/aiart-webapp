import "../header.css";

function Header() {
  return (
    <nav className="header-container">
      <title>Pet Name Generator</title>

      <a href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/620/620851.png"
          className="logo"
        />
      </a>
      <h3>About us</h3>
      <h3>Sign up</h3>
    </nav>
  );
}

export default Header;
