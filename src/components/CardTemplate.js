import React from "react";
import { MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";

const CardTemplate = (props) => {
  let history = useHistory();

  const handleOnClick = () => {
    if (sessionStorage.userId) {
      props.setToggleCalendar(true);
      props.setLitwPackage(props.ourPackage);
    } else {
      history.push("/login");
    }
  };

  return (
    <React.Fragment>
      <div
        className="card shadow"
        style={{
          width: "18rem",
          height: "23rem",
          margin: "30px 20px",
        }}
      >
        <img
          style={{
            width: "18rem",
            height: "11rem",
          }}
          className="card-img-top"
          src={"https://cap3backend.herokuapp.com/" + props.src}
          alt="cover_photo"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          <h6 className="card-text text-center">{props.content}</h6>
          <h6 className="text-center">P{props.ourPackage?.price}</h6>
        </div>
        {sessionStorage.isAdmin === "true" ? null : (
          <div className="text-center card-footer">
            <MDBBtn
              color="unique"
              className="rounded-0 btn-block"
              onClick={handleOnClick}
            >
              {props.btnName}
            </MDBBtn>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default CardTemplate;
