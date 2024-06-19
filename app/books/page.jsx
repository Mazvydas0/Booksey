import BookList from "@/components/book-list";
import getAllBooks from "../actions/getAllBooks";

export default async function Books() {
  const allBooks = await getAllBooks();
  return (
    <div>
      <BookList books={allBooks} />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: `All Books | Booksey`,
    description: "Books sold by us",
  };
}
