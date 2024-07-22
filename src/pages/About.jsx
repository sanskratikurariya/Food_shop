import React from 'react'
import Outlay from '../components/layout/Outlay'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    // outlay se wrap kr lige
    <Outlay>
      <Box sx={{my:15, textAlign:"center",p:2,
        "& h3":{fontWeight:"bold",my:2,fontSize:"32px"},"& p":{
          textAlign:"justify",
        },
        "@media (max-width:600px)":{mt:0}
      }}>
        <Typography variant='h3'>
          Welcome To My Food Shop
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil perspiciatis temporibus magnam, facilis, impedit nostrum autem similique maxime adipisci aspernatur laudantium sunt doloribus necessitatibus fugiat quam tempora. Quod quidem earum dolorum! Quos quasi necessitatibus recusandae! Tempore mollitia magni dignissimos alias ducimus quibusdam rerum, deleniti voluptatibus eum dicta maxime inventore quas, cum facere sunt, dolorem dolores. Esse nulla molestias perspiciatis enim, voluptates ut dolorum ad expedita autem tenetur accusantium explicabo? Earum pariatur corporis doloremque vero delectus ab quae officia totam qui. Veniam, ipsa reiciendis facere ratione dicta est quis error consequatur libero! Dolorum eveniet veritatis eum labore quae veniam natus?
        </p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed voluptate in unde ipsam reiciendis hic nulla ea? Ea consequatur quisquam laborum magnam ut nemo ipsam distinctio. Et dolores tenetur saepe est quia dolor nemo delectus reprehenderit, expedita dolore voluptatibus qui eveniet, consectetur porro rem sint impedit nesciunt facilis dicta? Reiciendis, ea molestias blanditiis laborum, aspernatur expedita excepturi ducimus doloribus amet illo eligendi consectetur, quam eveniet odit totam. Hic totam, accusantium itaque modi, dolor enim tenetur amet in consequatur pariatur corporis omnis soluta corrupti distinctio! Nisi delectus cum quam, beatae, officia mollitia deleniti facilis dolor quisquam neque provident nostrum ea.</p>
      </Box>
    </Outlay>
  )
}

export default About
