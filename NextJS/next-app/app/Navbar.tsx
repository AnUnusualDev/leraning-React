"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Course
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/products">Produkte</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            {status === "loading" && <div>Loading...</div>}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Sign in</Link>
            )}
            {status === "authenticated" && (
              <div>
                <Link href={"/api/auth/signout"}>Sign out</Link>
              </div>
            )}
          </li>
          {status === "authenticated" && (
            <li>
              {" "}
              <Link href={"resetPassword"}>Reset password</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
