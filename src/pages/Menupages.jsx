import React from 'react'
import Outlay from '../components/layout/Outlay'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/Data'

const Menupages = () => {
  return (
    
    <Outlay>
      <Box sx={{display:"flex" , flexWrap:"wrap" ,justifyContent:"center"}}>
        {/* isme hum menu list ko import karige */}
        {MenuList.map(menu =>(
          <Card sx={{maxWidth:"390px" , m:2}}>
            {/* card me hum menu ko display karaige */}
            <CardActionArea>
              <CardMedia  sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant='h3' gutterBottom component={'div'} >
                  {menu.name}
                </Typography>
                <Typography variant='h6'>
                  {menu.description}
                </Typography>
              </CardContent>

            
            </CardActionArea>

          </Card>
        ))}

      </Box>
    </Outlay>
  )
}

export default Menupages
