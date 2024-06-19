import NavLink from "../nav-link";

export default function NavBar() {
  const navItems = [
    { name: "All books", href: "/books" },
    { name: "Our bookstores", href: "/book-shops" },
    {
      name: "Contacts",
      href: "/contacts"
    },
    { name: "Delivery", href: "/delivery" },
  ];
  return (
    <nav className="flex gap-5 justify-between self-stretch my-auto text-sm text-stone-900">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex gap-1.5 justify-center whitespace-nowrap"
        >
          <NavLink
            classes="flex text-decoration-none hover:opacity-30  text-black"
            href={item.href}
          >
            <div>{item.name}</div>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}
