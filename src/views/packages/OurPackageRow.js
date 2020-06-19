import React from "react";
import CardTemplate from "../../components/CardTemplate";
import { MDBBtn } from "mdbreact";

const OurPackageRow = ({
  ourPackage,
  handleDeleteOurPackage,
  setShowForm,
  toggleCalendar,
  setToggleCalendar,
  setIsEditing,
  setOurPackageToEdit,
  setLitwPackage,
}) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <CardTemplate
        src={ourPackage.packageCover}
        name={ourPackage.name}
        content={ourPackage.content}
        btnName="book"
        toggleCalendar={toggleCalendar}
        setToggleCalendar={setToggleCalendar}
        setLitwPackage={setLitwPackage}
        ourPackage={ourPackage}
      />
      {sessionStorage.isAdmin === "true" && (
        <div className="card-footer text-center">
          <MDBBtn
            color="amber"
            className="text-white btn-md"
            onClick={() => {
              setShowForm(true);
              setIsEditing(true);
              setOurPackageToEdit(ourPackage);
            }}
          >
            Edit
          </MDBBtn>
          <MDBBtn
            color="red darken-3"
            className="text-white btn-md"
            onClick={() => handleDeleteOurPackage(ourPackage._id)}
          >
            Delete
          </MDBBtn>
        </div>
      )}
    </div>
  );
};

export default OurPackageRow;
