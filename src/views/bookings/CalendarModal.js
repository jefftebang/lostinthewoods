import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { MDBBtn } from "mdbreact";
import moment from "moment";

const CalendarModal = ({
  handleBookNow,
  toggleCalendar,
  setToggleCalendar,
}) => {
  const [date, setDate] = useState({ from: undefined, to: undefined });
  const { from, to } = date;
  const modifiers = { start: from, end: to };
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    fetch("https://cap3backend.herokuapp.com/admin/bookings")
      .then((res) => res.json())
      .then((res) => {
        const newDates = [];
        res.forEach((indivRes) => {
          newDates.push({
            from: moment(indivRes.date.from).toDate(),
            to: moment(indivRes.date.to).toDate(),
          });
        });
        setDisabledDates(newDates);
        console.log(newDates);
      });
  }, [toggleCalendar]);

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, date);
    setDate(range);
  };

  const handleResetClick = () => {
    setDate({});
  };

  return (
    <Modal
      className="RangeExample"
      isOpen={toggleCalendar}
      toggle={() => setToggleCalendar(true)}
    >
      <ModalHeader
        isOpen={toggleCalendar}
        toggle={() => setToggleCalendar(false)}
      >
        <h3>Select Date</h3>
      </ModalHeader>
      <ModalBody>
        <p>
          {!from && !to && "Please select the first day."}
          {from && !to && "Please select the last day."}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
              ${to.toLocaleDateString()}`}{" "}
          {from && to && (
            <button className="link" onClick={handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={handleDayClick}
          fromMonth={new Date()}
          disabledDays={[{ before: new Date() }, ...disabledDates]}
        />
      </ModalBody>
      <ModalFooter>
        <MDBBtn
          color="unique"
          onClick={() => {
            handleBookNow(date);
            setToggleCalendar(false);
            setDate({});
          }}
        >
          book now
        </MDBBtn>
      </ModalFooter>
    </Modal>
  );
};

export default CalendarModal;
