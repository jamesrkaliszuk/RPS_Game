"use client";

import Link from "next/link";
import Image from "next/image";
import "./user.css";
import { useState } from "react";

export default function page() {
  const [data, setData] = useState({
    user: "",
    password: "",
  });
  return (
    <>
      <div className="flex justify-end items-center h-screen relative">
        <Image
          src="/createUser_bg.jpg"
          fill={true}
          alt="symbolism of the game rock paper scissors"
          className="absolute z-0 object-cover brightness-50"
        />
        <form className="flex flex-col justify-center items-center gap-3 border border-black rounded-lg w-1/3 h-2/4 font-primary z-10 bg mr-10">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="user"
            placeholder="Create A Username"
            className="border border-black font-primary"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create A Password"
            className="border border-black font-primary"
          />
          <label htmlFor="repeat">Repeat Password</label>
          <input
            type="password"
            name="repeat"
            placeholder="Re-enter Password"
            className="border border-black font-primary"
          />
          <button
            type="submit"
            className="border border-black p-2 rounded-md hover:bg-slate-200 font-primary w-20"
          >
            Submit
          </button>
          <Link href={"/"} className="homeLink font-primary">
            Game Page
          </Link>
        </form>
      </div>
    </>
  );
}
