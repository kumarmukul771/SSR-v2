import React from "react";

const Home = () => {
  return (
  <div>
    <div>I'm the Best home component</div>
    <button onClick={()=>console.log("Hi pressed")}>Press Me!</button>
  </div>
  )
};

export default Home;