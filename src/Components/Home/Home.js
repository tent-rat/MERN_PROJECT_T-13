import React from "react";
import carimg1 from "../../images/carimg1.jpeg";
import carimg2 from "../../images/carimg2.png";
import carimg3 from "../../images/carimg3.webp";
import { Carousel } from "react-bootstrap";
function Home() {
  return (
    <>
      <div className="bg-dark">
        <div className="w-75 bg-dark mx-auto p-2 d-block text-white">
          <Carousel className="mx-auto">
            <Carousel.Item>
              <img
                className="col-12 d-block bg-dark mx-auto"
                src={carimg1}
                alt="Ebook Logo2"
              />
              <Carousel.Caption>
                <h3>New ADDITIONS would be maintained on our home here!!!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="col-12 d-block bg-dark mx-auto"
                src={carimg2}
                alt="Ebook Logo2"
              />

              <Carousel.Caption>
                <h3>New ADDITION!!!</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="col-12 d-block bg-dark mx-auto"
                src={carimg3}
                alt="Ebook Logo2"
              />

              <Carousel.Caption>
                <h3>New ADDITION!!!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* some text about  */}
        <div className="text-white p-3 container ">
          <p>
            Launched in 2020, eBookStore is a popular ebook retailer with a
            reputation for innovation, integrity and independence. We sell
            ebooks direct to millions of consumers around the world, with five
            local sales portals in the US, Canada, UK, Europe and Australia. You
            can read our ebooks online, or download them to a vast array of
            devices, using our Ebook Reader apps. eBooks.com is privately held
            and run by its founders, life-long booksellers Stephen and Trudy
            Cole. It is the only independent ebook retailer that sells into
            every country in the world, including Antarctica and the
            International Space Station. We have our own publisher licenses,
            delivery platforms, reader apps and repository of titles. Ebook
            Reader, our mobile app, is one of the most popular apps in the ebook
            market, with millions of installs. eBooks.com hosts over a million
            unique ebook titles and has millions of members. In addition to our
            popular ebook-store, we provide services to book publishers. Digital
            Comps is a system that enables publishers to send secure ebooks to
            reviewers and instructors, called “complimentary copies”.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
