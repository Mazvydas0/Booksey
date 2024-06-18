import prisma from "@/lib/prismaDB";

export default async function getAllBooks() {
  try {

    const allBooks = await prisma.books.findMany()
    
    return allBooks
  } catch (error) {
    throw new Error("Error while fetching books: ", error)
  }
}
