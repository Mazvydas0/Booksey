import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import LoginButton from "./login-button";

export default function NavBar() {
  return (
    <header className="fixed top-0 bg-gray-400 w-full flex flex-wrap justify-between items-center z-20 p-2 h-[120px]">
      <Link href="/" className="ml-5 hidden md:block">
        {" "}
        <Image
          src="/bookstore.png"
          alt="Book Store logo"
          width="100"
          height="100"
        />
      </Link>

      <nav className="flex flex-grow lg:justify-end ">
        <ul className="flex flex-wrap space-x-4 lg:space-x-12 m-4 lg:m-10 w-full lg:w-auto">
          <li className="flex-grow md:flex-grow-0">
            <NavLink
              href="/books"
              classes=" block px-2 md:px-4 py-1 md:py-2 text-black rounded no-underline hover:bg-orange-300 text-center"
            >
              All books
            </NavLink>
          </li>

          <li className="flex-grow md:flex-grow-0">
            <NavLink
              href="/book-shops"
              classes="block px-2 md:px-4 py-1 md:py-2 text-black rounded no-underline hover:bg-orange-300 text-center "
            >
              Our bookshops
            </NavLink>
          </li>
          <li className="flex-grow md:flex-grow-0">
            <NavLink
              href="/contacts"
              classes="block px-2 md:px-4 py-1 md:py-2 text-black rounded no-underline hover:bg-orange-300 text-center"
            >
              Contacts
            </NavLink>
          </li>
          <li className="flex-grow md:flex-grow-0">
            <NavLink
              href="/delivery"
              classes="block px-2 md:px-4 py-1 md:py-2 text-black rounded no-underline hover:bg-orange-300 text-center"
            >
              Delivery charges
            </NavLink>
          </li>
          <li>
            <NavLink
              classes="block px-2 md:px-4 py-1 md:py-2 text-black rounded no-underline hover:bg-orange-300 text-center"
              href="/login"
            >
              Log in
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
