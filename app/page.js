import Image from "next/image";
import NavBar from "@/components/navbar";
import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";
import BookCard from "@/components/book-card";
import BookList from "@/components/book-list";

const books = [
  {
    title: "Vilniaus Dziazas",
    name: "book1",
    alt: "Book of R. Gavelis",
    author: "Ricardas Gavelis",
  },
  {
    title: "Vilniaus Pokeris",
    name: "book2",
    alt: "Book of R. Gavelis",
    author: "Ricardas Gavelis",
  },
  {
    title: "Kapitono Granto vaikai",
    name: "book3",
    alt: "Book of Jules Verne",
    author: "Jules Verne",
  },
  {
    title: "Siaures pasvaiste naujagimiui",
    name: "book4",
    alt: "Book of A. Cekuolis",
    author: "Algimantas Cekuolis",
  },
];

export default function Home() {
  return (
    <>
      <ImageSlideshow />
      <main className="max-w-full mx-auto mt-32">
        <BookList books={books} />
      </main>
    </>
  );
}
