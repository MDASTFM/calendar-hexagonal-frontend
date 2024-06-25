import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import './EventInfo.module.css';

const EventInfo = ({ event }) => {
  return (
    <>
      <Typography>{event.description}</Typography>
    </>
  );
};

EventInfo.propTypes = {
  event: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventInfo;
