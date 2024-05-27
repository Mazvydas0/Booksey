import Image from "next/image";
import NavBar from "@/components/navbar";
import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";
import BookCard from "@/components/book-card";
import BookList from "@/components/book-list";
import Link from "next/link";

export const books = [
  {
    title: "Vilniaus Dziazas",
    author: "Ricardas Gavelis",
    description: "A sister book to Vilniaus Pokeris, which i haven't read yet",
    alt: "Book of R. Gavelis",
    slug: "vilniausdziazas",
    price: 18.99,
  },
  {
    title: "Vilniaus Pokeris",
    author: "Ricardas Gavelis",
    description: "Hallucinogenic book about life in Vilnius, Lithuania",
    alt: "Book of R. Gavelis",
    slug: "vilniauspokeris",
    price: 19.99,
  },
  {
    title: "Kapitono Granto vaikai",
    author: "Jules Verne",
    description: "Classic book about sailor adventures",
    alt: "Book of Jules Verne",
    slug: "kapitonogranto",
    price: 14.99,
  },
  {
    title: "Siaures pasvaiste naujagimiui",
    author: "Algimantas Cekuolis",
    description: "A book full of random stories and facts",
    alt: "Book of A. Cekuolis",
    slug: "siaurespasvaiste",
    price: 13.99,
  },
];

export default function Home() {
  return (
    <>
      <ImageSlideshow />
      <main className="w-full mx-auto mt-32 ">
        <BookList books={books} />
      </main>
    </>
  );
}
