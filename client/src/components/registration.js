function Registration() {
  return (
    <section>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" classname="email-login" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" classname="password-login" type="password" />
        <button type="submit">Sign up now</button>
        <h4>Already have an account? Log in now</h4>
      </form>
    </section>
  );
}

export default Registration;
