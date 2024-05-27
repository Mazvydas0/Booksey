import BookList from "@/components/book-list";
import { books } from "../page";

export default function Books() {
  return (
    <div className="mt-20 ">
      <BookList books={books} />
    </div>
  );
}
