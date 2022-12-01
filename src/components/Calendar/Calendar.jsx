import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import '@fullcalendar/react/dist/vdom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import momentTimezonePlugin from '@fullcalendar/moment-timezone';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Modal from '../Modal'
import CreateEvent from '../Events/CreateEvent'

import { StyledCalendar, StyledCustomToolBar, useStyles } from './styles'
import moment from 'moment'
import momentTimezone from 'moment-timezone'
import Grid from '@material-ui/core/Grid';
import Event from '../Events/Event'
import { convertToCalendarEvent } from '../../helpers/calendar'

const timezones = momentTimezone.tz.names().map(name => ({
  label: `${(name.split('/')[1] || name.split('/')[0]).replace('_', ' ')} GMT${momentTimezone.tz(name).format('Z')}`,
  value: name
}))

const INITIAL_EVENTS = [
  {
    duration: "15",
    start_date: "2022-11-30T14:00:00.000Z",
    start_time: "2022-11-30T14:46:57.983Z",
    topic: "Speaking class",
  },
  {
    duration: "20",
    start_date: "2022-12-02T18:00:00.000Z",
    start_time: "2022-12-02T18:46:57.983Z",
    topic: "Speaking class",
  },
  {
    duration: "25",
    start_date: "2022-12-03T17:00:00.000Z",
    start_time: "2022-12-03T17:46:57.983Z",
    topic: "Speaking class",
  },
]

const INITIAL_SELECTED_EVENT = {
  event: {},
}

const Calendar = ({
  onTodayClick,
  onPrevClick,
  onNextClick,
  onEventClick,
  onDateSelect,
}) => {
  const calendar = useRef(null)
  const [choosedTimezone, setChoosedTimezone] = useState('UTC')
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedEvent, setSelectedEvent] = useState(INITIAL_SELECTED_EVENT)
  const [events, setEvents] = useState([...INITIAL_EVENTS])
  const [open, setOpen] = useState(false)

  const classes = useStyles()

  const getEvents = () => events.map((event) => convertToCalendarEvent(event, choosedTimezone))

  const handleTodayClick = () => {
    calendar.current.getApi().today()
    onTodayClick()
  }

  const handlePrevClick = () => {
    calendar.current.getApi().prev()
    onPrevClick()
  }

  const handleNextClick = () => {
    calendar.current.getApi().next()
    onNextClick()
  }

  const createEvent = (event) => {
    if (!event.topic || !event.duration) return
    setEvents((prevEvents) => ([...prevEvents, event]))
    setOpen(false)
  }

  const handleSelect = (event) => {
    setSelectedDate(moment(event.start).toISOString())
    setOpen(true)
    onDateSelect(event)
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setOpen(true)
    onEventClick(event)
  }

  const dayCellContent = (day) => (
    day.dayNumberText = day.dayNumberText === '1'
      ? `1 ${moment(day.date).format("MMM")}`
      : day.dayNumberText
  )

  const renderTimezones = () => (
    <FormControl className={classes.formControl}>
      <Select
        value={choosedTimezone}
        onChange={({ target: { value: timezone } }) => setChoosedTimezone(timezone)}
      >
        {
          timezones.map((timezone, index) => (
            <MenuItem key={index} value={timezone.value}>{timezone.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )

  const renderEventContent = ({ event }) => {
    const startDate = moment(event.startStr).tz(choosedTimezone)
    const endDate = moment(event.endStr).tz(choosedTimezone)

    return (
      <Grid
        style={{
          backgroundColor: moment().isAfter(event.start) ? '#B4B4B4' : '#D9DAF3'
        }}
        className={classes.eventContainer}
      >
        <div className='rounded-el' />
        <div>
          <Typography>
            {`${moment(startDate).format("HH:mm")}-${moment(endDate).format("HH:mm")}`}
          </Typography>
          <Typography>{event.title}</Typography>
        </div>

      </Grid>
    )
  }

  return (
    <StyledCalendar>
      <StyledCustomToolBar>
        <IconButton
          onClick={handlePrevClick}
          className={classes.chevron}
          size='medium'
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleNextClick}
          className={classes.chevron}
          size='medium'
        >
          <ChevronRightIcon />
        </IconButton>
        <Button
          className={classes.todayButton}
          onClick={handleTodayClick}
          size="small"
          variant="contained"
        >
          Today
        </Button>
        {renderTimezones()}
      </StyledCustomToolBar>
      <FullCalendar
        ref={calendar}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentTimezonePlugin]}
        headerToolbar={{
          ledt: 'title',
          right: null
        }}
        events={getEvents()}
        initialView='dayGridMonth'
        editable
        selectable
        selectMirror
        dayMaxEvents
        eventContent={renderEventContent}
        aspectRatio={2.64}
        firstDay={1}
        eventBackgroundColor={'red'}
        displayEventTime
        initialEvents={[]}
        select={handleSelect}
        eventClick={handleEventClick}
        dayCellContent={dayCellContent}
      />
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false)
          setSelectedEvent(INITIAL_SELECTED_EVENT)
        }}
      >
        {
          selectedEvent.event.id ? (
            <Event event={selectedEvent} />
          ) : (
            <CreateEvent
              startDate={selectedDate}
              onCancel={() => {
                setOpen(false)
                setSelectedEvent(INITIAL_SELECTED_EVENT)
              }}
              onCreate={createEvent}
            />
          )
        }
      </Modal>
    </StyledCalendar>
  )
}

Calendar.propTypes = {
  onEventClick: PropTypes.func,
  onDateSelect: PropTypes.func,
  onTodayClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
}

Calendar.defaultProps = {
  onEventClick: () => { },
  onDateSelect: () => { },
  onTodayClick: () => { },
  onPrevClick: () => { },
  onNextClick: () => { },
}

export default Calendar