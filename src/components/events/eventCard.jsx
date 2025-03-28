import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ data, pathFormat }) => {
  return (
    <div>
      {data.map((event) => {
        const eventPath =
          pathFormat === "city"
            ? `/events/${event.city}/${event.id}`
            : `/events/${event.id}`;
        return (
          <Link className="card" key={event.id} href={eventPath}>
            <Image
              className="card_img"
              src={event.image}
              width={200}
              height={200}
              alt={event.title}
            />
            <div className="card_content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default EventCard;
