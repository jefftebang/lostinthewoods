import React from "react";
// import ReactLoading from "react-loading";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Loader type="Circles" color="#015668" height="50%" width="50%" />
    </div>
  );
};

export default Loading;
