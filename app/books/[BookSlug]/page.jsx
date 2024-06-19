import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import getAllBooks from "@/app/actions/getAllBooks";


const allBooks = await getAllBooks();
export default async function BookDetail({ params }) {
  const book = allBooks.find((book) => book.slug === params.BookSlug);
  if (!book) notFound()
    
    return (
      <div className="container mx-auto my-8 mt-44">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4">
          <Link
            href={`http://localhost:3000/books/${params.BookSlug}/image`}
            className="inline-block"
          >
            <Image
              className="object-cover rounded-md shadow-md hover:opacity-50"
              src={`https://${process.env.NEXT_PUBLIC_AWS_S3_HOSTNAME}/${book.slug}.jpeg`}
              alt={book.alt}
              width="192"
              height="256"
            />
          </Link>
        </div>
        <div className="w-full md:w-2/3 px-4">
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl mb-2">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-xl mb-2">
            <strong>Price:</strong> {book.price} €
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-lg">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const book = allBooks.find((book) => book.slug === params.BookSlug);
  if (!book) return

  return {
    title: `${book.title} | Booksey`,
    description: book.description,
  };
}
