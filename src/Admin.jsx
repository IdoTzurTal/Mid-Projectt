import './Admin.css'
import { Box } from '@mui/system'
import { Tab } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import { NavLink } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import LogIn from './LogIn'
import Rooms from './Rooms'
import HomePage from './HomePage'

function Admin() {
    return (
        <div>
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <Tabs className="contactnav" centered>
                    <NavLink to='/Home' element={<HomePage />} > <Tab label="cyber pro" /></NavLink>
                    <NavLink to='/Rooms' element={<Rooms />}> <Tab label="Rooms" /></NavLink>
                    <NavLink to='/About' element={<About />} > <Tab label="about" /></NavLink>
                    <NavLink to='/Contact' element={<Contact />} > <Tab label="contact" /></NavLink>
                    <NavLink to='/Login' element={<LogIn />}> <Tab label="log in" /></NavLink>
                </Tabs>
            </Box>

        <h2>Welcome, Admin</h2>
        <h4>Today's meetings</h4>
        {/* <ul>
            <li>{todayMeeting} in {roomname}</li>
        </ul>
        <h4>Future meetings</h4>
        <ul>
            <li>{futureMeeting} in {roomname}</li>
        </ul> */}
        </div>
    )
}

export default Admin