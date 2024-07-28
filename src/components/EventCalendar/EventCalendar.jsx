import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { Box } from '@mui/material';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEventForm from '../AddEventForm/AddEventForm';
import AddEventModal from '../AddEventModal/AddEventModal';
import EventInfoModal from '../EventInfoModal/EventInfoModal';
import AddTodoModal from '../AddTodoModal/AddTodoModal';
import styles from './EventCalendar.module.css';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const generateId = () => Math.random().toString(36).substr(2, 9);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState([]);
  const [openAddEventModal, setOpenAddEventModal] = useState(false);
  const [openEventInfoModal, setOpenEventInfoModal] = useState(false);
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventFormData, setEventFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
  });

  const handleAddEvent = () => {
    setEvents([...events, { ...eventFormData, id: generateId() }]);
    setOpenAddEventModal(false);
  };

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setOpenEventInfoModal(true);
  };

  const handleSelectSlot = ({ start, end }) => {
    setEventFormData({ ...eventFormData, start, end });
    setOpenAddEventModal(true);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event !== currentEvent));
    setOpenEventInfoModal(false);
  };

  return (
    <Box className={styles.appContainer}>
      <AddEventForm
        eventFormData={eventFormData}
        setEventFormData={setEventFormData}
        onAddEvent={handleAddEvent}
      />
      <Box className={styles.mainContent}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          style={{ height: '100vh' }}
          className={styles.calendar}
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
      </Box>
    </Box>
  );
};

export default EventCalendar;
