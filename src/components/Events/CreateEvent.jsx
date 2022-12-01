import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import moment from 'moment'

const INITIAL_EVENT = {
  topic: "",
  duration: "",
  start_date: moment().toISOString(),
  start_time: moment().toISOString(),
}

const CreateEvent = ({ onCancel, onCreate, startDate }) => {
  const classes = useStyles()

  const [event, setEvent] = useReducer((state, payload) => ({
    ...state,
    ...payload
  }), { ...INITIAL_EVENT, start_date: startDate })


  return (
    <Box className={classes.container}>
      <TextField
        className={classes.textField}
        value={event.topic}
        onChange={(event) => setEvent({ topic: event.target.value })}
        label="Topic"
      />
      <TextField
        className={classes.textField}
        value={event.duration}
        onChange={(event) => setEvent({ duration: event.target.value })}
        type="number"
        label="Duration"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            variant="inline"
            label="Time picker"
            value={event.start_time}
            onChange={(event) => {
              setEvent({ start_time: moment(event) })
            }}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid className={classes.footer}>
        <Button
          style={{ marginRight: 10 }}
          variant="contained"
          color="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onCreate(event)}
        >
          Add Event
        </Button>
      </Grid>
    </Box >
  )
}

CreateEvent.propTypes = {
  onCancel: PropTypes.func,
  onCreate: PropTypes.func,
  startDate: PropTypes.string,
}

CreateEvent.defaultProps = {
  onCancel: () => { },
  onCreate: () => { },
  startDate: moment(),
}


export default CreateEvent