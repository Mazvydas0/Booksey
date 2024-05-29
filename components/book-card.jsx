import Image from "next/image";
import Link from "next/link";

export default function BookCard({ title, book, altText, author }) {
  return (
    <Link href={`/books/${book}`} className="no-underline text-black ">
      <div
        id="bookcard"
        className="flex flex-col items-center justify-center p-4 w-52 hover:text-orange-300"
      >
        <Image
          className="object-cover rounded-md shadow-md hover:opacity-50"
          src={`https://${process.env.NEXT_PUBLIC_AWS_S3_HOSTNAME}/${book}.jpeg`}
          alt={altText}
          width="192"
          height="256"
        />
        <div className="text-center mt-4">
          <p className="text-gray-600">{author}</p>
          <span className="text-lg font-bold">{title}</span>
        </div>
      </div>
    </Link>
  );
}