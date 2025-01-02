import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white flex flex-col space-y-6 justify-center items-center mt-60">
      <Link href="/products">
        <button className="bg-black text-white text-xl font-bold rounded-lg p-5">
          Client-Side-Rendering
        </button>
      </Link>

      <Link href="/books">
        <button className="bg-black text-white text-xl font-bold rounded-lg p-5">
          Server-Side-Rendering
        </button>
      </Link>
    </div>
  );
};

export default Hero;
