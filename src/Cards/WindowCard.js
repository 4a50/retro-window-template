import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import WindowHeader from '../WindowCardComponents/WindowHeader';
import WindowBodyLinkList from '../WindowCardComponents/WindowBodyLinkList';
import bookMarks from '../Data/bookmarks.json';
import { Box } from '@mui/system';
const WindowCard = (props) => {
  const [cardData] = useState({
    title: 'Slalom Links'
  });  
  console.log(RemoveOutlinedIcon.toString()); 
  
  const windowTheme = {
    colors: {
    headerText: '#FFFFFF', //White
    headerBackground: '#0000C2', //Window Blue
    headerBorderColor: '#000000', //Black   
    iconBackground: '#C3C3C3'  //Windows Gray
    },
    font: {
      type: 'Arial'
    }
  }


  return (
    <Box sx={{
      border: 2,
      maxWidth: 346,      
      borderColor: "black",
      backgroundColor: "lightgrey",
      padding: 0
    }}>      
    <Box sx={{ 
           
      boxShadow: "none",
      borderTop:0,
      BorderRight: 2,
      borderBottom: 2,
      borderLeft: 2,
      maxWidth: 346,
      borderColor: "black",
      backgroundColor: "white",
      margin: .2,
      
      

    }}>      

      <WindowHeader header={cardData} windowTheme={windowTheme}/>    
      <Grid>
      <WindowBodyLinkList bookmarkList={bookMarks} windowTheme={windowTheme}/>
      </Grid>
    </Box>   
    </Box>   
      
  );
}
export default WindowCard;