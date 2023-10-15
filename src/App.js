import React from 'react';
import Provider from './components/Provider';
import Layout from './components/Layout';
import { Grid, Paper } from '@mui/material';

function App() {
  return (
    <Provider>
      <Layout>
          <Grid item xs={12} md={8} sx={{ minHeight: 400 }}>
         {/* <Map>
          <Switch>
            <Route exact path="/">
              <CinemaMarkers />
            </Route>
             <Route path="/nearby" component={NearbyCinemaMarkers} />
             <Route
               path="/:franchiseId/:countryCode"
               component={CinemaMarkers}
             />
           </Switch>
         </Map> */}
       </Grid>
       <Grid item xs={12} md={4}>
         <Paper sx={{ p: 1 }}>
           {/* <Switch>
             <Route exact path="/" component={AsideIndex} />
             <Route path="/nearby" component={NearbyCinemasList} />
             <Route
               path="/:franchiseId/:countryCode"
               component={FranchiseCinemasList}
             />
             <Route path="*" component={NotFound} />
           </Switch> */}
         </Paper>
       </Grid>
  </Layout>
    </Provider>
  );
}

export default App;
