'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href, classes }) {
    const path = usePathname()
  return (
    <Link href={href} className={`${classes} ${path.startsWith(href) ? "bg-orange-300" : ""}`}>
      {children}
    </Link>
  );
}
