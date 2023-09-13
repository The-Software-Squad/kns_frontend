import { useState } from "react";

export default function PrimaryNavbar() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full bg-orange-200 grid grid-cols-3 items-center justify-items-center px-[5vw] py-3">
      {/* Logo  */}
      <div className="justify-self-start">
        <img src="logo.jpeg" className="w-[8vw] rounded-lg" />
      </div>

      {/* Search */}
      <div className="w-full flex items-center justify-between gap-4 bg-white px-4 py-3 rounded-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent outline-none border-b-2 border-transparent focus:border-orange-500 text-black"
        />
        <span className="material-symbols-rounded">search</span>
      </div>

      {/* User & Cart */}
      <div className="justify-self-end flex gap-6">
        <span className="material-symbols-rounded cursor-pointer text-3xl">person</span>
        <span className="material-symbols-rounded cursor-pointer text-3xl">shopping_cart</span>
      </div>
    </div>
  );
}
