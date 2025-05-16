import React from "react";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  return (
    <div className="single_event">
      <h2>{data.title}</h2>
      <Image
        className="single_event_img"
        src={data.image}
        alt={data.title}
        width={1000}
        height={500}
      ></Image>
      <p>{data.description}</p>
      <div className="event_input">
        <h3 style={{ textTransform: "capitalize" }}>
          Get registered for this event!
        </h3>
        <input className="email_input" type="email" name="email" id="" placeholder="Please insert your email"/> <button>Submit</button>
      </div>
    </div>
  );
};

export default SingleEvent;
