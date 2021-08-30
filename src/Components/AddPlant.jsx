import React,{Component} from 'react'
import PlantService from '../Services/PlantService';
class AddPlant extends Component{
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      pheight:'',
      spread:'',
      pname:'',
      btime:'',
      ptype:'',
      pdesc:'',
      pstock:'',
      pcost:'',
      diff:'',
      temp:'',
      medi:'',
      msg:''
    };
     //For a given function, creates a bound function that has the same body as the original function. 
     //The this object of the bound function is associated with the specified object, and has the specified initial parameters.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["pheight"] = "";
        input["spread"] = "";
        input["pname"] = "";
        input["btime"] = "";
        input["ptype"] = "";
        input["pdesc"] = "";
        input["pstock"] = "";
        input["pcost"] = "";
        input["diff"] = "";
        input["temp"] = "";
        input["medi"] = "";
        this.setState({input:input});
  
        alert('New Plant Added');
        PlantService.addPlant(
        this.state.pheight,
        this.state.spread,
        this.state.pname,
        this.state.btime,
        this.state.ptype,
        this.state.pdesc,
        this.state.pstock,
        this.state.pcost,
        this.state.diff,
        this.state.temp,
        this.state.medi
        ).then(response=>
          {
            // console.log(response.data)
            this.setState({
              msg:response.data,
              pheight:'',
              spread:'',
              pname:'',
              btime:'',
              ptype:'',
              pdesc:'',
              pstock:'',
              pcost:'',
              diff:'',
              temp:'',
              medi:'',
              error:''
            })
          })
          .catch(errors=>
            {
              console.log(errors)
              this.setState({
                pheight:'',
                spread:'',
                pname:'',
                btime:'',
                ptype:'',
                pdesc:'',
                pstock:'',
                pcost:'',
                diff:'',
                temp:'',
                medi:'',
                error:errors.toString(),
                msg:''
              })
            })
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 
    if (!input["pheight"]) {
      isValid = false;
      errors["pheight"] = "Please enter plant height.";
    }

    // if (typeof input["username"] !== "undefined") {
    //   const re = /^\S*$/;
    //   if(input["username"].length < 6 || !re.test(input["username"])){
    //       isValid = false;
    //       errors["username"] = "Please enter valid username.";
    //   }
    // }

    if (!input["spread"]) {
      isValid = false;
      errors["spread"] = "Please choose plant spread.";
    }

    // if (typeof input["email"] !== "undefined") {
        
    //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //   if (!pattern.test(input["email"])) {
    //     isValid = false;
    //     errors["email"] = "Please enter valid Email address.";
    //   }
    // }

    if (!input["pname"]) {
      isValid = false;
      errors["pname"] = "Please enter plant common name.";
    }

    // if (typeof input["phone"] !== "undefined") {
        
    //   var pattern = new RegExp(/^[0-9\b]+$/);
    //   if (!pattern.test(input["phone"])) {
    //     isValid = false;
    //     errors["phone"] = "Please enter only number.";
    //   }else if(input["phone"].length != 10){
    //     isValid = false;
    //     errors["phone"] = "Please enter valid Mobile number.";
    //   }
    // }

    if (!input["btime"]) {
      isValid = false;
      errors["btime"] = "Please choose bloom time.";
    }

    if (!input["ptype"]) {
      isValid = false;
      errors["ptype"] = "Please enter plant type.";
    }

    // if (typeof input["password"] !== "undefined") {
    //   if(input["password"].length < 6){
    //       isValid = false;
    //       errors["password"] = "Please add at least 6 charachter.";
    //   }
    // }

    // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
    //   if (input["password"] != input["confirm_password"]) {
    //     isValid = false;
    //     errors["password"] = "Passwords don't match.";
    //   }
    // }

    if (!input["pdesc"]) {
        isValid = false;
        errors["pdesc"] = "Please enter plant description.";
      }

      if (!input["pstock"]) {
        isValid = false;
        errors["pstock"] = "Please enter number of plants in stock.";
      }
      
      if (!input["pcost"]) {
        isValid = false;
        errors["pcost"] = "Please enter cost of the plant.";
      }
      
      if (!input["diff"]) {
        isValid = false;
        errors["diff"] = "Please choose difficulty level.";
      }
      
      if (!input["temp"]) {
        isValid = false;
        errors["temp"] = "Please choose optimum plant temperature.";
      } 

      if (!input["medi"]) {
        isValid = false;
        errors["medi"] = "Please choose plant usage.";
      }
      
    this.setState({
      errors: errors
    });

    return isValid;
}

render(){
    return(
        <div className='container'>
            <h3 className='text-primary text-center'>Adding Plant</h3>
            <hr/>
            <h4 className='text-success'>{this.state.msg && this.state.msg}</h4>
            <h4 className='text-danger'>{this.state.error && this.state.error}</h4>
            <form onSubmit={this.handleSubmit} >
                <div className='form-group'>
                    <label for="pheight">Plant Height</label>
                    <input className='form-control' name='pheight' id='pheight' value={this.state.input.pheight}  onChange={this.handleChange} placeholder="Enter plant height"/>
                    <div className="text-danger">{this.state.errors.pheight}</div>
                </div>
                <div className='form-group'>
                    <label for="spread">Plant Spread</label>
                    <select name='spread' id='spread' className='form-control'value={this.state.input.spread}  onChange={this.handleChange}>
                        <option value=''>--Select Plant Spread--</option>
                        <option value='High'>High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Low'>Low</option>

                    </select>
                    <div className="text-danger">{this.state.errors.spread}</div>
                </div>

                <div className='form-group'>
                    <label for="pname">Plant Common Name</label>
                    <input className='form-control' name='pname' id='pname' value={this.state.input.pname}  onChange={this.handleChange} placeholder="Enter plant common name"/>
                    <div className="text-danger">{this.state.errors.pname}</div>
                    </div>

                <div className='form-group'>
                    <label for="btime">Bloom Time</label>
                    <select name='btime' id='btime' className='form-control' value={this.state.input.btime}  onChange={this.handleChange}>
                        <option value=''>--Select Bloom Time--</option>
                        <option value='Morning'>Morning</option>
                        <option value='Afternoon'>Afternoon</option>
                        <option value='Evening'>Evening</option>
                        <option value='Night'>Night</option>

                    </select>
                    <div className="text-danger">{this.state.errors.btime}</div>
                </div>

                <div className='form-group'>
                    <label for="ptype">Plant Type</label>
                    <input className='form-control' name='ptype' id='ptype' value={this.state.input.ptype}  onChange={this.handleChange} placeholder="Enter plant type"/>
                    <div className="text-danger">{this.state.errors.ptype}</div>
                    </div>


                <div className='form-group'>
                    <label for="pdesc">Plant Description</label>
                    <input className='form-control' name='pdesc' id='pdesc' value={this.state.input.pdesc}  onChange={this.handleChange} placeholder="Enter description"/>
                    <div className="text-danger">{this.state.errors.pdesc}</div>
                    </div>


                <div className='form-group'>
                    <label for="pstock">Plant Stock</label>
                    <input className='form-control' name='pstock' id='pstock' value={this.state.input.pstock}  onChange={this.handleChange} placeholder="Enter stock available"/>
                    <div className="text-danger">{this.state.errors.pstock}</div>
                    </div>
                
                <div className='form-group'>
                    <label for="pcost">Plant Cost</label>
                    <input className='form-control' name='pcost' id='pcost' value={this.state.input.pcost}  onChange={this.handleChange} placeholder="Enter cost"/>
                    <div className="text-danger">{this.state.errors.pcost}</div>
                    </div>

                <div className='form-group'>
                    <label for="diff">Difficulty Level</label>
                    <select name='diff' id='diff' className='form-control' value={this.state.input.diff}  onChange={this.handleChange}>
                        <option value=''>--Select Difficuilty Level--</option>
                        <option value='Easy'>Easy</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='Tough'>Tough</option>
                    </select>
                    <div className="text-danger">{this.state.errors.diff}</div>
                </div>

                <div className='form-group'>
                    <label for="temp">Temperature</label>
                    <select name='temp' id='temp' className='form-control' value={this.state.input.temp}  onChange={this.handleChange}>
                        <option value=''>--Select Temperature--</option>
                        <option value='Low'>Low</option>
                        <option value='Room Temp'>Room Temp</option>
                        <option value='High'>High</option>
                    </select>
                    <div className="text-danger">{this.state.errors.temp}</div>
                </div>
                
                <div className='form-group'>
                    <label for="medi">Usage</label>
                    <select name='medi' id='medi' className='form-control' value={this.state.input.medi}  onChange={this.handleChange}>
                        <option value=''>--Select Usage--</option>
                        <option value='Medicinal'>Medicinal</option>
                        <option value='Culinary'>Culinary</option>

                    </select>
                    <div className="text-danger">{this.state.errors.medi}</div>

                </div>
                <div className="text-center">
                <button className="btn btn-info mt-2">Add Plant</button>
                </div>
            </form>
        </div>
    )
}
}
export default AddPlant