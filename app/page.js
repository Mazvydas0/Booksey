import ImageSlideshow from "@/components/images/image-slideshow";

import BookList from "@/components/book-list";

import getAllBooks from "./actions/getAllBooks";

export default async function Home() {
  const allBooks = await getAllBooks();
  return (
    <>
      <ImageSlideshow />
      <main className="w-full mx-auto ">
        <BookList books={allBooks} />
      </main>
    </>
  );
}
