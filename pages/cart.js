import { CartContext } from "@/components/CartContext";
import Navbar from "@/components/Navbar/navbar";
import axios from "axios";
import { set } from "mongoose";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  //   Order details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location?.href?.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  let totalPrice = 0;
  for (const productId of cartProducts) {
    const price =
      products.find((product) => product._id === productId)?.price || 0;
    totalPrice += price;
  }

  function lessProduct(productId) {
    removeProduct(productId);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      address,
      city,
      pincode,
      state,
      country,
      phone,
      cartProducts,
    });

    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  if (isSuccess) {
    return (
      <div>
        <Navbar />
        <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Payment Successful</h2>
          <p className="text-xl">Your order will be delivered soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-7 ">
        {!cartProducts.length > 0 && (
          <div className="md:col-start-2 md:col-span-3 flex gap-4 items-center self-center justify-self-center py-[3vw] px-[10vw] bg-gray-300 rounded font-bold px-[3vw]">
            <h3>Cart is empty </h3>
            <span className="material-symbols-rounded cursor-pointer text-3xl">
              shopping_cart
            </span>
          </div>
        )}
        {products.length > 0 && (
          <div className="md:col-start-2 md:col-span-3 bg-white m-4 rounded-lg">
            <h2 className="mb-5 py-3 text-center border-b border-3 font-bold">
              Cart
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-400">
                  <th className="py-2 md:w-[15vw]">Product</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const quantity = cartProducts.filter(
                    (id) => id === product._id
                  ).length;
                  return (
                    <tr
                      key={product._id}
                      className="border-b border-gray-100 mt-9 text-center"
                    >
                      <td className="py-2 flex flex-col items-center">
                        <a href={"product/" + product._id}>
                          <img
                            src={product.heroImg}
                            alt={product.title}
                            className="w-[25vw] h-[25vw] md:h-[5vw] md:w-[5vw] object-cover rounded-lg"
                          />
                        </a>
                        <p className="pt-2">{product.title}</p>
                      </td>
                      <td className="py-2 px-4">{quantity}</td>
                      <td>
                        <div className="flex gap-3 items-center justify-center">
                          <span
                            className="cursor-pointer material-symbols-rounded"
                            onClick={() => lessProduct(product._id)}
                          >
                            remove
                          </span>
                          {quantity * product.price}
                          <span
                            className="cursor-pointer material-symbols-rounded"
                            onClick={() => addProduct(product._id)}
                          >
                            add_circle
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="2"></td>
                  <td className="py-2 text-center">
                    Total: <b>{totalPrice}/-</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className=" md:col-start-5 md:col-end-7 m-4 px-[3vw] bg-white rounded-lg ">
          <h2 className="font-bold py-5">Order information</h2>
          <div className="flex items-center w-full justify-between">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between">
            <label>Email:</label>

            <input
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between">
            <label>Address:</label>

            <input
              type="text"
              placeholder="Address"
              value={address}
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between gap-5">
            <label>City:</label>

            <input
              type="text"
              placeholder="City"
              value={city}
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between gap-5">
            <label>Pincode:</label>

            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              name="pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between gap-5">
            <label>State:</label>

            <input
              type="text"
              placeholder="State"
              value={state}
              name="state"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between gap-5">
            <label>Country:</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              name="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full justify-between gap-5">
            <label>Phone:</label>

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            onClick={goToPayment}
            className="my-4 px-6 py-2 text-white bg-black rounded-md"
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
}
