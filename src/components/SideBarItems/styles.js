import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  heading: {
    padding: '16px 0 0 16px',
    margin: 0,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '99.5%',
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#D9DAF3 !important'
  },
}));
