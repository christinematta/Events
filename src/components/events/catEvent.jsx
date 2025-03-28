import Image from "next/image";
import React from "react";
import Link from "next/link";
import EventCard from "./eventCard";

const CatEvent = ({ data }) => {
  const cityCapitalized =
    data[0].city.charAt(0).toUpperCase() + data[0].city.slice(1);
  return (
    <div >
      <h1>{data.length > 0 ? `Events in ${cityCapitalized}` : "No Events"}</h1>
      <br />
      <EventCard  data={data} pathFormat="city" />
    </div>
  );
};

export default CatEvent;
