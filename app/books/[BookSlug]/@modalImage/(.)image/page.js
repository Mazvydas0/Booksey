"use client";

import { useRouter } from "next/navigation";
import getAllBooks from "@/app/actions/getAllBooks";

export default async function IntercepteLoginPage({ params }) {
  const allBooks = await getAllBooks();
  const book = allBooks.find((book) => book.slug === params.BookSlug);
  const router = useRouter();

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="flex justify-center items-center mt-36">
        <img
          className="max-w-[100%] h-full"
          src={`https://${process.env.NEXT_PUBLIC_AWS_S3_HOSTNAME}/${book.slug}.jpeg`}
          alt={book.alt}
        />
      </div>
    </div>
  );
}
