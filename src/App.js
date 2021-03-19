import React from 'react';
import Header from './Header';
import Genders from './Genders';
import EditarGenero from './EditarGenero';
import NovoGenero from './NovoGenero';
import Series from './Series';
import NovaSerie from './NovaSerie';
import InfoSerie from './InfoSerie';

import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom'



const Home = () => {
  return <h1> Home</h1>
}

function App() {
  
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/genders' exact component={Genders}/>
        <Route path='/genders/novo' component={NovoGenero}/>
        <Route path='/genders/:id' component={EditarGenero}/>
        <Route path='/series' exact component={Series}/>
        <Route path='/series/novo' component={NovaSerie}/>
        <Route path='/series/:id' component={InfoSerie}/>

      </Switch>
    </div>  
    </Router>       
  );
}

export default App;
