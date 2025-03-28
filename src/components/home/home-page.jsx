

import React from "react";
import EventCard from "../events/eventCard";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      <EventCard data={data}/>

    </div>
  );
};

export default HomePage;
