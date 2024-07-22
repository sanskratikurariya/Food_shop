import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, {useState} from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link, NavLink } from 'react-router-dom';
import '../../style/header.css'
import MenuIcon from '@mui/icons-material/Menu';



function Header() {
    const [mobile, setMobile] = useState(false);
    // handle menu click 
    const handleClick=()=>{
        // true hai to false or false hhai to true
        setMobile(!mobile)

    }

    // menudrawer ke liye function create karige directly return karaige
    const drawer=(
        <Box onClick={handleClick} sx={{textAlign:"center" }} color={"black"} >

<Typography color={"goldenrod"} variant='h6' component="div" sx={{ flexGrow: 1 ,my:2 }}>
                            {/* koi bhi logo ya text add kara hai to typography ki help se add kr skte hai */}
                            <FastfoodIcon />
                            {/* ye icon hai jisko hum html tage ki tarah use krte hai import krke */}
                            My resturant
                        </Typography>
                        <Divider/>
                     <ul className='mobile-nevi'>
                            <li>
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li>
                                <Link to={'/menu'} >Menu</Link>
                            </li>
                            <li>
                                <Link to={'/about'} >About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} >Contact</Link>
                            </li>
                        </ul>
                    

        </Box>

    )
    return (
        <>
            <Box>
                {/* sx ka use custom style css ke liye use hota hai */}
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>

                    <Toolbar>
                        {/* size ko fix krne ke liye hum toolbar ka use krte hai */}
                        <IconButton onClick={handleClick} color='inherit' aria-label="open drawer" edge="start"  sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon  />
                        </IconButton>
                        <Typography color={"goldenrod"} variant='h6' component="div" sx={{ flexGrow: 1 }}>
                            {/* koi bhi logo ya text add kara hai to typography ki help se add kr skte hai */}
                            <FastfoodIcon />
                            {/* ye icon hai jisko hum html tage ki tarah use krte hai import krke */}
                            My resturant
                        </Typography>
                        {/* is box ke andar hu, navigation menu create karige */}
                        <Box sx={{display:{xs:'none',sm:'block'}}}>
                            {/* ul hai isko mobile ke liye none kar dige xs mtlb extra small device sm mtlb medum ke liye block kr dige mtlb vissible rahega */}
                        <ul className='nevigation'>
                            <li>
                                <NavLink activeClassName="active" to={'/'} >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/menu'} >Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'} >About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} >Contact</NavLink>
                            </li>
                        </ul>
                    </Box>
                    </Toolbar>
                

                </AppBar>
                <Box component="nav">
                    <Drawer variant='temporary' open={mobile} onClose={handleClick} sx={{ display:{xs:"block" ,sm:"none"}, "& .MuiDrawer-paper":{boxSizing:"border-box" , width:"240px"}}}>
                        {drawer}
                    </Drawer>
                    <Box>
                    <Toolbar/>
                    </Box>

                </Box>
            </Box>
       

        

        </>
    );
}

export default Header
