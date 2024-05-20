import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 bg-slate-400 left-0 w-full  p-2.5 flex justify-between items-center overflow-hidden z-20">
      <a href="/" className="mr-5">
        <Image
          src="/bookstore.png"
          alt="Book Store logo"
          width="100"
          height="100"
        />
      </a>

      <nav className="flex flex-grow justify-end p-5">
        <Link href="/bookshops" className="mr-4 m-5">
          Our bookshops
        </Link>
        <Link
         href="/contacts" className="mr-4 m-5">
          Contacts
        </Link>
        <Link href="/charges" className="m-5">
          Delivery charges
        </Link>
      </nav>
    </header>
  );
}