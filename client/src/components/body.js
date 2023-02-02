import "../body.css";

function Body() {
  const images = [
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFtc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1581988108684-72e16a0453f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxob3JzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <section>
      <h1>Welcome to our pet name generator app!</h1>
      <p>
        We are here to help you find the perfect name for your new furry friend.
        <br></br>
        Whether you're looking for something unique, classic, or inspired by
        <br></br>
        nature, our app has got you covered. Simply answer a few questions about
        <br></br>
        your pet and we'll generate a list of personalized names for you to
        <br></br>
        choose from. With over thousands of names to choose from, you're sure to
        <br></br>
        find the perfect fit. Get started now and find the perfect name for your
        pet!
      </p>
      <div className="grid">
        {images.map((e) => (
          <img className="image" src={e} alt="test" />
        ))}
      </div>
    </section>
  );
}

export default Body;
