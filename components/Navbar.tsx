"use client";

import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser(); // ✅ gets logged-in user or null

  return (
    <nav className="navbar flex justify-between items-center p-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={90}
          height={88}
        />
      </Link>

      {/* Navigation Links + Auth */}
      <div className="flex items-center gap-8">
        <NavItems />

        <div>
          {user ? (
            <UserButton /> // logged in
          ) : (
            <Link href="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;