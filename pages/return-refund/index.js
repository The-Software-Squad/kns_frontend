import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      {/* header */}
      <div className="">
        <h1 className="text-center text-7xl lg:text-9xl py-20 font-montserrat font-black">
          Return Policy
        </h1>
      </div>
      {/* content */}
      <div className="px-20 leading-10 font-light">
        <div className="my-16">
          <h2 className=" font-semibold text-2xl text-teal-700">
            Our Return policy:
          </h2>
          <p className="my-3">
            We offer 10 days refund policy. If you have received any wrong
            products, please let us know as soon as possible. Feel free to email
            us at info@KadiyamNursery.co or give us a call on ++91124124124141.
          </p>
          <p className="my-3">
            We will initiate a refund or send the replacement product
            accordingly.
          </p>
          <p className="my-3">
            We will initiate a refund or send the replacement product
            accordingly.
          </p>

          <ul className="list-disc list-inside">
            <li>
              If any of our plant or other product is delivered to the wrong
              address provided by the user.
            </li>
            <li>
              Any defect or quality issues that took place due to improper
              handling.
            </li>
          </ul>

          <p className="my-3">
            In case we fail to fulfill your order or have any missing parts, we
            shall inform you at the earliest and provide you with a complete
            refund.
          </p>

          <p className="my-3">
            For prepaid orders the refund will be credited through the same mode
            used by the customer, once processed by Kyari, it can take 2 to 3
            days to reflect in your account.
          </p>
          <p className="my-3">
            For COD orders fill this form, and team will process the refund in 5
            to 6 working days.
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
