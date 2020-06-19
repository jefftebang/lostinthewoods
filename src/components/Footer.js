import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#015668" }}
      className="font-small pt-4"
    >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; All Rights Reserved, Lost in the Woods{" "}
          {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
