
import getAllBooks from "@/app/actions/getAllBooks";
import ModalBackground from "@/components/modal-backgroud";

export default async function InterceptedLoginPage({ params }) {
  const allBooks = await getAllBooks();
  const book = allBooks.find((book) => book.slug === params.BookSlug);

  return (
    <ModalBackground>
      <div className="flex justify-center items-center mt-36">
        <img
          className="max-w-[100%] h-full"
          src={`https://${process.env.NEXT_PUBLIC_AWS_S3_HOSTNAME}/${book.slug}.jpeg`}
          alt={book.alt}
        />
      </div>
    </ModalBackground>
  );
}

