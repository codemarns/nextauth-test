import UserSession from "@/components/UserSession";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const menuStyles =
    "cursor-pointer select-none px-3 py-1.5 bg-primary hover:bg-primary-600 rounded text-white leading-tight duration-150 ease-in-out transition-all";

  return (
    <header className="fixed top-0 left-0 right-0 h-16 w-full px-4 sm:px-8 bg-white">
      <div className="h-full w-full max-w-7xl mx-auto grid grid-cols-[1fr,_auto,_1fr] items-center">
        <Link href={"/"}>
          <Image
            src="/mc-logo.svg"
            alt="Home"
            width="40"
            height="40"
            priority
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-4">
            <li className="list-none flex">
              <Link className={menuStyles} href={"/"}>
                Home
              </Link>
            </li>
            <li className="list-none flex">
              <Link className={menuStyles} href={"/server"}>
                Server
              </Link>
            </li>
            <li className="list-none flex">
              <Link className={menuStyles} href={"/client"}>
                Client
              </Link>
            </li>
            <li className="list-none flex">
              <Link className={menuStyles} href={"/extra"}>
                Extra
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-end">
          <UserSession />
        </div>
      </div>
    </header>
  );
};
