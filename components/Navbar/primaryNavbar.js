import { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "../CartContext";

export default function PrimaryNavbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {cartProducts} = useContext(CartContext)
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="w-full bg-orange-200 grid grid-cols-3 items-center justify-items-center px-[5vw] py-2 md:py-3">
      {/* <span
        className="text-3xl justify-self-start ml-[2vw] md:hidden material-symbols-rounded"
        onClick={toggleMenu}
      >
        menu
      </span>

      {isMenuOpen && (
        <div className="absolute w-full h-full bg-orange-100 start-0 top-0">
          <span className="absolute top-5 end-10 text-3xl material-symbols-rounded" onClick={toggleMenu}>menu_open</span>

          <div className='
          flex flex-col gap-8 items-start justify-center py-10 px-10'>
            <Link href="/" onClick={toggleMenu}>Home</Link>  
            <Link href="/" onClick={toggleMenu}>Vegetable Plants</Link>
            <Link href="/" onClick={toggleMenu}>Flower Plants</Link>
            <Link href="/" onClick={toggleMenu}>Air Purifying Plants</Link>    
        </div>
        </div>
      )} */}

      {/* Logo  */}
      <div className="col-start-1 justify-self-start">
        <Link href="/"><img
          src="/logo.jpeg"
          className="w-[19vw] md:w-[12vw] lg:w-[8vw] rounded-lg"
        /></Link>
      </div>

      {/* Search */}
      <div className="row-start-3 col-start-1 col-end-4 md:row-start-1 md:col-start-2 md:col-end-2 justify-end w-full flex items-center justify-between gap-4 bg-white mt-2 md:mt-0 px-4 py-0 mt-2 rounded-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent outline-none border-b-2 border-transparent focus:border-b focus:border-orange-500 text-black"
        />
        <span className="material-symbols-rounded">search</span>
      </div>

      {/* User & Cart */}
      {!isMenuOpen && <div className="col-start-3 justify-self-end flex gap-6">
        <span className="material-symbols-rounded cursor-pointer text-3xl">
          person
        </span>
        <Link href="/cart">
        <div className="relative">
        <span className="material-symbols-rounded cursor-pointer text-3xl">
          shopping_cart
        </span>
        <p className="absolute top-[-0.5vw] end-[-1vw] bg-orange-800 px-[1vw] lg:px-[0.5vw] text-white text-sm text-center rounded-full">{cartProducts.length}</p>
        </div>
        </Link>
      </div>}
    </div>
  );
}
