function Login() {
  return (
    <section>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" classname="email-login" type="text" />
        <label htmlFor="password">Password:</label>
        <input id="password" classname="password-login" type="password" />
        <button type="submit">Login now</button>
      </form>
    </section>
  );
}

export default Login;
