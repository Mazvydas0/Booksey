import BookList from "@/components/book-list";
import getAllBooks from "../actions/getAllBooks";

export default async function Books() {
  const allBooks = await getAllBooks();
  return (
    <div className="mt-20 ">
      <BookList books={allBooks} />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: `All Books | Book Store Next`,
    description: "Books sold by us",
  };
}
