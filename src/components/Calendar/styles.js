import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

export const useStyles = makeStyles((theme) => ({
  todayButton: {
    padding: '0 20px',
    backgroundColor: '#D9DAF3',
    marginLeft: '20px'
  },
  chevron: {
    color: '#D9D9D9',
    padding: 0,
  },
  formControl: {
    margin: '8px 15px',
    minWidth: 120,
    backgroundColor: '#D9DAF3',
    borderRadius: '7px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0',
  },
  eventContainer: {
    display: 'flex',
    alignItems: 'start',
    width: '100%',
    borderRadius: '6px',
    margin: '0 3px',
    color: 'black',
    padding: '5px 10px',
  }
}));

export const StyledCalendar = styled.div`
  position: relative;

  thead[role="presentation"] {
    background-color: #2D224C;
    width: unset;
  }

  th {
    font-weight: normal;
  }

  tr[role="row"] {
    border: 3.5px solid #2D224C;
  }

  td[role="gridcell"] {
    & .fc-daygrid-day-number {
      color: #2D224C !important;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
    }
    & .fc-daygrid-day-top {
      justify-content: center;
    }
  }

  th[role="columnheader"] {
    border: none;
    * {
      color: white;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .fc-header-toolbar {
    margin: 0 !important;
  }

  .fc-daygrid-day {
    border: 3.5px solid #2D224C;
  }

  .fc-header-toolbar {
    background-color: #2D224C;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: start;
    color: white;
  }

  .fc-scrollgrid {
    border: none;
  }

  .fc-media-screen {
    background-color: white;
    border-radius: 6px;
  }

  .fc-body .fc-row { max-height: 45px; }

  .fc .fc-view-harness {
    height: calc(100vh - 130px) !important;
    width: calc(100vw - 288px);
  }

  .rounded-el {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    margin-top: 5px;
    border: 1px solid #D4145A;
  }
`
export const StyledCustomToolBar = styled.div`
  position: absolute;
  top: 0;
  left: 240px;
  width: 100%;
  display: flex;
  height: 83px;
  align-items: center;
`