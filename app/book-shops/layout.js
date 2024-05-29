export default function BooksShopLayout({description, map}){
    return (
      <div className="flex h-screen w-screen">
        <div className="flex-1 mt-40 m-8 border">description {description}</div>
        <div className="flex-1 mt-40 m-8 border p-2">{map}</div>
      </div>
    );
}
export function generateMetadata() {
  return {
    title: `Our Bookshops | Book Store Next`,
    description: "Find out where our physical shops are located",
  };
}
