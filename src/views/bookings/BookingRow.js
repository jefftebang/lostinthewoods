import React from "react";
import { MDBBtn } from "mdbreact";
import moment from "moment";

const BookingRow = ({ booking, handleDeleteBooking }) => {
  return (
    <tr className="text-center">
      <td>{booking?.ourPackage?.name}</td>
      <td>
        {moment(booking?.date?.from).format("dddd, MMMM DD, YYYY")} to{" "}
        {moment(booking?.date?.to).format("dddd, MMMM DD, YYYY")}
      </td>
      <td>{booking?.amount}</td>
      <td>{booking?.paymentStatus}</td>
      <td>
        <MDBBtn color="success" className="rounded-0">
          Pay
        </MDBBtn>
        <MDBBtn
          color="danger"
          className="rounded-0"
          onClick={() => handleDeleteBooking(booking._id)}
        >
          Delete
        </MDBBtn>
      </td>
    </tr>
  );
};

export default BookingRow;
