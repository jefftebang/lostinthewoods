import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-center py-5 teal-text font-weight-bold mt-5">
          Our Contact Informations
        </h1>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "80px" }}
      >
        <div>
          <div>
            <h4
              className="py-2 teal-text font-weight-bold mt-5"
              style={{ marginLeft: "-30px" }}
            >
              Call or text:
            </h4>
            <ul>
              <li>(02) 854-6589</li>
              <li>+63 917 234 5678</li>
              <li>+63 929 876 5432</li>
            </ul>
          </div>
          <div>
            <h4
              className="py-2 teal-text font-weight-bold mt-5"
              style={{ marginLeft: "-30px" }}
            >
              Email:
            </h4>
            <ul>
              <li>welcome@lostinthewoods.com</li>
            </ul>
          </div>
          <div>
            <h4
              className="py-2 teal-text font-weight-bold mt-5"
              style={{ marginLeft: "-30px" }}
            >
              Address:
            </h4>
            <ul>
              <li>Sen. Gil Puyat Ave. Makati, Metro Manila 1200</li>
            </ul>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7312593565757!2d121.03125941483977!3d14.557354689830014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9b8d33b2c6d%3A0xb0c2f766338a92bd!2sZuitt%20Makati!5e0!3m2!1sen!2sph!4v1592486629138!5m2!1sen!2sph"
            width="550"
            height="450"
            frameborder="0"
            style={{ border: "0", marginLeft: "100px", marginBottom: "50px" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
