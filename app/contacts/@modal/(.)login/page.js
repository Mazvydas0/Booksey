"use client";

import LogIn from "@/app/login/page";
import { useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <LogIn classes="mt-0 w-full" />
    </div>
  );
}
