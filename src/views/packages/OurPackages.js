import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import OurPackageRow from "./OurPackageRow";
import OurPackageForm from "./OurPackageForm";
import Loading from "../../components/Loading";
import { MDBBtn } from "mdbreact";
import CalendarModal from "../bookings/CalendarModal";
import { useHistory } from "react-router-dom";

const OurPackages = (props) => {
  const [ourPackages, setOurPackages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [ourPackageToEdit, setOurPackageToEdit] = useState({});
  const [indexToEdit, setIndexToEdit] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [litwPackage, setLitwPackage] = useState({});

  let history = useHistory();

  useEffect(() => {
    fetch("https://cap3backend.herokuapp.com/admin/ourpackages")
      .then((res) => res.json())
      .then((res) => {
        setOurPackages(res);
        setIsLoading(false);
      });
  }, []);

  const handleSaveOurPackage = (name, content, price, packageCover) => {
    setIsLoading(true);
    let newOurPackages = [];

    if (isEditing) {
      let editingName = name;
      let editingContent = content;
      let editingPrice = price;
      let editingPackageCover = packageCover;

      if (name === "") editingName = ourPackageToEdit.name;
      if (content === [""]) editingContent = ourPackageToEdit.content;
      if (price === "") editingPrice = ourPackageToEdit.price;
      if (packageCover === "")
        editingPackageCover = ourPackageToEdit.packageCover;

      const apiOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: ourPackageToEdit._id,
          name: editingName,
          content: editingContent,
          price: editingPrice,
          packageCover: editingPackageCover,
        }),
      };

      fetch(
        "https://cap3backend.herokuapp.com/admin/updateourpackage",
        apiOptions
      )
        .then((res) => res.json())
        .then((res) => {
          let newOurPackages = ourPackages.map((ourPackage) => {
            if (ourPackage._id === ourPackageToEdit._id) {
              return res;
            }
            return ourPackage;
          });
          setOurPackages(newOurPackages);
          setIsLoading(false);
        });
    } else {
      let apiOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          content,
          price,
          packageCover,
        }),
      };

      fetch("https://cap3backend.herokuapp.com/admin/addourpackage", apiOptions)
        .then((res) => res.json())
        .then((res) => {
          setIsLoading(false);
          setOurPackages([...ourPackages, res]);
        });
    }

    setOurPackages(newOurPackages);
    setShowForm(false);
    setOurPackageToEdit({});
    setIndexToEdit("");
    setIsEditing(false);
  };

  const handleDeleteOurPackage = (id) => {
    let apiOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };

    fetch(
      "https://cap3backend.herokuapp.com/admin/deleteourpackage",
      apiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        const newOurPackages = ourPackages.filter((ourPackage) => {
          return ourPackage._id != id;
        });
        setOurPackages(newOurPackages);
        setIsLoading(false);
      });
  };

  const handleBookNow = (date) => {
    let apiOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        ourPackage: litwPackage._id,
        user: sessionStorage.userId,
        amount: litwPackage.price,
      }),
    };
    fetch("https://cap3backend.herokuapp.com/admin/addbooking", apiOptions);
    history.push("/bookings");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center py-5 teal-text font-weight-bold mt-5">
        Our Packages
      </h1>
      <CalendarModal
        toggleCalendar={toggleCalendar}
        setToggleCalendar={setToggleCalendar}
        handleBookNow={handleBookNow}
      />
      {sessionStorage.isAdmin === "true" && (
        <div className="text-center">
          <MDBBtn
            color="dark-green"
            className="rounded-0"
            onClick={() => setShowForm(!showForm)}
          >
            Add Package
          </MDBBtn>
        </div>
      )}

      <div>
        <OurPackageForm
          showForm={showForm}
          setShowForm={setShowForm}
          handleSaveOurPackage={handleSaveOurPackage}
          ourPackageToEdit={ourPackageToEdit}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <div className="d-flex justify-content-center flex-wrap">
          {ourPackages.map((ourPackage) => {
            return (
              <OurPackageRow
                key={ourPackage._id}
                ourPackage={ourPackage}
                handleDeleteOurPackage={handleDeleteOurPackage}
                setShowForm={setShowForm}
                setIsEditing={setIsEditing}
                setOurPackageToEdit={setOurPackageToEdit}
                setToggleCalendar={setToggleCalendar}
                toggleCalendar={toggleCalendar}
                setLitwPackage={setLitwPackage}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurPackages;
