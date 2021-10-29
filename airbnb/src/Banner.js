import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search></Search>}
      </div>
      <div className="banner__info">
        <h1>Get your imagination</h1>
        <h5>Plan your passion</h5>
        <Button onClick={() => history.push("/search")} variant="outlined"> Explore nearby </Button>
      </div>
    </div>
  );
}

export default Banner;
