import Image from "next/image";
import React from "react";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div className="events_container">
      {data.map((event) => (
        <Link
          className="event-content"
          key={event.id}
          href={`/events/${event.id}`}
        >
          <Image className='event-content-img'alt={event.title} src={event.image} width={200} height={200} />
          <h3>{event.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
