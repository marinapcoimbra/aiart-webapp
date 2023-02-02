import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import Login from "./components/login";
import Registration from "./components/registration";
import UserPage from "./components/userpage";

import { useState } from "react";

function App() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [error, setError] = "";

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      setError(error);
    }
  }

  return (
    <div>
      <Header />
      <Body />
      <Footer />
      <LandingPage />
      <Login />
      <UserPage />
      <Registration />
      <main className="styles-main">
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className="styles-result">{result}</div>
        {error && <h4>Sorry an error occurred</h4>}
      </main>
    </div>
  );
}

export default App;
