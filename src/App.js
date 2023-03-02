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

          
        </Switch>
      </div>
    </Router>
</>   
  )
}

