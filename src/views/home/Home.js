import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";
import "../../index.css";
import CardTemplate3 from "../../components/CardTemplate3";
import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {/* Carousel */}
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 main-crsl"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <div className="d-block img-item1"></div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <div className="d-block img-item2"></div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <div className="d-block img-item3"></div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <div className="d-block img-item4"></div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <div className="d-block img-item5"></div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      {/* Featured Events */}
      <div
        style={{
          marginBottom: "100px",
        }}
      >
        <h1 className="text-center py-5 teal-text font-weight-bold mt-5">
          Featured Events
        </h1>
        <div className="container">
          <Row className="d-flex justify-content-center">
            <CardTemplate3
              src="images/f1.jpg"
              title="Jason & Sarah Wedding"
              content="There is no greater happiness for a man than approaching a door at the end of a day knowing someone on the other side of that door is waiting for the sound of his footsteps."
            />
            <CardTemplate3
              src="images/f2.jpg"
              title="Brandon & Brenda Wedding"
              content="Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry."
            />
            <CardTemplate3
              src="images/f3.jpg"
              title="Jessica Debut @18"
              content="Count your life by smiles, not tears. Count your age by friends, not years. Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor."
            />
          </Row>
        </div>
      </div>
      {/* About */}
      <div
        style={{
          backgroundColor: "#f2f2f2",
          paddingBottom: "50px",
        }}
      >
        <h1 className="text-center py-5 teal-text font-weight-bold">
          About Us
        </h1>
        <div className="about">
          <p className="text-center">
            Lost in the Woods is a wedding and events venue that sits
            majestically at the beautiful city of Makati, close to Quezon City
            and Manila. This events place has been revived into one of the best
            and most exclusive wedding and events venues in the Philippines.
          </p>
          <p className="text-center">
            With competitive rates, event exclusivity (only one event scheduled
            at a time), and absolutely no corkage fees, we are dedicated to
            providing the most quality and personalized venue services at every
            level, and helping you plan and bring to life the perfect wedding or
            special event.
          </p>
          <p className="text-center">
            <a href="/contact">Contact us</a> for{" "}
            <a href="/ourpackages">rates and packages</a>, or{" "}
            <a href="/contact">book a free visit</a> today.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
