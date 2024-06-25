import PropTypes from "prop-types";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Box, Typography } from "@mui/material";
import './EventInfoModal.module.css';

const EventInfoModal = ({ open, handleClose, onDeleteEvent, currentEvent }) => {
  const onClose = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Event Info</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ fontSize: 14, marginTop: 3 }} color="text.secondary" gutterBottom>
            {currentEvent?.description}
          </Typography>
        </DialogContentText>
        <Box component="form"></Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button color="info" onClick={onDeleteEvent}>
          Delete Event
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EventInfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  currentEvent: PropTypes.shape({
    description: PropTypes.string,
  }),
};

export default EventInfoModal;
