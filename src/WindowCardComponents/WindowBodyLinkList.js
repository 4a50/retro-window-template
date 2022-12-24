import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const WindowBodyLinkList = (props) => {
  const jsonList = props.bookmarkList;
  console.log(`Body props:`);
  console.log( props);
  const bookMarkMap = jsonList.map(l => {
    return (
      <Grid key={`${l.title}-${l.Order}` }>
        <h2>{l.Title}</h2>
        <p><a href={l.URL}>{l.URL}</a></p>
        <p>Order: {l.Order}</p>        
      </Grid>
    )
  });
  return (
    <>
    <Box sx={{border: 1, margin: 1, padding: 1, backgroundColor: "white"}}>
    {bookMarkMap}
    </Box>
    </>
  )
}
export default WindowBodyLinkList;