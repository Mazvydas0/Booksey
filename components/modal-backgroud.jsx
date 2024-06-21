"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ModalBackground({ children }) {
  const router = useRouter();

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      router.back();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
}
