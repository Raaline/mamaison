import AddLogement from "./AddLogement";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "../App";
import Accueil from "./Accueil";
import detail from "./detail"
import Signup from "./user/signup";
import Login from "./user/Login";
import Listelog from "../Listelog";

function Main() {
    return <BrowserRouter>
      <Switch>

      <Route exact path="/">
        <Accueil />
        </Route>

        <Route path="/addLogement">
        <AddLogement />
        </Route>

        <Route path="/signup">
        <Signup />
        </Route>

        <Route path="/listelog">
        <Listelog />
        </Route>

        <Route path="/login">
        <Login />
        </Route>

        <Route path="/app">
        <App />
        </Route>

        <Route path="/detail/:id" component={detail}/>
    
   
      </Switch>
    </BrowserRouter>
}

export default Main; 