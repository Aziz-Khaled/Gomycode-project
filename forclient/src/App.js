import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/home';
import AboutUs from './Components/AboutUs/aboutUs'
import Vacations from './Components/Vacations/vac'
import NavBar from './Components/HomePage/navBar'
import Register from './Components/Register/register';
import SignUp from './Components/Register/SignUp'
import Reservation from './Components/Reservation/reservation'
import Details from './Components/Vacations/Details'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/AboutUs" component={AboutUs} />
        <Route path ="/login" component ={Register} />
        <Route path="/SignUp"  component={SignUp}/>
        <Route path="/Vacations" component={Vacations} />
        <Route path="/reservation" component={Reservation} />   
        <Route path="/Details/:id"  component={Details} />
      </Switch>
        
        
        
      
    </div>
  );
}

export default App;
