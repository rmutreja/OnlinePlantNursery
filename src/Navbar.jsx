import React from 'react';
import Home from './Home';
import Plants from './Components/Plants'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Seeds from './Components/Seeds'
import Planters from './Components/Planters'
import AboutUs from './Components/AboutUs'
import AddPlant from './Components/AddPlant'
import AddSeed from './Components/AddSeed'
import AddPlanter from './Components/AddPlanter'
import ViewPlant from './Components/ViewPlant'
import ViewPlantByName from './Components/ViewPlantByName'
import ViewAllPlants from './Components/ViewAllPlants'
import ViewAllPlantsOfType from './Components/ViewAllPlantsOfType'
import ViewSeed from './Components/ViewSeed'
import ViewSeedByName from './Components/ViewSeedByName'
import ViewAllSeeds from './Components/ViewAllSeeds'
import ViewAllSeedsOfType from './Components/ViewAllSeedsOfType'
import ViewPlanter from './Components/ViewPlanter'
import ViewPlanterByShape from './Components/ViewPlanterByShape'
import ViewAllPlanters from './Components/ViewAllPlanters'
import ViewAllPlantersInRange from './Components/ViewAllPlantersInRange'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class Navbar extends React.Component {
    render(){
        return(
            <Router>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link class="navbar-brand" to="">Online Plant Nursery</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/AboutUs">About Us</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Plants
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" to="/AddPlant">Add Plant</Link></li>
          <li><Link class="dropdown-item" to="/ViewPlant">View Plant by ID</Link></li>
          <li><Link class="dropdown-item" to="/ViewPlantByName">View Plant by Common Name</Link></li>
          <li><Link class="dropdown-item" to="/ViewAllPlants">View All Plants</Link></li>
          <li><Link class="dropdown-item" to="/ViewAllPlantsOfType">View All Plants of a Type</Link></li>          
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Seeds
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" to="/AddSeed">Add Seed</Link></li>
          <li><Link class="dropdown-item" to="/ViewSeed">View Seed by ID</Link></li>
          <li><Link class="dropdown-item" to="/ViewSeedByName">View Seed by Common Name</Link></li>
          <li><Link class="dropdown-item" to="/ViewAllSeeds">View All Seeds</Link></li>
          <li><Link class="dropdown-item" to="/ViewAllSeedsOfType">View All Seeds of a Type</Link></li>          
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Planters
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" to="/AddPlanter">Add Planter</Link></li>
          <li><Link class="dropdown-item" to="/ViewPlanter">View Planter by ID</Link></li>
          <li><Link class="dropdown-item" to="/ViewPlanterByShape">View Planter by Shape</Link></li>
          <li><Link class="dropdown-item" to="/ViewAllPlanters">View All Planters</Link></li>
          <li><Link class="dropdown-item" to="/ViewAllPlantersInRange">View All Planters in a Range</Link></li>          
        </ul>
      </li>
       </ul>
    <form class="d-flex">
      <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
      &nbsp;&nbsp;
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

    </form>
    <ul class="navbar-nav">
    <li class="nav-item">
        <Link class="nav-link" to="/SignIn">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/SignUp">Sign Up</Link>
      </li>
      </ul>
      
    </div>
  </div>
 

</nav>
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/Plants" component={Plants}/>
         <Route path="/Seeds" component={Seeds}/>
         <Route path="/Planters" component={Planters}/>
         <Route path="/AboutUs" component={AboutUs}/>
         <Route path="/AddPlant" component={AddPlant}/>
         <Route path="/AddSeed" component={AddSeed}/>
         <Route path="/AddPlanter" component={AddPlanter}/>
         <Route path="/ViewPlant" component={ViewPlant}/>
         <Route path="/ViewPlantByName" component={ViewPlantByName}/>
         <Route path="/ViewAllPlants" component={ViewAllPlants}/>
         <Route path="/ViewAllPlantsOfType" component={ViewAllPlantsOfType}/>
         <Route path="/ViewSeed" component={ViewSeed}/>
         <Route path="/ViewSeedByName" component={ViewSeedByName}/>
         <Route path="/ViewAllSeeds" component={ViewAllSeeds}/>
         <Route path="/ViewAllSeedsOfType" component={ViewAllSeedsOfType}/>
         <Route path="/ViewPlanter" component={ViewPlanter}/>
         <Route path="/ViewPlanterByShape" component={ViewPlanterByShape}/>
         <Route path="/ViewAllPlanters" component={ViewAllPlanters}/>
         <Route path="/ViewAllPlantersInRange" component={ViewAllPlantersInRange}/>
         <Route path="/SignUp" component={SignUp}/>
         <Route path="/SignIn" component={SignIn}/>
         </Switch>
         </Router>
        )
    }
}
export default Navbar