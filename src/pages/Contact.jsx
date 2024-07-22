import React from 'react'
import Outlay from '../components/layout/Outlay'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Outlay>
      <Box sx={{my:5,ml:10 ,"& h3":{fontWeight:"bolder",mb:2}}}>  
        {/* typography heding create krne ke liye krte hai */}
        <Typography variant='h3'>
          Contact My Food Shop
        </Typography>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam, autem vitae illum magnam quia in beatae nemo cumque debitis eius harum nulla! Quisquam est reprehenderit quidem totam, quae ipsam!</p>
      </Box>
      <Box sx={{m:3,width:"600px", ml:10 ,"@media (max-width:600px)":{
        width:"300px",
      }}}>
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
           <TableCell sx={{bgcolor:"black", color:"white"}} align='center' >
            Contact Details
            </TableCell>   
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
              <SupportAgentIcon  sx={{color:"red",pt:2}} />  1800-00-00 (torollfree)
              </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
              <EmailIcon  sx={{color:"skyblue",pt:2}} />  help@gmail.com
              </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
              <PhoneIcon  sx={{color:"green",pt:2}} /> 1234567890
              </TableCell>
          </TableRow>
          </TableBody>

        </Table>
        
      </TableContainer>
      </Box>
     
    </Outlay>
  )
}

export default Contact
