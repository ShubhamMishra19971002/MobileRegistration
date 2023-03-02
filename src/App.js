import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Screen1 from "./Screen/Screen1";
import Screen2 from "./Screen/Screen2";
import Screen3 from "./Screen/Screen3";
import Screen4 from "./Screen/Screen4";
import Grid from "./Screen/grid";
import Referral from "./Screen/Referral";
import Cards from "./Screen/Cards";
import Card from "./Screen/Card";
import Income from "./Screen/Income";
export default function App() {
  return (
    <>
<Router>
      <div> <Switch>
          <Route path="/1">
          <Screen1/>
          </Route>
          <Route path="/2">
           <Screen2/>
          </Route>
          <Route path="/3">
            <Screen3/>
          </Route>
          <Route path="/3">
          <Screen4/>
          </Route>

          <Route path="/5">
          <Grid/>
          </Route>

          <Route path="/6">
          <Referral/>
          </Route>
          <Route path="/7">
          <Cards/>
          </Route>

          <Route path="/8">
          <Card/>
          </Route>

          <Route path="/9">
          <Income/>
          </Route>


          
        </Switch>
      </div>
    </Router>
</>   
  )
}

