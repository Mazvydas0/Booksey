"use client";

import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function LoginButton({ classes }) {
  const path = usePathname();
  console.log("path" , path)
  const isLogin = path.endsWith("login");
  return (
    <NavLink classes={classes} href="/login">
      Log In
    </NavLink>
  );
}
