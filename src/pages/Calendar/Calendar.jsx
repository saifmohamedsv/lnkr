import React, { useState } from "react";
// Calendar Deps
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import enUS from "date-fns/locale/en-US";
import Typography from "@mui/material/Typography";
// Styling Deps.
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEvent from "./AddEvent/AddEvent";
import Box from "@mui/material/Box";
import Highlights from "./Highlights/Highlights";

// Events & Utils
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [];

const Calendar = () => {
  // States
  const [clickedSlotDate, setSlotDate] = useState();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [allEvents, setAllEvents] = useState(events);
  const [open, setOpen] = useState(false);
  // Functions
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddEvent = (event) => {
    setAllEvents((prev) => [...prev, event]);
  };
  return (
    <Box
      sx={{
        height: "100%",
        flexGrow: 1,
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "24px",
      }}
    >
      <BigCalendar
        timeslots={1}
        style={{
          width: "70%",
          height: "90%",
        }}
        views={["month", "work_week", "agenda"]}
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(e) => {
          const Selected = allEvents.filter((event) => event.title === e.title);
          setSelectedEvent(Selected[0]);
          handleOpen();
        }}
        selectable
        onSelectSlot={(e) => {
          setSlotDate({ start: e.start, end: e.end });
          handleOpen();
          console.log(e);
        }}
      >
        Calendar
      </BigCalendar>
      <Highlights />
      <AddEvent
        open={open}
        handleClose={handleClose}
        handleAddEvent={handleAddEvent}
        data={selectedEvent ? selectedEvent : null}
        slotDate={clickedSlotDate}
      />
    </Box>
  );
};

export default Calendar;
