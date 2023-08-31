import './App.css'
import Grid from '@mui/material/Grid';

const App = () => {

  return (
    <>
      
      <Grid container spacing={1}>
        <Grid item md={2}>
          <h2>Alameda Financial 2023</h2>
          <h2>Profits and Losses</h2>
          <h2>Dashboard Owner</h2>

          <h5> ButtonDashboard</h5>
          <h5>Faq Page</h5>
        </Grid>
        
        <Grid container md={10}>
          <Grid item md={12}>
            <h1>DASHBOARD</h1>
            <h2>Welcome to your dashboard</h2>
          </Grid>
          <Grid item md={2}>
            <h2>431,231</h2>
            <h3>Sales Obtained</h3>
            <h3> -21%</h3>
          </Grid>
          <Grid item md={2}>
            <h3>431,231</h3>
            <h3>Sales Obtained</h3>
            <h3> -21%</h3>
          </Grid>
          <Grid item md={2}>
            <h2>431,231</h2>
            <h3>Sales Obtained</h3>
            <h3> -21%</h3>
          </Grid>
          <Grid item md={10}>
            <h2>Revenue Generated</h2>
            <h3> -$3,701,004,521.02 </h3>
          </Grid>
          <Grid item md={10}>
            <h3>Recent Transactions</h3>
            <hr/>
            <Grid>
              <h2>01e4dsa</h2>
              <div>John Doe</div>
              <h3>2021-09-01</h3>
              <h3>$43.95</h3>  
            </Grid>
            <hr/>
            <Grid>
              <h2>0315dsaa</h2>
              <div>Jack Dower</div>
              <h4>2022-04-01</h4>
              <h3>$133.45</h3>
            </Grid>
            <hr/>
            <Grid>
              <h2>01e4dsa</h2>
              <div>Johnny Appleseed</div>
              <h4>2022-09-01</h4>
              <h3>$430.95</h3>
            </Grid>
            
            <hr/>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App