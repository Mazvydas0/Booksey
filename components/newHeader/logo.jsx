import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-36 cursor-pointer hover:animate-ping-once ">
      <Link href="/">
        <img src="/Booksey2.svg" alt="Image" className="" />
      </Link>
    </div>
  );
}
