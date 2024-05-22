import BookCard from "./book-card";

export default function BookList({ books }) {
  return (
    <div className="container mx-auto p-4 w-full grid grid-cols-2 gap-16 place-items-center">
      {books.map((book, index) => (
        <BookCard
          key={index}
          book={book.slug}
          title={book.title}
          altText={book.alt}
          author={book.author}
          description={book.description}
          price={book.price}
        />
      ))}
    </div>
  );
}
