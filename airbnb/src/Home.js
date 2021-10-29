import React from "react";
import "./Home.css"
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return <div className="home">
      <Banner></Banner>
      <div className="home__section">
        <Card src="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg" title="Room 101" description="Small town boy in a big arcade."></Card>
        <Card src="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg" title="Room 101" description="Small town boy in a big arcade."></Card>
        <Card src="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg" title="Room 101" description="Small town boy in a big arcade."></Card>
      </div>
      <div className="home__section">
        <Card src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg" title="Room 101" description="Small town boy in a big arcade." price="100$/night"></Card>
        <Card src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg" title="Room 101" description="Small town boy in a big arcade." price="100$/night"></Card>
        <Card src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg" title="Room 101" description="Small town boy in a big arcade." price="100$/night"></Card>
      </div>
  </div>;
}

export default Home;
