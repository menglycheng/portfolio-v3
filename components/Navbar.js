import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuItems from "../utils/menuItems";
import { useRouter } from "next/router";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Navbar = () => {
  const router = useRouter();
  const [greeting, setGreeting] = useState([]);
  const [text, count] = useTypewriter({
    words: greeting,
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 1 && time <= 12) {
      setGreeting(["Good Morning", "អរុណសួស្ដី", "おはよう"]);
    } else if (time > 12 && time <= 18) {
      setGreeting(["Good Afternoon", "ទិវាសួស្តី", "こんにちは"]);
    } else if (time > 18 && time <= 24) {
      setGreeting(["Good Evening", "សាយ័ណ្ហសួស្ដី", "こんばんは"]);
    }
  }, []);
  return (
    <div className="w-full flex justify-between mt-5">
      <h2 className="text-white capitalize font-bold">
        <span>
          {text} <Cursor cursorColor="white" />
        </span>
      </h2>
      <div className="flex">
        {MenuItems.map((item, index) => {
          return (
            <div key={item.id}>
              <Link
                href={item.url}
                className={`px-3  ${
                  router.asPath === item.url
                    ? " underline decoration-wavy text-blue-500 "
                    : ""
                }`}
              >
                <a>{item.label}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
