import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
const CustomGoogleMapWithMarker = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const key = process.env.REACT_APP_API_KEY;

  const center = {
    lat: 38.621624,
    lng: 29.381622,
  };
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        Marker
        center={center}
        zoom={15}
      >
        <MarkerF position={{ lat: 38.621624, lng: 29.381622 }} />
       
      </GoogleMap>
    </LoadScript>
  );
};

export default CustomGoogleMapWithMarker;
