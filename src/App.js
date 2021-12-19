import CarCard from "./components/CarCard/index";
import { Cars } from "./data";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Cars</h1>
      <Grid container direction="row" justifyContent="space-around">
        {Cars.map((car) => (
          <Grid style={{margin: '10px 5px'}} key={car._id} item>
            <CarCard {...car} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
