import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 z-50 h-20 bg-white border-b border-gray-200 w-full flex justify-center items-center flex-col">
      <div className="w-10/12 flex items-center justify-between h-full">
        <Link href="/" passHref>
          <div className="flex items-center gap-5">
            <Image
              src="/store.webp"
              height={50}
              width={50}
              alt="Logo"
              className="rounded-lg"
            />
            <h1 className="font-extrabold text-xl">STORE_NAME</h1>
          </div>
        </Link>

        <div className="fixed left-0 w-full lg:w-fit bottom-0 py-3 lg:py-0 flex justify-evenly lg:justify-center bg-white lg:static lg:gap-8">
          <Link href="/" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500 lg:hidden">
              <i className="fa-solid fa-home text-2xl"></i>
              <h1 className="text-sm font-bold">Home</h1>
            </div>
          </Link>
          <Link href="/search" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500 lg:hidden">
              <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              <h1 className="text-sm font-bold">Search</h1>
            </div>
          </Link>
          <Link href="/products" passHref>
            <div className="flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500 hidden lg:flex">
              <i className="fa-solid fa-box text-2xl"></i>
              <h1 className="text-sm font-bold">Categories</h1>
            </div>
          </Link>
          <Link href="/bag" passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500">
              <i className="fa-solid fa-bag-shopping text-2xl"></i>
              <h1 className="text-sm font-bold">Bag</h1>
            </div>
          </Link>
          <div className="flex flex-col justify-center items-center cursor-pointer hover:text-black text-gray-500">
            <i className="fa-solid fa-user text-2xl"></i>
            <h1 className="text-sm font-bold">Account</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
