import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UpArrow from '@mui/icons-material/ArrowDropUp';
import DownArrow from '@mui/icons-material/ArrowDropDown';

const WindowHeader = (props) => {

  const toolBarGridAttribs = {               
    border: 1,
    borderColor: "black",
    backgroundColor: "#C3C3C3"      
};
const modBorder = (sideObj) => { 
  console.log('sideObj:');
  console.log(sideObj.top); 
  const borderMod = {
    borderColor: toolBarGridAttribs.borderColor,
    backgroundColor: toolBarGridAttribs.backgroundColor
  };
  borderMod.borderTop = (sideObj.top || sideObj.top === 0) ? sideObj.top : toolBarGridAttribs.border;
  borderMod.borderRight =  (sideObj.right || sideObj.right === 0) ? sideObj.right : toolBarGridAttribs.border;
  borderMod.borderBottom = (sideObj.bottom || sideObj.bottom === 0) ? sideObj.bottom : toolBarGridAttribs.border;
  borderMod.borderLeft = (sideObj.left || sideObj.left === 0) ? sideObj.left : toolBarGridAttribs.border;
  console.log('borderMod');
  console.log(borderMod);
  return borderMod;
  }  
const closeButton = <Box sx={{
  backgroundColor: 'white',
  border: 2,
  fill: 'white',
  marginX: .35,
  marginTop: 1.5,
  paddingY: .15,
  paddingX: .2,
  boxShadow: 3
}} />



  return(
    <>    
      {/*Close Button*/}
        <Grid sx={toolBarGridAttribs} xs={1}>          
        {closeButton }
        </Grid>
      
      {/*Header Text*/}
        <Grid xs={9}>
          <Typography 
          sx={{
            fontSize: 20,
            fontFamily: props.windowTheme.font.type,
            borderTop: 0, 
            borderRight: 2,
            borderBottom: 2,
            borderLeft: 2,
            borderColor: "lightblue",//props.windowTheme.colors.headerBorderColor,
            backgroundColor: props.windowTheme.colors.headerBackground,
            color: props.windowTheme.colors.headerText,
            textAlign: "center",   

          }} 
          title="Header">{props.header.title}
          </Typography>
        </Grid>

        {/*Maximize/Minimize Buttons*/}
        <Grid sx={modBorder({top: 0})} xs={1}>
          <DownArrow sx={{marginTop: .3, boxShadow: 3, padding: 0}}/>        
        </Grid>
        <Grid sx={modBorder({top: 0, right: 0})} xs={1}>
          <UpArrow sx={{marginTop: .3, boxShadow: 3}} />        
        </Grid>
    </>
  );
}
export default WindowHeader;