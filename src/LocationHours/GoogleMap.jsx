import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={10}
      initialCenter={{
        lat: 31.63398,
        lng: 74.872261,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBNr2Hj9OZCtu28O93JGX2h3HJYGD22MbI",
})(MapContainer);
