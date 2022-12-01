import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SearchIcon from '@material-ui/icons/Search';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useStyles } from './styles';


const ITEMS = {
  pathItems: [
    {
      label: 'Agenda',
      icon: (color) => <DateRangeIcon color={color} />,
      selected: true,
    },
    {
      label: 'Exercises',
      icon: (color) => <MenuBookIcon color={color} />,
    },
    {
      label: 'Materials',
      icon: (color) => <DescriptionIcon color={color} />,
    }
  ],
  profileItems: [
    {
      label: 'Personal Information',
      icon: (color) => <ContactMailIcon color={color} />,
    },
    {
      label: 'Invoices',
      icon: (color) => <SearchIcon color={color} />,
    },
    {
      label: 'Availability',
      icon: (color) => <EventAvailableIcon color={color} />,
    },
  ]
}

const SideBarItems = () => {
  const classes = useStyles()
  return (
    <>
      <Typography
        className={classes.heading}
        variant="h4"
        align="left"
        paragraph
        color='secondary'
      >
        YOUR PATH
      </Typography>
      <List>
        {ITEMS.pathItems.map((item, index) => {
          const itemColor = item.selected ? 'secondary' : 'primary'
          return (
            <ListItem
              selected={item.selected}
              classes={{ selected: classes.selected }}
              button
              key={index}
            >
              <ListItemIcon
                className={classes.listItemIcon}
              >
                {item.icon(itemColor)}
              </ListItemIcon>
              <ListItemText
                primary={<Typography type="body2" color={itemColor}>{item.label}</Typography>}
              />
              {
                item.selected && (
                  <ArrowForwardIosIcon color="secondary" />
                )
              }
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <Typography
        className={classes.heading}
        variant="h5"
        align="left"
        paragraph
        color="primary"
      >
        YOUR PROFILE
      </Typography>
      <List>
        {ITEMS.profileItems.map((item, index) => {
          const itemColor = item.selected ? 'secondary' : 'primary'
          return (
            <ListItem button key={index}>
              <ListItemIcon
                className={classes.listItemIcon}
              >
                {item.icon(itemColor)}
              </ListItemIcon>
              <ListItemText
                primary={<Typography type="body2" color={itemColor}>{item.label}</Typography>}
              />
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default SideBarItems