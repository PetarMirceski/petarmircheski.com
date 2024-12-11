"use client";
import Link from "next/link";
import { useState } from "react";

export const EmailReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };
  return (
    <div>
      {!isRevealed ? (
        <button
          onClick={handleReveal}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Click to reveal email
        </button>
      ) : (
        <Link
          className="text-blue-400 hover:text-blue-300"
          href="mailto:petar.mirceski1998@gmail.com"
        >
          petar.mirceski1998@gmail.com
        </Link>
      )}
    </div>
  );
};
