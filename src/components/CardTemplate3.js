import React from "react";

const CardTemplate3 = (props) => {
  return (
    <div
      className="card shadow"
      style={{
        width: "18rem",
        height: "25rem",
        margin: "30px 20px",
      }}
    >
      <div class="view view-cascade">
        <img
          style={{
            objectFit: "cover",
            width: "18rem",
            height: "14rem",
          }}
          src={props.src}
          class="card-img-top"
          alt="cover photo"
        />
        <div class="mask rgba-white-slight"></div>
      </div>
      <div class="card-body card-body-cascade text-center">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.content}</p>
      </div>
    </div>
  );
};

export default CardTemplate3;
