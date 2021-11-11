import { React, useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzYWNhbSIsImEiOiJja3ZudHdwbmgzZTdtMnZxNWt0cHFra252In0.AYkWADelISWPEELq8FuFgg";

function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    addToMap(map)

  });

  const addToMap = (map) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
    .setLngLat([12.554729, 55.70651]).addTo(map);
  }

  return <Wrapper id="map"></Wrapper>;
}

export default Map;

const Wrapper = tw.div`
  flex-1
`;
