"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMob, setMob] = useState(false);

  const links = [
    {
      href: "/incidents",
      text: "Incidents",
    },
    {
      href: "/arguments",
      text: "Arguments",
    },
    {
      href: "/stats",
      text: "Stats",
    },
  ];

  return (
    <nav className="bg-gray-100">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}

          <p className="text-3xl font-bold ">Gettalong</p>

          {/* Primary Nav */}
          <div className="hidden items-center justify-center space-x-6 text-sm font-light md:flex">
            {links.map((link, idx) => (
              <a key={idx} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>

          {/* secondary nav */}
          <div className="hidden items-center space-x-4 text-sm font-light md:flex">
            <a href="/account">Account</a>
          </div>

          {/* mob button */}
          <button
            onClick={() => setMob(!isMob)}
            className="flex items-center md:hidden"
          >
            menu
          </button>
        </div>
      </div>
      {/* mob nav */}
      {isMob ? (
        <div className="bg-gray-200 absolute h-full w-full bg-primary md:hidden">
          <div className="flex flex-col p-8 space-y-8">
            {links.map((link, idx) => (
              <a key={idx} href={link.href}>
                {link.text}
              </a>
            ))}
            <a href="/account" className="bg-">
              Account
            </a>

            <button
              onClick={() => setMob(!isMob)}
              className="flex items-center md:hidden"
            >
              x
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
    // <nav className="navbar">
    //   <a href="/">
    //     <h1 className="text-6xl font-bold">Autofy</h1>
    //   </a>
    //   <div className="flex w-1/2 items-center justify-end space-x-8 bg-slate-200">

    //   </div>
    // </nav>
  );
}
