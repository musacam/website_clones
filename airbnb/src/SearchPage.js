import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>31 Stays | Till to Now | 2 Guests</p>
        <h1>Founded nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://cdn.pixabay.com/photo/2016/03/16/21/17/apartment-1261781_1280.jpg"
        location="5th Avenue"
        title="Your stylish modern house"
        description="1 Bedroom | 1 Bathroom | Wifi | Kitchen | Pet Friendly"
        star={4.56}
        price="30$ / night"
        total="180$ total"
      ></SearchResult>
      <SearchResult
        img="https://cdn.pixabay.com/photo/2016/03/16/21/17/apartment-1261781_1280.jpg"
        location="5th Avenue"
        title="Your stylish modern house"
        description="1 Bedroom | 1 Bathroom | Wifi | Kitchen | Pet Friendly"
        star={4.56}
        price="30$ / night"
        total="180$ total"
      ></SearchResult>
      <SearchResult
        img="https://cdn.pixabay.com/photo/2016/03/16/21/17/apartment-1261781_1280.jpg"
        location="5th Avenue"
        title="Your stylish modern house"
        description="1 Bedroom | 1 Bathroom | Wifi | Kitchen | Pet Friendly"
        star={4.56}
        price="30$ / night"
        total="180$ total"
      ></SearchResult>
      <SearchResult
        img="https://cdn.pixabay.com/photo/2016/03/16/21/17/apartment-1261781_1280.jpg"
        location="5th Avenue"
        title="Your stylish modern house"
        description="1 Bedroom | 1 Bathroom | Wifi | Kitchen | Pet Friendly"
        star={4.56}
        price="30$ / night"
        total="180$ total"
      ></SearchResult>
      <SearchResult
        img="https://cdn.pixabay.com/photo/2016/03/16/21/17/apartment-1261781_1280.jpg"
        location="5th Avenue"
        title="Your stylish modern house"
        description="1 Bedroom | 1 Bathroom | Wifi | Kitchen | Pet Friendly"
        star={4.56}
        price="30$ / night"
        total="180$ total"
      ></SearchResult>
    </div>
  );
}

export default SearchPage;
