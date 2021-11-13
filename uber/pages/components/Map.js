import { React, useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzYWNhbSIsImEiOiJja3ZudHdwbmgzZTdtMnZxNWt0cHFra252In0.AYkWADelISWPEELq8FuFgg";

const Map = (props) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if(props.pickupCoordinates){
      addToMap(map, props.pickupCoordinates)
    }

    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.pickupCoordinates,
        props.dropoffCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);

    const marker2 = new mapboxgl.Marker({ color: 'black'})
    .setLngLat(coordinates)
    .addTo(map);

  }

  return <Wrapper id="map"></Wrapper>;
}

export default Map;

const Wrapper = tw.div`
  flex-1 h-1/2
`;
