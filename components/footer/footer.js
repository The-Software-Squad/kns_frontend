import Link from "next/link";
import InstagramLogo from "../icons/instagram";
import WhatsAppLogo from "../icons/whatsapp";
import XLogo from "../icons/x";

export default function Footer() {
  return (
    <div className="px-20  font-montserrat ">
      <div className=" gap-10 lg:gap-0 py-20 flex flex-col lg:flex-row justify-evenly items-start">
        <div>
          <h1 className=" font-bold text-2xl ">Kadiyam Nurseries</h1>
          <p className="">Bring the nature with you...</p>
          {/* social */}
          <div className="flex gap-6 pt-6 items-center justify-start">
            <WhatsAppLogo />
            <InstagramLogo />
            <XLogo />
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-lg font-montserrat">Quick Links</h1>
          <div className="text-sm">
            <ul className="flex flex-col gap-2 py-3 ">
              <li>Home</li>
              <li>Vegetable Plants</li>
              <li>Flower Plants</li>
              <li>Air Purifying Plants</li>
              <li>Indoor Plants</li>
              <li>Outdoor Plants</li>
              <li>Herbal Plants</li>
              <li>Corporate Gifts</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-lg font-montserrat">Company</h1>
          <div className="text-sm">
            <ul className="flex flex-col gap-2 py-3 ">
              <Link href="/about-us">
                <li>About us</li>
              </Link>
              <Link href="/contact-us">
                <li>Contact us</li>
              </Link>
              <Link href="privacy-policy">
                <li>Privacy Policy</li>
              </Link>
              <Link href="/shipping-policy">
                <li>Shipping Policy</li>
              </Link>
              <Link href="/return-refund">
                <li>Return & Refund</li>
              </Link>
              <Link href="/terms-conditions">
                <li>Terms & Conditions</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl font-montserrat">Contact</h1>
          <ul className="flex flex-col gap-2 py-3 text-sm">
            <li> Address: 44, Pologround Industrial Area,</li>
            <li> Indore 452001</li>
            <li>Call us: 0023012012, 0123012012</li>
            <li> Mail us : info@kadiyam.co</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
