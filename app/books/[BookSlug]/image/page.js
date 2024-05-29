import { books } from "@/app/page";
import Image from "next/image";

export default function BookImage({ params }) {
  const book = books.find((book) => book.slug === params.BookSlug);
  return (
    <div className="flex justify-center items-center mt-36">
      <img
        className="max-w-[100%] h-full"
        src={`https://${process.env.NEXT_PUBLIC_AWS_S3_HOSTNAME}/${book.slug}.jpeg`}
        alt={book.alt}
      />
    </div>
  );
}
