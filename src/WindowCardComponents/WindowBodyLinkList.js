import { Grid } from "@mui/material";

const WindowBodyLinkList = (props) => {
  const jsonList = props.bookmarkList;
  console.log(`Body props:`);
  console.log( props);
  const bookMarkMap = jsonList.map(l => {
    return (
      <Grid>
        <div><h2>{l.Title}</h2>
        <p><a href={l.URL}/>{l.URL}</p>
        <p>Order: {l.Order}</p>
        </div>
      </Grid>
    )
  });
  return (
    <>
    {bookMarkMap}
    </>
  )
}
export default WindowBodyLinkList;