import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      {/* header */}
      <div className="">
        <h1 className="text-center text-7xl lg:text-9xl py-20 font-montserrat font-black">
          Shipping Policy
        </h1>
      </div>
      {/* content */}
      <div className="px-20 leading-10 font-light">
        <div className="my-16">
          <h2 className=" font-semibold text-2xl text-teal-700">
            Our Shipping policy:
          </h2>
          <p className="my-3">
            We ensure fast delivery and hence, we process orders immediately.
            Your product will be shipped to you in 3-4 working days. If you want
            to make any changes or cancel your order, connect with us on
            info@KadiyamNursery.co or ++912412412231, if the order is not ready
            or it is not shipped, we will try to modify/cancel your order
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
