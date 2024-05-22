import Link from "next/link";

export default function NotFound() {
  return (
    
      <div className="container mt-44">
        <h1>Book not found</h1>
        <p>Unfortunately, we could not find the requested book.</p>
        <br/>
        <Link href="/books" className="bg-gray-400 text-black p-2 rounded no-underline">All books</Link>
      </div>
    
  );
}
