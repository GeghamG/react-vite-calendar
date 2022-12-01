import moment from 'moment'

export const convertToCalendarEvent = (event, timezone) => {
    const date = moment(event.start_date).format("YYYY-MM-DD")
    const time = moment(event.start_time).format("HH:mm")

    const startDateTime = moment(date + ' ' + time).toISOString()
    return {
      id: Date.now(),
      title: event.topic || '',
      start: startDateTime,
      end: moment(startDateTime).add(event.duration, 'minutes').toISOString(),
      extendedProps: {
        duration: event.duration,
        isFinished: moment().isAfter(startDateTime),
      },
      timeZone: timezone,
    }
  }