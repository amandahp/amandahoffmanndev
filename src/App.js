import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from './routes/Router'
import NotFound from './pages/Notfound/Notfound'
function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/"/>
        {routes.map((entry, index) => {return (<Route key={index+1} {...entry}/>)})}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
