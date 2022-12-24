import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import WindowHeader from '../WindowCardComponents/WindowHeader';
import WindowBodyLinkList from '../WindowCardComponents/WindowBodyLinkList';
import bookMarks from '../Data/bookmarks.json';
import { Box } from '@mui/system';
const WindowCard = (props) => {
  const [cardData, getCardData] = useState({
    title: 'Wondows 3.11'
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
      border: 1,
      maxWidth: 346,
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "green"
    }}>      
    
      
    <Grid container sx={{border: .5, borderColor: windowTheme.iconBackground}}>
      <WindowHeader header={cardData} windowTheme={windowTheme}/>
    </Grid>
      <Grid>
      <WindowBodyLinkList bookmarkList={bookMarks} windowTheme={windowTheme}/>
      </Grid>
    </Box>      
      
  );
}
export default WindowCard;