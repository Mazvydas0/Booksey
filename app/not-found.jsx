import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mt-44">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page.</p>
      <br/>
      <Link
        href="/"
        className="bg-gray-400 text-black p-2 rounded no-underline"
      >
        Home page
      </Link>
    </div>
  );
}

