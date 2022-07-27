import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        <div>This is example 1</div>
        <div>This is example 2</div>
        <div>This is example 3</div>
        <div>This is example 4</div>
        <div>This is example 5</div>
        <div>This is example 6</div>
        <div>This is example 7</div>
      </Container>
      <Container header="Example header" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
