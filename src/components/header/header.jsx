import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Link href='/'><Image src={"/images/logo.png"} width={50} height={50} alt={"logo"} /></Link>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about_us">About us</Link>
            </li>
          </ul>

        </nav>
      </div>
      <h3 className="slide-in">Bringing People Together, One Event at a Time.</h3>
    </header>
  );
};

export default Header;
