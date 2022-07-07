import React from "react";
import logo from "../../images/ebook.webp";

function Contactus() {
  return (
    <>
      <div className="container text-center">
        <div className="aboutRes bg-light p-3 m-3">
          <div className="row">
            <img src={logo} className="logo2 pb-5 col-12" alt="" />
          </div>
          <div className="col-12">
            <p>
              Launched in 2020, eBookStore is a popular ebook retailer with a
              reputation for innovation, integrity and independence. We sell
              ebooks direct to millions of consumers around the world, with five
              local sales portals in the US, Canada, UK, Europe and Australia.
              You can read our ebooks online, or download them to a vast array
              of devices, using our Ebook Reader apps. eBooks.com is privately
              held and run by its founders, life-long booksellers Stephen and
              Trudy Cole. It is the only independent ebook retailer that sells
              into every country in the world, including Antarctica and the
              International Space Station. We have our own publisher licenses,
              delivery platforms, reader apps and repository of titles. Ebook
              Reader, our mobile app, is one of the most popular apps in the
              ebook market, with millions of installs. eBooks.com hosts over a
              million unique ebook titles and has millions of members. In
              addition to our popular ebook-store, we provide services to book
              publishers. Digital Comps is a system that enables publishers to
              send secure ebooks to reviewers and instructors, called
              “complimentary copies”. Ebook Engine is a system that enables
              publishers to sell ebooks direct to consumers from their own
              website. And publishers use our Ebook Collections platform to sell
              collections of their ebooks direct to institutions.
            </p>
          </div>
        </div>

        <h1>Values</h1>
        <div className="values p-3 bg-light">
          <div>
            <h3>Authenticity</h3>
            <p>
              We believe in building trust with our buyers, employees and
              partners by conducting our business transparently and ethically.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
