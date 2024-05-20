import Image from "next/image";

export default function BookCard({ title, book, altText, author }) {
  return (
    <div className="flex flex-col items-center p-4 hover:text-orange-400">
      <img
        className="w-48 h-64 object-cover rounded-md shadow-md hover:opacity-50"
        src={`https://mynextbucket-mike.s3.amazonaws.com/${book}.jpeg`}
        alt={altText}
      />
      <div className="text-center mt-4">
        <p className="text-gray-600">{author}</p>
        <strong className="text-lg font-bold">{title}</strong>
      </div>
    </div>
  );
}
