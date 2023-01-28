import { useState } from "react";

function Registration() {
  /*
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

  const local = "http://localhost:5000";

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch(`${local}/users`)
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const addUser = async (user) => {
    setLoading(true);

    try {
      await fetch(`${local}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      window.location.reload();
    } catch (error) {
      setError("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    addUser(user);
    setUser({ email: "", password: "" });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" classname="email-login" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" classname="password-login" type="password" />
        <button type="submit">Sign up now</button>
        <h4>Already have an account? Log in now</h4>
        {loading && <h4>Loading..</h4>}
        {error && <h4>{error}</h4>}
      </form>
    </section>
  );
  */
}

export default Registration;
