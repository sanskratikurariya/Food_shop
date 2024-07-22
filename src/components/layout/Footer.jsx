import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: "#1a1a19", color: "white", p: 2 }}>
                {/* icon svg me hote hai isliye hum unko directly target nahi kr skte hai isliye hum box me target karige  */}
                <Box sx={{ my:3, "& svg":{fontSize:"60px",cursor:"pointer",
                    mr:2,
                },
                "& svg:hover":{color:"goldenrod",
                    transform:"translateX(5px)",
                    transition:"all 400ms"
                }}} >
                    {/* icons */}
                    <InstagramIcon />
                    <TwitterIcon />
                    <GitHubIcon/>
                    <YouTubeIcon/>
                </Box>
                <Typography variant='h8' >
                    All Right Reserved &copy: My Food App
                </Typography>
            </Box>

        </>
    )
}

export default Footer