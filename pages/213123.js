import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      {/* header */}
      <div className="">
        <h1 className="text-center text-7xl lg:text-9xl py-20 font-montserrat font-black">
          Privacy Policy
        </h1>
      </div>
      {/* content */}
      <div className="px-20 leading-10 font-light">
        <div className="my-16">
          <h2 className=" font-semibold text-2xl text-teal-700">
            Decoration with life:
          </h2>
          <p>
            To decorate your interior landscape with greenery, to give it a
            luxurious vibe, to brighten up your indoor garden, to make you feel
            calm like you are in the arms of nature. Our plants are grown with
            the utmost care to keep them healthy & happy. It is no surprise that
            spending time with nature brings tranquility. With a busy lifestyle,
            having a lovely indoor garden is perfect to feel the embrace of
            nature. And for these plants, every planter is crafted to reflect
            class & uniqueness, elegance & style. Our planters are designed
            carefully keeping in mind your decór needs. Not only are our
            planters durable, but they will also look amazing in your beautiful
            home. We are here to give your garden a makeover.
          </p>
        </div>
        <h2 className=" font-semibold text-2xl text-teal-700">
          With all the varities
        </h2>
        <p>
          With our decor options, you can give your home & office a lavish look.
          Whether you need a houseplant, a planter, or a succulent to decorate
          your home & office; we are here for you. We have a wide range of decór
          options, from traditional design to contemporary, from decorative
          plants to succulents, and from planters to planter stands; we have
          everything that will make you fall in love with your indoors. Every
          day we are learning something new about the world of plants,
          succulents, and planters; to improve our products to serve you in the
          best way possible.
        </p>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
