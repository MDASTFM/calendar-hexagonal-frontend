import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Container } from "@mui/material";
import  AddEventModal from "./AddEventModal";
import  EventInfoModal  from "./EventInfoModal";
import  AddTodoModal  from "./AddTodoModal";

import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState([]);
  const [openAddEventModal, setOpenAddEventModal] = useState(false);
  const [openEventInfoModal, setOpenEventInfoModal] = useState(false);
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventFormData, setEventFormData] = useState({
    description: "",
    start: new Date(),
    end: new Date(),
    allDay: false,
    todoId: "",
  });

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setOpenEventInfoModal(true);
  };

  const handleSelectSlot = ({ start, end }) => {
    setEventFormData({ ...eventFormData, start, end });
    setOpenAddEventModal(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, { ...eventFormData, id: generateId() }]);
    setOpenAddEventModal(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event !== currentEvent));
    setOpenEventInfoModal(false);
  };

  return (
    <Container>
      <Button variant="outlined" onClick={() => setOpenAddTodoModal(true)}>
        Add Todo
      </Button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500, margin: "50px" }}
      />
      <AddEventModal
        open={openAddEventModal}
        handleClose={() => setOpenAddEventModal(false)}
        eventFormData={eventFormData}
        setEventFormData={setEventFormData}
        onAddEvent={handleAddEvent}
        todos={todos}
      />
      <EventInfoModal
        open={openEventInfoModal}
        handleClose={() => setOpenEventInfoModal(false)}
        onDeleteEvent={handleDeleteEvent}
        currentEvent={currentEvent}
      />
      <AddTodoModal
        open={openAddTodoModal}
        handleClose={() => setOpenAddTodoModal(false)}
        todos={todos}
        setTodos={setTodos}
      />
    </Container>
  );
};

export default EventCalendar;
