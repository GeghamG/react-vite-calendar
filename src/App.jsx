import { useState } from 'react'
import './App.css'
import Drawer from './components/Drawer'
import SideBarItems from './components/SideBarItems'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'
import Calendar from './components/Calendar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        content={<Calendar />}
      >
        <SideBarItems />
      </Drawer>
    </ThemeProvider>
  )
}

export default App
