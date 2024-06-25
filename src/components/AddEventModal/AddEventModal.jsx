import PropTypes from "prop-types";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Autocomplete,
  Box,
} from "@mui/material";
import './AddEventModal.module.css';

const AddEventModal = ({ open, handleClose, eventFormData, setEventFormData, onAddEvent, todos }) => {
  const { description } = eventFormData;

  const onClose = () => handleClose();

  const onChange = (event) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTodoChange = (e, value) => {
    setEventFormData((prevState) => ({
      ...prevState,
      todoId: value?._id,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add event</DialogTitle>
      <DialogContent>
        <DialogContentText>To add an event, please fill in the information below.</DialogContentText>
        <Box component="form">
          <TextField
            name="description"
            value={description}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={onChange}
          />
          <Autocomplete
            onChange={handleTodoChange}
            disablePortal
            id="combo-box-demo"
            options={todos}
            sx={{ marginTop: 4 }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Todo" />}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={description === ""} color="success" onClick={onAddEvent}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  eventFormData: PropTypes.shape({
    description: PropTypes.string,
    todoId: PropTypes.string,
  }).isRequired,
  setEventFormData: PropTypes.func.isRequired,
  onAddEvent: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default AddEventModal;
