import PropTypes from 'prop-types';
import { TextField, Button, Box } from '@mui/material';
import styles from './AddEventForm.module.css';

const AddEventForm = ({ eventFormData, setEventFormData, onAddEvent }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box className={styles.sidebar}>
      <h2>New Event</h2>
      <TextField
        className={styles.textField}
        label="Title"
        name="title"
        variant="outlined"
        fullWidth
        value={eventFormData.title}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        className={styles.textField}
        label="Description"
        name="description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={eventFormData.description}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        className={styles.textField}
        label="Category"
        name="category"
        variant="outlined"
        fullWidth
        value={eventFormData.category}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        className={styles.textField}
        label="Date"
        name="date"
        type="date"
        variant="outlined"
        fullWidth
        value={eventFormData.date}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />
      <Button
        className={styles.button}
        variant="contained"
        fullWidth
        onClick={onAddEvent}
      >
        Add Event
      </Button>
    </Box>
  );
};

AddEventForm.propTypes = {
  eventFormData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  setEventFormData: PropTypes.func.isRequired,
  onAddEvent: PropTypes.func.isRequired,
};

export default AddEventForm;
