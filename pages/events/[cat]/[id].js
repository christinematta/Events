import SingleEvent from "@/src/components/events/singleEvent";
import Image from "next/image";
import React from "react";

const Page = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default Page;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return { params: { cat: path.city, id: path.id } };
  });
  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  console.log("AAA", context);
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((event) => event.id === id);

  return { props: { data: eventData } };
}
