import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Loading from "../../components/Loading";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://cap3backend.herokuapp.com/admin/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: sessionStorage.userId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setBookings(res);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteBooking = (id) => {
    let apiOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };

    fetch("https://cap3backend.herokuapp.com/admin/deletebooking", apiOptions)
      .then((res) => res.json())
      .then((res) => {
        const newBookings = bookings.filter((booking) => {
          return booking._id != id;
        });
        setBookings(newBookings);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1 className="text-center py-5 teal-text font-weight-bold mt-5">
        Bookings
      </h1>
      <Table bordered>
        <thead>
          <tr className="text-center">
            <th className="font-weight-bold">Package</th>
            <th className="font-weight-bold">Date</th>
            <th className="font-weight-bold">Amount</th>
            <th className="font-weight-bold">Payment Status</th>
            <th style={{ width: "25%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDeleteBooking={handleDeleteBooking}
            />
          ))}
          {/* <BookingRow /> */}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;
