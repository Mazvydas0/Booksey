import Link from "next/link";

export default function AuthButton() {
  return (
    <Link href="/login">
      <button className="px-6 py-2 rounded-full bg-stone-900 text-white text-sm shadow-md hover:bg-stone-700">
        Sign in
      </button>
    </Link>
  );
}
