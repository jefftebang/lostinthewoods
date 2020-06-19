import React from "react";
import { MDBBtn } from "mdbreact";

const CardTemplate2 = (props) => {
  return (
    <div
      className="card shadow"
      style={{
        width: "18rem",
        height: "22rem",
        margin: "30px 20px",
      }}
    >
      <div class="view view-cascade">
        <img
          style={{
            objectFit: "cover",
            width: "18rem",
            height: "18rem",
          }}
          src={"https://cap3backend.herokuapp.com/" + props.src}
          class="card-img-top"
          alt="cover photo"
        />
        <div class="mask rgba-white-slight"></div>
      </div>
      <div class="card-body card-body-cascade text-center">
        <h5 class="card-title">{props.title}</h5>
        {/* <p class="card-text">{props.content}</p> */}
        {/* <MDBBtn color="elegant">{props.btnName}</MDBBtn> */}
      </div>
      {/* <div className="card-footer text-center">
        <MDBBtn color="amber" className="text-white">
          Edit
        </MDBBtn>
        <MDBBtn color="unique" className="text-white">
          Delete
        </MDBBtn>
      </div> */}
    </div>
  );
};

export default CardTemplate2;
